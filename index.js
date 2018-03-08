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
    let allMeals = this.deliveries().map(delivery => {
      return delivery.meal();
    })
    return [].concat(...allMeals);
  }
  deliveries(){
    return store.deliveries.filter(delivery => {
      return delivery.customerId ==
    })
  }
}