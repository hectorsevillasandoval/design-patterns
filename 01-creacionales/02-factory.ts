import { COLORS } from "../helpers/colors.ts"

interface Hamburger {
  prepare(): void
}

class ChickenBurger implements Hamburger {
  prepare(): void {
    console.log('🐔 Preparing %cChicken Burger', COLORS.darkYellow);
  }
}

class BeefBurger implements Hamburger {
  prepare(): void {
    console.log('🐄 Preparing %cBeef Burger', COLORS.darkRed);
  }
}

class VeggieBurger implements Hamburger {
  prepare(): void {
    console.log('🥕 Preparing %cVeggie Burger', COLORS.green);
  }
}

// Abstract class for the Restaurant, abstract is used to define a template method pattern
// where the createHamburger method is defined but not implemented.
// Subclasses will implement this method to create specific types of hamburgers.
// This allows for flexibility in creating different types of hamburgers without changing the orderBurger method.
// The orderBurger method is a template method that uses the createHamburger method to get the
// specific hamburger type, prepares it, and then logs that the burger is ready to be served
abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderBurger(): void {
    const burger = this.createHamburger();
    burger.prepare();
    console.log('🍽️ Burger is ready to be served!');
  }
}

class ChickenBurgerRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenBurger();
  }
}

class BeefBurgerRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefBurger();
  }
}

class VeggieBurgerRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new VeggieBurger();
  }
}

// Usage
const main = () => {
  let restaurant: Restaurant;

  const burgerTypeInput = prompt('Enter the type of burger you want (chicken, beef, veggie):');
  const burgerType = burgerTypeInput ? burgerTypeInput.toLowerCase() : '';

  switch (burgerType) {
    case 'chicken':
      restaurant = new ChickenBurgerRestaurant();
      break;
    case 'beef':
      restaurant = new BeefBurgerRestaurant();
      break;
    case 'veggie':
      restaurant = new VeggieBurgerRestaurant();
      break;
    default:
      console.log('%cInvalid burger type selected!', COLORS.red);
      return;
  }

  restaurant.orderBurger();
  console.log('%cEnjoy your meal!', COLORS.blue);
  console.log('%cThank you for visiting our restaurant!', COLORS.purple);
  console.log('%cHave a great day!', COLORS.green);
  console.log('%cGoodbye!', COLORS.gray);
}

main();