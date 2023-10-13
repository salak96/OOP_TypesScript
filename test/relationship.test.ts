describe('Relationship', () => {
    // Mendefinisikan kelas "Person" dengan constructor yang menerima sebuah parameter "name"
    class Person {
        constructor(public name: string) {
            // Constructor kelas "Person" hanya menginisialisasi atribut "name"
        }
    }
    // Mendefinisikan kelas "Customer" dengan constructor yang menerima sebuah parameter "name"
    class Customer {
        constructor(public name: string) {
            // Constructor kelas "Customer" juga hanya menginisialisasi atribut "name"
        }
    }

    // Mendefinisikan sebuah pengujian dengan label "should support"
    it('should support', () => {
        // Membuat objek "person" dari kelas "Person" dengan nama "Eko"
        const person = new Person('Eko');
        // Mencetak nama dari objek "person" ke konsol
        console.info(person.name);

        // Membuat objek "customer" dari kelas "Customer" dengan nama "Budi"
        // Kemudian, mengassignnya ke variabel "customer" yang memiliki tipe "Person"
        const customer: Person = new Customer('Budi');
        // Mencetak nama dari objek "customer" ke konsol
        console.info(customer.name);
    });
});
