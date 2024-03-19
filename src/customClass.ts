interface PointInterface {
    add(): number;
}
class Point implements PointInterface {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(): number {
        return this.x + this.y;
    }
}

export default Point;