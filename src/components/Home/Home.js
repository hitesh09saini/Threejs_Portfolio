import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const Home = () => {
  const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

  const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
  useEffect(() => {


    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(textureURL);
    const displacementMap = textureLoader.load(displacementURL);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });

    const geometry = new THREE.SphereGeometry(2, 60, 60);
    const material = new THREE.MeshPhongMaterial(
      {
        color: 0xffffff,
        map: moonTexture,
        displacementMap: displacementMap,
        displacementScale: 0.06,
        bumpMap: displacementMap,
        bumpScale: 0.04,
        reflectivity: 0,
        shininess: 0
      }
    );
    const mesh = new THREE.Mesh(geometry, material);
    const pointLight1 = new THREE.PointLight(0xffffff, 200);
    pointLight1.position.z = 10;
    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.z = -10;


    // const l1h = new THREE.PointLightHelper(pointLight1)
    // const l2h = new THREE.PointLightHelper(pointLight2)
    const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(mesh);
    scene.add(pointLight2);
    scene.add(pointLight1);
    // scene.add(l1h);
    // scene.add(l2h);
    scene.add(controls);


    camera.position.z = 10;

    const animation = () => {

      requestAnimationFrame(animation);
      // mesh.rotation.y += 0.01 ;
      mesh.rotation.z += 0.01;
      // mesh.rotation.x += 0.01 ;
      // camera.position.x +=0.01
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }



    animation();


  }, []);
  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home
