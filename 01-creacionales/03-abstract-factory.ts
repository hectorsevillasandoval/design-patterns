interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenBurger implements Hamburger {
  prepare(): void {
    console.log('🐔 Preparing %cChicken Burger', 'color: darkorange');
  }
}

class BeefBurger implements Hamburger {
  prepare(): void {
    console.log('🐄 Preparing %cBeef Burger', 'color: darkred');
  }
}

class SodaDrink implements Drink {
  pour(): void {
    console.log('🥤 Pouring %cSoda', 'color: blue');
  }
}

class JuiceDrink implements Drink {
  pour(): void {
    console.log('🍊 Pouring %cJuice', 'color: orange');
  }
}

class WaterDrink implements Drink {
  pour(): void {
    console.log('💧 Pouring %cWater', 'color: lightblue');
  }
}

// Abstract class for the Restaurant, defining a template method pattern
// where the createHamburger and createDrink methods are defined but not implemented.
// Subclasses will implement these methods to create specific types of hamburgers and drinks.
// This allows for flexibility in creating different combinations of hamburgers and drinks without changing the orderMeal

abstract class Restaurant {
  abstract createHamburger(): Hamburger;
  abstract createDrink(): Drink;

  orderMeal(): void {
    const burger = this.createHamburger();
    const drink = this.createDrink();
    burger.prepare();
    drink.pour();
    console.log('🍽️ Meal is ready to be served!');
  }
}

class FastFoodRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenBurger();
  }

  override createDrink(): Drink {
    return new SodaDrink();
  }
}

class GourmetRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefBurger();
  }

  override createDrink(): Drink {
    return new JuiceDrink();
  }
}

// Usage
const main = ( factory: Restaurant ) => {
  console.log('%cWelcome to the Restaurant!', 'color: green; font-weight: bold');
  console.log('%cPlease place your order:', 'color: blue');
  factory.orderMeal();
  console.log('%cThank you for dining with us!', 'color: purple');
  console.log('%cHave a great day!', 'color: green');
  console.log('%cGoodbye!', 'color: gray');
}

main( new GourmetRestaurant() );