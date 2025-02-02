export default class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export function introduce(person) {
  console.log(
    `Hello, my name is ${person.getFullName()} and I am ${
      person.age
    } years old.`
  );
}

export function isAdult(person) {
  console.log(
    `${person.getFullName()} is ${
      person.age >= 18 ? "an adult" : "not an adult"
    }.`
  );
}
