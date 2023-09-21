describe('Properties', () => {
    class Customer {
        // Property menggunakan titik dua
        readonly id: number; // Tidak bisa diubah (readOnly), wajib diisi!
        name: string; // Type string, wajib diisi! default value Guest
        age?: number; // Optional, type number

        // Constructor adalah method khusus yang dipanggil saat objek dibuat
        // Isi parameter constructor dari class Customer yang wajib diisi
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
        //method
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('should be able to create an instance of the property', () => {
        const customer: Customer = new Customer(1, 'Guest');
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
