type User = {id: string};
type Product = {id: string};

const user1: User = {id: 'user-asfef23'};
const product1: Product = {id: 'product-bxeff24'};

// types with the same structure can be assigned to each other:
let u2 = product1;
let p2 = user1;

type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};

const point1 : Point2D = {x: 0, y: 0};
const point1_3D : Point3D = {x: 0, y: 0, z: 0};

// extra info is ok:
let point2: Point2D = point1_3D;



