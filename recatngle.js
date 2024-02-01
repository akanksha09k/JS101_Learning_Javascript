//Problem-1 Rectangle Object

//Create a rectangle object with length and width properties
//Create two methods area and perimeter, that will return the area and perimeter of the rectangle.

var rectangle = {
  length : 10,
  width : 20,
  area : function(){
    var area = this.length * this.width;
    return area;
  },
  perimeter : function(){
    var perimeter = 2*(this.length + this.width);
    return perimeter;
  },
}
console.log(rectangle.area());
console.log(rectangle.perimeter());
