"use client";

import { Canvas } from "@react-three/fiber";
import { Edges, Text } from "@react-three/drei";
import { Suspense } from "react";

const ink = "#0A0A0A";
const paper = "#F6F3EE";
const ground = "#E8E6E0";

function LetterBlock({
  letter,
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  letter: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={paper}
          roughness={0.42}
          metalness={0.06}
        />
        <Edges color={ink} threshold={20} />
      </mesh>
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.44}
        color={ink}
        anchorX="center"
        anchorY="middle"
        maxWidth={0.9}
        outlineWidth={0.012}
        outlineColor="#F6F3EE"
      >
        {letter}
      </Text>
    </group>
  );
}

function ScholScene() {
  return (
    <>
      <color attach="background" args={["#F2F0EC"]} />
      <ambientLight intensity={0.62} />
      <directionalLight
        castShadow
        position={[4.2, 7.5, 5]}
        intensity={1.15}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.28} />

      <group position={[0, -0.1, 0]}>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
        >
          <planeGeometry args={[9.5, 9.5]} />
          <meshStandardMaterial color={ground} roughness={0.95} metalness={0} />
        </mesh>

        {/* Fixed still-life arrangement: scholastic blocks — B & S + secondary blocks */}
        <group
          position={[0, 0, 0]}
          rotation={[-0.18, 0.42, 0.04]}
          scale={0.97}
        >
          <LetterBlock
            letter="B"
            position={[-1.15, 0, 0.15]}
            rotation={[0.05, 0.2, 0.03]}
          />
          <LetterBlock
            letter="&"
            position={[0, 0.1, 0]}
            rotation={[-0.04, 0, 0.02]}
            scale={0.92}
          />
          <LetterBlock
            letter="S"
            position={[1.2, 0, -0.1]}
            rotation={[-0.02, -0.18, -0.04]}
          />
          <LetterBlock
            letter="A"
            position={[-1.45, -0.12, 1.25]}
            rotation={[0.1, 0.45, 0.06]}
            scale={0.72}
          />
          <LetterBlock
            letter="C"
            position={[1.45, -0.1, 1.15]}
            rotation={[-0.06, -0.4, 0.04]}
            scale={0.68}
          />
        </group>
      </group>
    </>
  );
}

export function HeroScholBlocks3D() {
  return (
    <div className="relative aspect-[6/7] w-full min-h-[380px] overflow-hidden rounded-[1.25rem] bg-[#F2F0EC] sm:min-h-[400px]">
      <Canvas
        camera={{ position: [3.9, 2.55, 4.6], fov: 41, near: 0.1, far: 100 }}
        shadows
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ScholScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
