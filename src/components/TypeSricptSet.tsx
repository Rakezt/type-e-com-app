import { title } from "process";
import React from "react";

const TypeSricptSet = () => {
  const ConvertTemperaturetoCelcius = (celcius: number): string => {
    const fahrenhiet = (celcius * 9) / 5 + 32;
    return `${celcius} °C is ${fahrenhiet.toFixed(2)}°F`;
  };
  // console.log(ConvertTemperaturetoCelcius(32));

  const factorial = (num: number): number => {
    if (num < 0) {
      throw new Error("Their is no factorial for negative value");
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  // console.log(factorial(9));

  const power = (base: number, exponent: number): number => {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
      result *= base;
    }
    return result;
  };
  // console.log(power(2, 3));

  const printArrayOrstring = (data: string | string[]) => {
    return data;
  };
  // console.log(printArrayOrstring("I"));

  type Bike = {
    model: string;
    year: number;
    type: "Bike";
  };
  type Car = {
    model: string;
    year: number;
    type: "Car";
  };

  type vehicle = Car | Bike;
  const printVehicleInfo = (vehicle: vehicle): {} => {
    console.log(`Model:${vehicle.model}`);
    console.log(`Year:${vehicle.year}`);
    console.log(`Type:${vehicle.type}`);
    return vehicle;
  };
  const car: Car = {
    model: "Toyota",
    year: 2010,
    type: "Car",
  };
  const bike: Bike = {
    model: "Continental",
    year: 2021,
    type: "Bike",
  };
  // console.log(printVehicleInfo(car));
  // console.log(printVehicleInfo(bike));

  type Book = {
    type: "book";
    title: string;
    price: number;
  };
  type Electronic = {
    type: "electronic";
    name: string;
    price: number;
  };
  type Clothing = {
    type: "clothing";
    item: string;
    price: number;
  };
  type Product = Book | Electronic | Clothing;

  const caculcateTotalPrice = (products: Product[]): number => {
    return products.reduce((acc, curr) => curr.price + acc, 0);
  };

  const products: Product[] = [
    { type: "book", title: "The Great Gatsby", price: 10 },
    { type: "electronic", name: "Smartphone", price: 500 },
    { type: "clothing", item: "T-shirt", price: 20 },
  ];
  // console.log(caculcateTotalPrice(products));

  type deposit = {
    type: "deposit";
    amount: number;
  };
  type withdrawal = {
    type: "withdrawal";
    amount: number;
  };
  type Transaction = deposit | withdrawal;

  const calculateBalance = (transaction: Transaction[]) => {
    return transaction.reduce((acc, curr) => curr.amount + acc, 0);
  };

  const transactions: Transaction[] = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 },
  ];
  // console.log(calculateBalance(transactions));

  type Books = {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
  };

  const book: Books = {
    title: "The Man who can't be moved",
    author: "The Script",
    pages: 3500,
    isAvailable: true,
  };

  // console.log(book);

  type Animal = {
    species: string;
    legs: number;
  };
  type owner = Animal & {
    owner: string;
  };

  const animals: Animal = {
    species: "Dog",
    legs: 4,
  };
  const ownerAnimal: owner = {
    species: "Dog",
    legs: 4,
    owner: "rakesh",
  };
  // console.log(animals);
  // console.log(ownerAnimal);

  type Character = {
    name: string;
    health: number;
  };
  type Player = Character & {
    level: number;
    damage: number;
  };
  type Enemy = Character & {
    level: number;
    damage: number;
  };

  const player: Player = {
    name: "Rakesh",
    health: 9,
    level: 9,
    damage: 9,
  };
  const enemy: Enemy = {
    name: "Rakesh",
    health: 9,
    level: 9,
    damage: 9,
  };
  // console.log(player);
  // console.log(enemy);

  type DynamicArray<T> = T[];

  function toArrayString<T>(arr: DynamicArray<T>): string {
    return JSON.stringify(arr);
  }

  const dynamic: DynamicArray<any> = [1, 2, 3, "Helo", "To"];
  const arrayString = toArrayString(dynamic);
  // console.log(arrayString);

  type MixedData<T> = T[];
  const mixedData: MixedData<any> = [
    42,
    "hello",
    true,
    { name: "Alice", age: 30 },
    [1, 2, 3],
    () => "function called",
  ];
  // console.log(mixedData);

  return <div>ConvertTemperature</div>;
};

export default TypeSricptSet;
