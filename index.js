let store = {customers: [], meals: [], deliveries: []}; 
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Customer{
  constructor(name){
    this.id = ++customerId 
    this.name = name 
    store.customers.push(this)
  }
  meals(){
    return this.deliveries().map(delivery => {
      return delivery.meal();
    })
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id; 
    })
  }
  totalSpent(){
    return this.meals().reduce(function(sum, meal) {
      return sum + meal.price;
    }, 0); 
  }
}

class Meal{
  constructor(title, price){
    this.id = ++mealId
    this.title = title 
    this.price = price 
    store.meals.push(this)
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.mealId === this.id;
    })
  }
  customers(){
    return store.deliveries.map(delivery => {
      return delivery.customer();
    })
  }
  
  static byPrice() {
    return store.meals.sort(function(a, b){
      return b.price - a.price; 
    })
  }
}

class Delivery{
  constructor(meal, customer){
    this.id = ++deliveryId 
    if (meal && customer) {
      this.mealId = meal.id 
      this.customerId = customer.id 
    }
    store.deliveries.push(this)
  }
  
}