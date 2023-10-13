"use strict";
describe('Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Person('Eko');
        console.info(person.name);
        const customer = new Customer('Budi');
        console.info(customer.name);
    });
});
