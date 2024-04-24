import * as THREE from 'three';
import * as CANNON from 'cannon';

export class Manager {
    scene: THREE.Scene;
    world: CANNON.World;
    constructor(scene:THREE.Scene, world:CANNON.World) {
        this.scene = scene;
        this.world = world;
    }
    update(deltaTime = 1/60) {
        this.world.step(deltaTime);
    }
    syncMesh(mesh:THREE.Object3D, body:CANNON.Body) {
        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);
    }
}