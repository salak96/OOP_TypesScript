describe('Polymorphism', () => {
    // Mendefinisikan kelas Employee
    class Employee {
        constructor(public name: string) {}
    }

    // Mendefinisikan kelas Manager yang merupakan turunan dari Employee
    class Manager extends Employee {
        constructor(name: string) {
            super(name);
        }
    }

    // Mendefinisikan kelas VicePresident yang merupakan turunan dari Manager
    class VicePresident extends Manager {}

    // Mendefinisikan fungsi sayHello yang menerima objek Employee dan mencetak pesan salam
    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('should support', () => {
        // Tes penggunaan objek Employee
        let employee: Employee = new Employee('Lambang');
        console.info(employee); // Cetak objek Employee dengan nama 'Lambang'

        // Tes penggunaan objek Employee yang diubah menjadi Manager
        employee = new Manager('Kurniawan');
        console.info(employee); // Cetak objek Manager dengan nama 'Kurniawan'

        // Tes penggunaan objek VicePresident yang sebenarnya adalah turunan dari Manager
        employee = new VicePresident('Sasangka');
        console.info(employee); // Cetak objek VicePresident dengan nama 'Sasangka'
    });

    it('should support Polymorphism', () => {
        // Memanggil fungsi sayHello dengan berbagai jenis objek yang berbeda
        sayHello(new Employee('Lambang')); // Mengirim objek Employee
        sayHello(new Manager('Kurniawan')); // Mengirim objek Manager
        sayHello(new VicePresident('Sasangka')); // Mengirim objek VicePresident
    });
});
