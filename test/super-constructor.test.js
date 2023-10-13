"use strict";
describe('Super Constructor', () => {
    // Mendefinisikan class 'Person' dengan constructor yang menerima satu parameter 'name'
    class Person {
        // Constructor 'Person' menginisialisasi property 'name' dengan nilai dari parameter 'name'
        constructor(name) {
            this.name = name;
        }
    }
    // Mendefinisikan class 'Employee' yang extends (mewarisi) dari class 'Person'
    class Employee extends Person {
        // Constructor 'Employee' menerima dua parameter 'name' dan 'departement'
        constructor(name, departement) {
            // Memanggil constructor dari class 'Person' dengan menggunakan 'super'
            // untuk menginisialisasi property 'name' dari class 'Person'
            super(name);
            // Menginisialisasi property 'departement' dengan nilai dari parameter 'departement'
            this.departement = departement;
        }
    }
    // Membuat sebuah test case dengan deskripsi 'should support'
    it('should support', () => {
        // Membuat instance dari class 'Employee' dengan nama "Lambang" dan departemen "PT ABC"
        const employee = new Employee('Lambang', 'PT ABC');
        // Menampilkan nama dari employee
        console.info(employee.name);
        // Menampilkan departemen dari employee
        console.info(employee.departement);
    });
});
