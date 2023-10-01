/*Ini adalah blok pengujian yang menggunakan describe, 
yang digunakan untuk mengelompokkan beberapa pengujian terkait dalam satu kelompok. 
Dalam hal ini, kelompok ini akan menguji fitur-fitur terkait interface.
*/
describe('interface', () => {
    /*
    interface HasName{ name : string; }
    Ini adalah deklarasi interface TypeScript yang disebut HasName. 
    Interface ini memiliki satu properti yaitu name dengan tipe data string.
    */
    interface HasName {
        name: string;
    }
    /*
    interface CanSayHello{ sayHello(name:string):void; }
    Ini adalah deklarasi interface TypeScript lainnya, CanSayHello. 
    Interface ini memiliki satu metode yaitu 
    sayHello yang menerima satu parameter berupa string dan mengembalikan void (tidak mengembalikan nilai).
    */
    interface CanSayHello {
        sayHello(name: string): void;
    }
    /*
    class Person implements HasName,CanSayHello{
    Ini adalah deklarasi sebuah kelas TypeScript yang disebut Person. 
    Kelas ini mengimplementasikan (implements) dua interface, 
    yaitu HasName dan CanSayHello. 
    Ini berarti kelas Person harus memiliki properti name dan 
    metode sayHello sesuai dengan definisi dari kedua interface tersebut.
    */
    class Person implements HasName, CanSayHello {
        name: string; ///Ini adalah properti dalam kelas Person yang sesuai dengan interface HasName. Properti ini akan menyimpan nama dari objek Person.

        constructor(name: string) {
            //Ini adalah konstruktor dalam kelas Person. Ketika objek Person dibuat, konstruktor ini akan menerima parameter name dan menginisialisasi properti name dengan nilai yang diberikan.
            this.name = name;
        }
        // Ini adalah implementasi metode sayHello yang sesuai dengan interface CanSayHello.
        //Metode ini akan mencetak pesan salam dengan menggunakan nama yang diberikan sebagai parameter dan nama yang ada di dalam properti name dari objek Person.
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    /* Ini adalah pengujian (test case) individual yang menggunakan it. 
    Pengujian ini bertujuan untuk memeriksa apakah pewarisan berfungsi dengan baik.
    */
    it('should support inheritance', () => {
        const person = new Person('Sasangka'); //Ini adalah pembuatan objek Person dengan nama "Sasangka".
        person.sayHello('Lambang');
        //Panggilan metode sayHello pada objek person dengan parameter "Lambang".
        //  Hasil panggilan ini akan dicetak dengan pesan salam yang menggabungkan nama "Lambang" dan nama yang ada di dalam objek person.
    });
});
