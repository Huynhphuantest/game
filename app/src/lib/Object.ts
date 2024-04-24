import type { Body } from "cannon";
import type { Object3D } from "three";

export class GameObject {
    mesh: Object3D;
    body: Body;
    constructor(mesh:Object3D, body:Body) {
        this.mesh = mesh;
        this.body = body;
    }
}