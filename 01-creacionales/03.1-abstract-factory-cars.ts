// 1. Crear Interfaces
interface Car {
  drive(): void;
}

interface Engine {
  start(): void;
}

// 2. Crear tipos concretos
class Sedan implements Car {
  drive(): void {
    console.log('🚗 Driving a Sedan');
  }
}
class SUV implements Car {
  drive(): void {
    console.log('🚙 Driving an SUV');
  }
}

class Truck implements Car {
  drive(): void {
    console.log('🚚 Driving a Truck');
  }
}
class V6Engine implements Engine {
  start(): void {
    console.log('🔧 Starting a V6 Engine');
  }
}
class V8Engine implements Engine {
  start(): void {
    console.log('🔧 Starting a V8 Engine');
  }
}
class ElectricEngine implements Engine {
  start(): void {
    console.log('🔌 Starting an Electric Engine');
  }
}
// 3. Crear la interfaz de la Fábrica Abstracta
interface CarFactory {
  createCar(): Car;
  createEngine(): Engine;
}

// 4. Implementar fábricas concretas
class SedanFactory implements CarFactory {
  createCar(): Car {
    return new Sedan();
  }
  createEngine(): Engine {
    return new V6Engine();
  }
}
class SUVFactory implements CarFactory {
  createCar(): Car {
    return new SUV();
  }
  createEngine(): Engine {
    return new V8Engine();
  }
}
class TruckFactory implements CarFactory {
  createCar(): Car {
    return new Truck();
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }
}

const CarTypeDictionary: Record<string, CarFactory> = {
  sedan: new SedanFactory(),
  suv: new SUVFactory(),
  truck: new TruckFactory(),
};

// 5. Uso de la Fábrica Abstracta

const mainFn = () => {
  const carType = prompt('Enter car type (sedan/suv/truck): ')?.toLowerCase() || '';
  const factory = CarTypeDictionary[carType];

  if (!factory) {
    console.log('%cInvalid car type selected!', 'color: red');
    return;
  }

  const car = factory.createCar();
  const engine = factory.createEngine();

  engine.start();
  car.drive();
}


mainFn();