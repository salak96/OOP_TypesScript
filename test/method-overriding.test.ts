describe('Method Overriding', () => {
    // Ini adalah definisi kelas utama, Employee.
    class Employee {
        name: string;

        // Constructor 'Employee' menginisialisasi property 'name' dengan nilai dari parameter 'name'
        constructor(name: string) {
            this.name = name;
        }

        // Ini adalah metode sayHello dalam kelas Employee.
        // Metode ini menerima parameter "name" dan mencetak pesan ke konsol.
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    // Ini adalah definisi kelas Manager yang merupakan subclass dari Employee.
    class Manager extends Employee {
        // Ini adalah metode sayHello dalam kelas Manager.
        // Metode ini juga menerima parameter "name" dan mencetak pesan yang berbeda ke konsol.
        sayHello(name: string): void {
            // console.info(`Hello ${name}, my name ${this.name}, I am your manager`);
            // super class memanggil name dari Employee
            super.sayHello(name)
            console.info(`And, I am your manager`)
        }
    }

    // Ini adalah blok pengujian yang sebenarnya menggunakan it().
    it('should support,', () => {
        // Membuat objek Employee dengan nama "Lambang".
        const employee = new Employee('Lambang');

        // Memanggil metode sayHello pada objek employee dengan argumen "Budi".
        employee.sayHello('Budi');

        // Membuat objek Manager dengan nama "Kurniawan".
        const manager = new Manager('Kurniawan');

        // Memanggil metode sayHello pada objek manager dengan argumen "Sasangka".
        // Catatan: Ini akan memanggil versi "sayHello" yang di-override dalam kelas Manager.
        manager.sayHello('Sasangka');
    });
});
