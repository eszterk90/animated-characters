/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ action }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/archer.glb')
  const { actions } = useAnimations(animations, group)
  const previousAction = usePrevious(action);

  useEffect(() => {
    if(previousAction) {
      actions[previousAction].fadeOut(0.2);
      actions[previousAction].stop();
    }
    actions[action].play();
    actions[action].fadeIn(0.2);

  }, [action, actions, previousAction])

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.Hips} />
          <skinnedMesh name="Erika_Archer_Body_Mesh" geometry={nodes.Erika_Archer_Body_Mesh.geometry} material={materials.Body_MAT} skeleton={nodes.Erika_Archer_Body_Mesh.skeleton} />
          <skinnedMesh name="Erika_Archer_Clothes_Mesh" geometry={nodes.Erika_Archer_Clothes_Mesh.geometry} material={materials.Akai_MAT} skeleton={nodes.Erika_Archer_Clothes_Mesh.skeleton} />
          <skinnedMesh name="Erika_Archer_Eyelashes_Mesh" geometry={nodes.Erika_Archer_Eyelashes_Mesh.geometry} material={materials.Lashes_MAT} skeleton={nodes.Erika_Archer_Eyelashes_Mesh.skeleton} />
          <skinnedMesh name="Erika_Archer_Eyes_Mesh" geometry={nodes.Erika_Archer_Eyes_Mesh.geometry} material={materials.EyeSpec_MAT} skeleton={nodes.Erika_Archer_Eyes_Mesh.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/archer.glb')

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

