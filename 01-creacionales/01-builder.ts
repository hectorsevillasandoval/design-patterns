type PizzaCrust = 'Regular' | 'Thin Crust' | 'Thick Crust';

class Pizza {
  public size: string = 'No Size Set';
  public cheese: boolean = false;
  public pepperoni: boolean = false;
  public mushrooms: boolean = false;
  public crust?: PizzaCrust;

  public displayPizza(): string {
    return `
    Pizza with size: ${this.size},
    cheese: ${this.cheese ? 'Y' : 'N'},
    pepperoni: ${this.pepperoni ? 'Y' : 'N'},
    mushrooms: ${this.mushrooms  ? 'Y' : 'N'},
    crust: ${this.crust}`;
  }

}

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  public setSize(size: string): PizzaBuilder {
    this.pizza.size = size;
    return this;
  }

  public addCheese(): PizzaBuilder {
    this.pizza.cheese = true;
    return this;
  }

  public addPepperoni(): PizzaBuilder {
    this.pizza.pepperoni = true;
    return this;
  }

  public addMushrooms(): PizzaBuilder {
    this.pizza.mushrooms = true;
    return this;
  }

  public setCrust(crust: PizzaCrust): PizzaBuilder {
    this.pizza.crust = crust;
    return this;
  }

  public build(): Pizza {
    return this.pizza;
  }
}

// Usage
const pizza = new PizzaBuilder()
  .setSize('Large')
  .addCheese()
  .addPepperoni()
  .addMushrooms()
  .setCrust('Thin Crust')
  .build();

console.log(pizza.displayPizza());
// Output:
//
//     Pizza with size: Large,
//     cheese: Y,
//     pepperoni: Y,
//     mushrooms: Y,
//     crust: Thin Crust
//
// This code demonstrates the Builder pattern, allowing for flexible and readable construction of a Pizza object.
// The PizzaBuilder class provides methods to set various properties of the Pizza, and the build method
// returns the constructed Pizza object. This pattern is useful for creating complex objects step by step,
// improving code readability and maintainability.
// The Pizza class represents the product being built, encapsulating its properties and a method to display
// its details. The PizzaBuilder class provides a fluent interface for constructing the Pizza object,
// allowing method chaining for a more readable and expressive code style.