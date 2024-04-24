"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector3 = void 0;
var Vector3 = /** @class */ (function () {
    /**
     * @constructor
     * @param {number} [x]
     * @param {number} [y]
     * @param {number} [z]
     */
    function Vector3(x, y, z) {
        /**@readonly */
        this.isVector = true;
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
        this.z = z !== null && z !== void 0 ? z : 0;
    }
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {this}
     */
    Vector3.prototype.add = function (x, y, z) {
        if (x instanceof Object) {
            this.x += x.x;
            this.y += x.y;
            this.z += x.z;
        }
        else {
            this.x += x;
            this.y += y !== null && y !== void 0 ? y : 0;
            this.z += z !== null && z !== void 0 ? z : 0;
        }
        return this;
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {this}
     */
    Vector3.prototype.sub = function (x, y, z) {
        if (x instanceof Object) {
            this.x -= x.x;
            this.y -= x.y;
            this.z -= x.z;
        }
        else {
            this.x -= x;
            this.y -= y !== null && y !== void 0 ? y : 0;
            this.z -= z !== null && z !== void 0 ? z : 0;
        }
        return this;
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {this}
     */
    Vector3.prototype.mul = function (x, y, z) {
        if (x instanceof Object) {
            this.x *= x.x;
            this.y *= x.y;
            this.z *= x.z;
        }
        else if (y == undefined) {
            this.x *= x;
            this.y *= x;
            this.z *= x;
        }
        else {
            this.x *= x;
            this.y *= y !== null && y !== void 0 ? y : 0;
            this.z *= z !== null && z !== void 0 ? z : 0;
        }
        return this;
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {this}
     */
    Vector3.prototype.div = function (x, y, z) {
        if (x instanceof Object) {
            this.x /= x.x;
            this.y /= x.y;
            this.z /= x.z;
        }
        else if (y == undefined) {
            this.x /= x;
            this.y /= x;
            this.z /= x;
        }
        else {
            this.x /= x;
            this.y /= y !== null && y !== void 0 ? y : 0;
            this.z /= z !== null && z !== void 0 ? z : 0;
        }
        return this;
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    Vector3.prototype.added = function (x, y, z) {
        if (x instanceof Object) {
            return new Vector3(this.x + x.x, this.y + x.y, this.z + x.z);
        }
        else if (y == undefined) {
            return new Vector3(this.x + x, this.y + x, this.z + x);
        }
        else {
            return new Vector3(this.x + x, this.y + (y !== null && y !== void 0 ? y : 0), this.z + (z !== null && z !== void 0 ? z : 0));
        }
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    Vector3.prototype.subed = function (x, y, z) {
        if (x instanceof Object) {
            return new Vector3(this.x - x.x, this.y - x.y, this.z - x.z);
        }
        else if (y == undefined) {
            return new Vector3(this.x - x, this.y - x, this.z - x);
        }
        else {
            return new Vector3(this.x - x, this.y - (y !== null && y !== void 0 ? y : 0), this.z - (z !== null && z !== void 0 ? z : 0));
        }
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    Vector3.prototype.muled = function (x, y, z) {
        if (x instanceof Object) {
            return new Vector3(this.x * x.x, this.y * x.y, this.z * x.z);
        }
        else if (y == undefined) {
            return new Vector3(this.x * x, this.y * x, this.z * x);
        }
        else {
            return new Vector3(this.x * x, this.y * (y !== null && y !== void 0 ? y : 0), this.z * (z !== null && z !== void 0 ? z : 0));
        }
    };
    /**
     * @param {number|Vector3} x
     * @param {number} [y]
     * @param {number} [z]
     * @returns {Vector3}
     */
    Vector3.prototype.dived = function (x, y, z) {
        if (x instanceof Object) {
            return new Vector3(this.x / x.x, this.y / x.y, this.z / x.z);
        }
        else if (y == undefined) {
            return new Vector3(this.x / x, this.y / x, this.z / x);
        }
        else {
            return new Vector3(this.x / x, this.y / (y !== null && y !== void 0 ? y : 0), this.z / (z !== null && z !== void 0 ? z : 0));
        }
    };
    Vector3.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    };
    Vector3.prototype.negated = function () {
        return new Vector3(-this.x, -this.y, -this.z);
    };
    /**
     * Faster
     * @param {number} x
     * @returns {this}
     */
    Vector3.prototype.mulScalar = function (x) {
        this.x *= x;
        this.y *= x;
        this.z *= x;
        return this;
    };
    /**
     * Faster
     * @param {number} x
     * @returns {Vector3}
     */
    Vector3.prototype.muledScalar = function (x) {
        return new Vector3(this.x * x, this.y * x, this.z * x);
    };
    /**
     * Faster
     * @param {number} x
     * @returns {this}
     */
    Vector3.prototype.divScalar = function (x) {
        this.x /= x;
        this.y /= x;
        this.z /= x;
        return this;
    };
    /**
     * @param {Vector3} target
     * @param {number} t
     * @returns
     */
    Vector3.prototype.lerp = function (target, t) {
        var x = this.x + (target.x - this.x) * t;
        var y = this.y + (target.y - this.y) * t;
        var z = this.z + (target.z - this.z) * t;
        return new Vector3(x, y, z);
    };
    /**@param {Vector3} target */
    Vector3.prototype.dot = function (target) {
        return ((this.x * target.x) +
            (this.y * target.y) +
            (this.z * target.z));
    };
    /**
     * @param {Vector3} target
     * @returns {this}
    */
    Vector3.prototype.cross = function (target) {
        this.x = this.y * target.z - this.z * target.y;
        this.y = this.z * target.x - this.x * target.z;
        this.z = this.x * target.y - this.y * target.x;
        return this;
    };
    /**
     * @param {Vector3} target
     * @returns {Vector3}
    */
    Vector3.prototype.crossed = function (target) {
        return new Vector3(this.y * target.z - this.z * target.y, this.z * target.x - this.x * target.z, this.x * target.y - this.y * target.x);
    };
    Vector3.prototype.normalize = function (length) {
        if (length === void 0) { length = 1; }
        var l = this.length() * length;
        this.x /= l;
        this.y /= l;
        this.z /= l;
        return this;
    };
    Vector3.prototype.normalized = function (length) {
        if (length === void 0) { length = 1; }
        var l = this.length() * length;
        return new Vector3(this.x / l, this.y / l, this.z / l);
    };
    Vector3.prototype.length = function () {
        return Math.sqrt(this.x * this.x +
            this.y * this.y +
            this.z * this.z);
    };
    Vector3.prototype.lengthSq = function () {
        return (this.x * this.x +
            this.y * this.y +
            this.z * this.z);
    };
    /**
     * @param {Quaternion} target
     * @returns {this}
     */
    Vector3.prototype.applyQuaternion = function (target) {
        // quaternion q is assumed to have unit length
        var vx = this.x, vy = this.y, vz = this.z;
        var qx = target.x, qy = target.y, qz = target.z, qw = target.w;
        // t = 2 * cross( q.xyz, v );
        var tx = 2 * (qy * vz - qz * vy);
        var ty = 2 * (qz * vx - qx * vz);
        var tz = 2 * (qx * vy - qy * vx);
        // v + q.w * t + cross( q.xyz, t );
        this.x = vx + qw * tx + qy * tz - qz * ty;
        this.y = vy + qw * ty + qz * tx - qx * tz;
        this.z = vz + qw * tz + qx * ty - qy * tx;
        return this;
    };
    /**@param {Vector3} target */
    Vector3.prototype.distanceTo = function (target) {
        return Math.sqrt(((target.x - this.x) * (target.x - this.x)) +
            ((target.y - this.y) * (target.y - this.y)) +
            ((target.z - this.z) * (target.z - this.z)));
    };
    /**@param {Vector3} target */
    Vector3.prototype.distanceToSq = function (target) {
        return (((target.x - this.x) * (target.x - this.x)) +
            ((target.y - this.y) * (target.y - this.y)) +
            ((target.z - this.z) * (target.z - this.z)));
    };
    Vector3.prototype.toArray = function () {
        return [this.x, this.y, this.z];
    };
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    /**
     * @param {*} target
     * @returns {this}
     */
    Vector3.prototype.copy = function (target) {
        this.x = target.x;
        this.y = target.y;
        this.z = target.z;
        return this;
    };
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    Vector3.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    /**
     * @param {Vector3} target
     * @returns {boolean}
     */
    Vector3.prototype.equals = function (target) {
        return (this.x === target.x &&
            this.y === target.y &&
            this.z === target.z);
    };
    /**
     * @returns {boolean}
     */
    Vector3.prototype.isZero = function () {
        return (this.x === 0 &&
            this.y === 0 &&
            this.z === 0);
    };
    return Vector3;
}());
exports.Vector3 = Vector3;
