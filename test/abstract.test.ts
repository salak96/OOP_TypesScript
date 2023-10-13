describe('Abstract Class', () => {
    // Mendefinisikan sebuah abstrak kelas bernama Customer
    abstract class Customer {
      readonly id: number; // Properti hanya dapat dibaca (readonly)
      abstract name: string; // Properti name bersifat abstrak, harus diimplementasikan oleh turunan
  
      // Konstruktor untuk inisialisasi properti id
      constructor(id: number) {
        this.id = id;
      }
  
      // Metode hello yang mencetak pesan sapaan
      hello() {
        console.info(`Hello ${this.name}`);
      }
  
      // Metode abstrak sayHello yang harus diimplementasikan oleh turunan
      abstract sayHello(name: string): void;
    }
  
    // Mendefinisikan kelas turunan RegularCustomer
    class RegularCustomer extends Customer {
      name: string; // Mengimplementasikan properti name yang dideklarasikan dalam Customer
  
      // Konstruktor untuk inisialisasi properti id dan name
      constructor(id: number, name: string) {
        super(id); // Memanggil konstruktor kelas induk dengan super()
        this.name = name; // Menginisialisasi properti name
      }
  
      // Mengimplementasikan metode sayHello yang dideklarasikan dalam Customer
      sayHello(name: string): void {
        console.info(`Hello ${name}, my name is ${this.name}`);
      }
    }
  
    // Menggunakan testing framework (sepertinya Mocha/Chai) untuk menguji fungsionalitas kelas Customer
    it('should be able to create an instance of the property', () => {
      // Membuat sebuah instance RegularCustomer dengan id 1 dan nama 'Eko'
      const customer = new RegularCustomer(1, 'Eko');
      
      // Memanggil metode hello dan sayHello pada instance customer
      customer.hello();
      customer.sayHello('Eko');
    });
  });
  