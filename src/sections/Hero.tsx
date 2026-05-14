import { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import { TypeAnimation } from 'react-type-animation'
import * as THREE from 'three'

const laptopModel = '/models/modern_slim_laptop.glb'
const arduinoModel = '/models/arduino_uno_q.glb'
const duckModel = '/models/free_rubber_duck_3d_model.glb'
const sketchPadModel = '/models/sketchbook.glb'

function OrbitTrail({ radius, tilt }: { radius: number; tilt: THREE.Euler }) {
  const points: THREE.Vector3[] = []
  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2
    points.push(new THREE.Vector3(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    ))
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <group rotation={tilt}>
      <line geometry={geometry}>
        <lineBasicMaterial color="#5c7a5e" opacity={0.15} transparent />
      </line>
    </group>
  )
}

function Laptop({ mouse }: { mouse: { x: number; y: number } }) {
  const { scene } = useGLTF(laptopModel)
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.2 + mouse.x * 0.3
    ref.current.rotation.x = 0.3 + mouse.y * 0.1
    ref.current.position.y = Math.sin(t * 0.6) * 0.04 + mouse.y * 0.05
    ref.current.position.x = mouse.x * 0.1
  })

  return (
    <group ref={ref} scale={5.3} rotation={[0.3, 0.4, -0.15]}>
      <primitive object={scene} />
    </group>
  )
}

function Electron({
  mouse,
  radius,
  speed,
  tilt,
  phaseOffset,
  children,
}: {
  mouse: { x: number; y: number }
  radius: number
  speed: number
  tilt: THREE.Euler
  phaseOffset: number
  children: React.ReactNode
}) {
  const orbitRef = useRef<THREE.Group>(null)
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!orbitRef.current || !modelRef.current) return
    const t = state.clock.elapsedTime
    const angle = t * speed + phaseOffset
    const x = Math.cos(angle) * radius + mouse.x * 0.15
    const z = Math.sin(angle) * radius
    const y = mouse.y * 0.1
    orbitRef.current.position.set(x, y, z)
    modelRef.current.rotation.y = -t * 0.6
  })

  return (
    <group rotation={tilt}>
      <group ref={orbitRef}>
        <group ref={modelRef}>
          {children}
        </group>
      </group>
    </group>
  )
}

function Arduino({ mouse }: { mouse: { x: number; y: number } }) {
  const { scene } = useGLTF(arduinoModel)
  return (
    <Electron mouse={mouse} radius={1.7} speed={0.35} tilt={new THREE.Euler(0.4, 0, 0.3)} phaseOffset={0}>
      <primitive object={scene} scale={6} rotation={[-0.4, 0.3, 0.5]} />
    </Electron>
  )
}

function RubberDuck({ mouse }: { mouse: { x: number; y: number } }) {
  const { scene } = useGLTF(duckModel)
  return (
    <Electron mouse={mouse} radius={1.9} speed={0.35} tilt={new THREE.Euler(-0.5, 0.3, 0.8)} phaseOffset={Math.PI}>
      <primitive object={scene} scale={1} rotation={[0, 0.5, 0.2]} />
    </Electron>
  )
}

function SketchPad({ mouse }: { mouse: { x: number; y: number } }) {
  const { scene } = useGLTF(sketchPadModel)
  return (
    <Electron mouse={mouse} radius={2.1} speed={0.35} tilt={new THREE.Euler(0.2, 0.5, -0.6)} phaseOffset={Math.PI * 0.5}>
      <primitive object={scene} scale={0.12} rotation={[0.3, 0.2, -0.3]} />
    </Electron>
  )
}

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const targetMouse = useRef({ x: 0, y: 0 })
  const currentMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const animate = () => {
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.05
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.05
      setMouse({ ...currentMouse.current })
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const id = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 80px',
      paddingTop: '64px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{ flex: 1, zIndex: 2 }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(48px, 7vw, 96px)',
          fontWeight: 900,
          color: '#fff',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}>
          Paul
        </h1>

        <h1 style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(48px, 7vw, 96px)',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'var(--accent)',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>
          Permyashkin
        </h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '20px',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(18px, 2.5vw, 28px)',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.02em',
        }}>
          <span style={{ color: '#fff', opacity: 0.85,}}>I am a</span>
          <TypeAnimation
            sequence={[
              'learner', 1400,
              'developer', 1400,
              'builder', 1400,
            ]}
            repeat={Infinity}
            style={{
              color: '#fff',
              opacity: 0.85,
              minWidth: '180px',
              display: 'inline-block',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '13px',
            color: 'var(--bg)',
            background: 'var(--accent)',
            padding: '10px 24px',
            borderRadius: '24px',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}>
            View my work
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: 'var(--sand)',
            border: '0.5px solid var(--sand)',
            padding: '10px 24px',
            borderRadius: '24px',
            textDecoration: 'none',
          }}>
            Get in touch
          </a>
        </div>
      </div>

      <div style={{ flex: 1, height: '600px', zIndex: 1 }}>
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 45 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true }}
        >
          <directionalLight position={[5, 5, 5]} intensity={2} color="#d4b896" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#8aaa8c" />
          <pointLight position={[2, 2, 3]} intensity={3} color="#d4b896" />
          <pointLight position={[-2, -2, 2]} intensity={1} color="#c4a882" />
          <Suspense fallback={null}>
            <Laptop mouse={mouse} />
            <Arduino mouse={mouse} />
            <RubberDuck mouse={mouse} />
            <SketchPad mouse={mouse} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

useGLTF.preload(laptopModel)
useGLTF.preload(arduinoModel)
useGLTF.preload(duckModel)
useGLTF.preload(sketchPadModel)

export default Hero