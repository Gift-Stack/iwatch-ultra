"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { IWatchUltra } from "@/app/components/IWatchUltra";

const IWatch = () => {
  // const gltf = useLoader(GLTFLoader, "/models/scene.gltf");
  // const { scene } = useGLTF("/models/apple_watch_ultra.glb");

  return (
    <div className="min-h-screen">
      <Canvas style={{ height: "100vh" }} camera={{ far: 1000 }}>
        {/* <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/img/workshop_1k.hdr"
          background
        /> */}
        <ambientLight intensity={0.5} />
        <color attach="background" args={["#f0f0f0"]} />
        <Suspense fallback={null}>
          <IWatchUltra />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default IWatch;
