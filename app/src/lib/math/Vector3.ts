import type { Quaternion } from "three";

export class Vector3 {
	x:number;
	y:number;
	z:number;
	constructor(x:number = 0, y:number = 0, z:number = 0) {
		this.x = x ?? 0;
		this.y = y ?? 0;
		this.z = z ?? 0;
	}
	isVector3():this is Vector3 {
		return true;
	}
	add(x:Vector3|number, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			this.x += x.x;
			this.y += x.y;
			this.z += x.z;
		} else {
			this.x += x;
			this.y += y ?? 0;
			this.z += z ?? 0;
		}
		return this;
	}
	sub(x:Vector3|number, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			this.x -= x.x;
			this.y -= x.y;
			this.z -= x.z;
		} else {
			this.x -= x;
			this.y -= y ?? 0;
			this.z -= z ?? 0;
		}
		return this;
	}
	mul(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			this.x *= x.x;
			this.y *= x.y;
			this.z *= x.z;
		} else if(y == undefined) {
			this.x *= x;
			this.y *= x;
			this.z *= x;
		} else {
			this.x *= x;
			this.y *= y ?? 0;
			this.z *= z ?? 0;
		}
		return this;
	}
	div(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			this.x /= x.x;
			this.y /= x.y;
			this.z /= x.z;
		} else if(y == undefined) {
			this.x /= x;
			this.y /= x;
			this.z /= x;
		} else {
			this.x /= x;
			this.y /= y ?? 0;
			this.z /= z ?? 0;
		}
		return this;
	}
	added(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			return new Vector3(
				this.x + x.x,
				this.y + x.y,
				this.z + x.z
			);
		} else if(y == undefined) {
			return new Vector3(
				this.x + x,
				this.y + x,
				this.z + x
			);
		} else {
			return new Vector3(
				this.x + x,
				this.y + (y ?? 0),
				this.z + (z ?? 0)
			);
		}
	}
	subed(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			return new Vector3(
				this.x - x.x,
				this.y - x.y,
				this.z - x.z
			);
		} else if(y == undefined) {
			return new Vector3(
				this.x - x,
				this.y - x,
				this.z - x
			);
		} else {
			return new Vector3(
				this.x - x,
				this.y - (y ?? 0),
				this.z - (z ?? 0)
			);
		}
	}
	muled(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			return new Vector3(
				this.x * x.x,
				this.y * x.y,
				this.z * x.z
			);
		} else if(y == undefined) {
			return new Vector3(
				this.x * x,
				this.y * x,
				this.z * x
			);
		} else {
			return new Vector3(
				this.x * x,
				this.y * (y ?? 0),
				this.z * (z ?? 0)
			);
		}
	}
	dived(x:number|Vector3, y?:number, z?:number):Vector3 {
		if(x instanceof Object) {
			return new Vector3(
				this.x / x.x,
				this.y / x.y,
				this.z / x.z
			);
		} else if(y == undefined) {
			return new Vector3(
				this.x / x,
				this.y / x,
				this.z / x
			);
		} else {
			return new Vector3(
				this.x / x,
				this.y / (y ?? 0),
				this.z / (z ?? 0)
			);
		}
	}
	negate():Vector3 {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		return this;
	}
	negated():Vector3 {
		return new Vector3(
			-this.x,
			-this.y,
			-this.z
		);
	}
	mulScalar(x:number):Vector3 {
		this.x *= x;
		this.y *= x;
		this.z *= x;
		return this;
	}
	muledScalar(x:number):Vector3 {
		return new Vector3(
			this.x * x,
			this.y * x,
			this.z * x
		);
	}
	divScalar(x:number):Vector3 {
		this.x /= x;
		this.y /= x;
		this.z /= x;
		return this;
	}
	divedScalar(x:number):Vector3 {
		return new Vector3(
			this.x / x,
			this.y / x,
			this.z / x
		);
	}
	lerp(target:Vector3, t:number):Vector3 {
		const x = this.x + (target.x - this.x) * t;
		const y = this.y + (target.y - this.y) * t;
		const z = this.z + (target.z - this.z) * t;

		return new Vector3(x, y, z);
	}
	dot(target:Vector3):number {
		return (
			(this.x * target.x) +
			(this.y * target.y) +
			(this.z * target.z)
		);
	}
	cross(target:Vector3):Vector3 {
		this.x = this.y * target.z - this.z * target.y;
		this.y = this.z * target.x - this.x * target.z;
		this.z = this.x * target.y - this.y * target.x;
		return this;
	}
	crossed(target:Vector3):Vector3 {
		return new Vector3(
			this.y * target.z - this.z * target.y,
			this.z * target.x - this.x * target.z,
			this.x * target.y - this.y * target.x
		);
	}
	normalize(length = 1):Vector3 {
		const l = this.length() * length;
		this.x /= l;
		this.y /= l;
		this.z /= l;
		return this;
	}
	normalized(length = 1):Vector3 {
		const l = this.length() * length;
		return new Vector3(
			this.x / l,
			this.y / l,
			this.z / l
		);
	}
	length():number {
		return Math.sqrt(
			this.x * this.x +
            this.y * this.y +
            this.z * this.z
		);
	}
	lengthSq():number {
		return (
			this.x * this.x +
            this.y * this.y +
            this.z * this.z
		);
	}
	applyQuaternion(target:Quaternion):Vector3 {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = target.x, qy = target.y, qz = target.z, qw = target.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;
	}
	
	distanceTo(target:Vector3):number {
		return Math.sqrt(
			((target.x - this.x)*(target.x - this.x)) +
            ((target.y - this.y)*(target.y - this.y)) +
            ((target.z - this.z)*(target.z - this.z))
		);
	}
	distanceToSq(target:Vector3):number {
		return (
			((target.x - this.x)*(target.x - this.x)) +
            ((target.y - this.y)*(target.y - this.y)) +
            ((target.z - this.z)*(target.z - this.z))
		);
	}
	toArray():number[] {
		return [this.x,this.y,this.z];
	}
	clone():Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}
	copy(target:Vector3):Vector3 {
		this.x = target.x;
		this.y = target.y;
		this.z = target.z;
		return this;
	}
	set(x:number, y:number, z:number):Vector3 {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}

	equals(target:Vector3):boolean {
		return (
			this.x === target.x &&
			this.y === target.y &&
			this.z === target.z
		);
	}

	isZero():boolean {
		return (
			this.x === 0 &&
			this.y === 0 &&
			this.z === 0
		);
	}
}