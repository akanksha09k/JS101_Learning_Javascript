//### **Products Cart Object**

// Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`
var cart ={
  data : [],
  add : function(name,quantity,price){
    var obj ={};
    obj.name = name;
    obj.quantity = quantity;
    obj.price = price;
    this.data.push(obj);
  },
  total : function(){
    var sum = 0;
    for(var i =0;i<this.data.length;i++){
      var current = this.data[i];
      sum = sum + current.quantity*current.price;
    }
    return sum;
  }
}
cart.add("Rice",2,60);
cart.add("Dal",3,50);
cart.add("Salt",1,20);
console.log(cart.total());
