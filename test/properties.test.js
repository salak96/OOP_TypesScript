"use strict";
describe('Properties', () => {
    class Customer {
        // Constructor adalah method khusus yang dipanggil saat objek dibuat
        // Isi parameter constructor dari class Customer yang wajib diisi
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        //method
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should be able to create an instance of the property', () => {
        const customer = new Customer(1, 'Guest');
        customer.age = 29;
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer);
    });
    it('should can have method', () => {
        const customer = new Customer(1, 'Gawon');
        customer.sayHello('Gawon');
    });
});
