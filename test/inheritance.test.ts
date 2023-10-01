describe('Inheritance', () => {
    // Ini adalah deskripsi pengujian (test suite) dengan nama "Inheritance".
    // Parent class orangtua
    class Employee {
        // Properti
        name: string;

        // Constructor dengan parameter 'name' bertipe string
        constructor(name: string) {
            this.name = name;
            // Menginisialisasi properti 'name' dengan nilai yang diberikan pada parameter.
        }
    }

    // Subclass Manager yang mewarisi dari Employee
    class Manager extends Employee {
        constructor(name: string) {
            super(name);
            // Memanggil constructor dari superclass (Employee) dengan menggunakan 'super'.
        }
    }

    // Subclass Director yang juga mewarisi dari Employee
    class Director extends Employee {
        constructor(name: string) {
            super(name);
            // Memanggil constructor dari superclass (Employee) dengan menggunakan 'super'.
        }
    }

    it('should be able to create an instance of the property', () => {
        // Ini adalah pengujian tunggal (test case).
        const employee = new Employee('Eko');
        // Membuat instance baru dari kelas Employee dengan nama 'Eko'.
        console.info(employee.name);
        // Mencetak nama karyawan (employee) ke konsol.

        const manager = new Manager('Budi');
        // Membuat instance baru dari kelas Manager dengan nama 'Budi'.
        console.info(manager.name);
        // Mencetak nama manajer (manager) ke konsol.

        const director = new Director('Tono');
        // Membuat instance baru dari kelas Director dengan nama 'Tono'.
        console.info(director.name);
        // Mencetak nama direktur (director) ke konsol.
    });
});
