// Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker{
  constructor(dimensions) {
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
  }

  volume() {
    return (this.length * this.width * this.height);
  }

  surfaceArea() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
}

class CubeMaker extends CuboidMaker {
  constructor(dimensionsCube) {
    super(dimensionsCube);
  }
  volumeCube() {
    return (Math.pow(this.length, 3));
  }
  surfaceAreaCube() {
    return (6 * (Math.pow(this.length, 2)));
  }
}

const cuboid = new CuboidMaker({
  length: 4, 
  width: 5,
  height: 5
});

const newCube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  
  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/
console.log(newCube.volume());
console.log(newCube.surfaceArea());