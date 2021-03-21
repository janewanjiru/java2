var fruit={
    name:"orange",
    price:30,
   quantity:2,
   fruitCost:function(price,quantity){
   totalCost=price*quantity;
    fruitCost=totalCost }
   
      }
     fruit.fruitCost(30,2);
   console.log(fruit.quantity + " " + fruit.name + " for KES " + totalCost)
   
   //Examples of objects,method,functions
   //objects
   
    var person={
      name:"Joy",
       age:21,
    }
   console.log(person.name + " is " +  person.age + " years old")
   
    //method
    var material ={     
     price:5000,
     numbers :4,
    laptopCost:function(price,numbers){
            totalCost = price * numbers
            return this.laptopCost = totalCost
     }
     }
     material.laptopCost(5000,4);
     console.log(material.numbers + " " + material.name  +  " for KSH " + totalCost) ;
   
    //function
    function add(a,b){
        console.log(a+b);
   
    }
    add(5,8);
    add(2,10);
     
   