describe('Properties', () => {
    class Customer {
        // Property menggunakan titik dua
        readonly id: number; // Tidak bisa diubah (readOnly), wajib diisi!
        name: string; // Type string, wajib diisi!
        age?: number; // Optional, type number

        // Constructor adalah method khusus yang dipanggil saat objek dibuat
        // Isi parameter constructor dari class Customer yang wajib diisi
        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    it('should be able to create an instance of the class', () => {
        const customer: Customer = new Customer(1, 'Sasangka');
        customer.age = 29;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer);
    });
});
