import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Stars = () => {
  const containerRef = useRef();
  const windowHalf = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  useEffect(() => {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);


    containerRef.current.appendChild(renderer.domElement);

    // Load the image (space1.jpg)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/components/nebula1.jpg");

    // Create a sphere with the image as a material
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Set the camera position
    camera.position.set(0, 0, 20);

    // Render loop with automatic rotation
    const animate = () => {
      // Rotate the sphere on its own
      sphere.rotation.x += 0.0035; // Adjust the rotation speed as needed
      sphere.rotation.y += 0.0035;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      windowHalf.x = innerWidth / 2;
      windowHalf.y = innerHeight / 2;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div ref={containerRef} />
  );
};

export default Stars;