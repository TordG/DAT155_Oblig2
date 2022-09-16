import { vec3, quat } from '../lib/engine/lib/gl-matrix/src';

export default class MouseLookController {

    static toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    static toRadians(degrees) {
        return degrees / (180 / Math.PI);
    }

    constructor(camera) {
        this.camera = camera;

        this.FD = vec3.fromValues(0, 0, 1);
        this.UD = vec3.fromValues(0, 1, 0);
        this.LD = vec3.fromValues(1, 0, 0);

        this.pitch = 0;
        this.yaw = 0;
    }

    update(pitch, yaw) {

        this.pitch += pitch;
        this.yaw += yaw;
        // TODO: implement update.
        // This function receives the amount of pitch and yaw (in radians) that the camera is supposed to be rotated (in addition to its current rotation).

        // The camera stores rotation as a quaternion. If you'd rather work with euler angles, you can simply set the rotation like so:
        // quat.fromEuler(this.camera.rotation, x_angle, y_angle, z_angle);

        // or if you want to add rotation, like this:
        // quat.multiply(this.camera.rotation, this.camera.rotation, quat.fromEuler(this.camera.rotation, x_angle, y_angle, z_angle));
        quat.fromEuler(this.camera.rotation, MouseLookController.toDegrees(this.pitch), MouseLookController.toDegrees(this.yaw), 0);

    }
    
}