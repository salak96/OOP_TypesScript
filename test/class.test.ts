describe('Class', () => {
    // Membuat kelas Customer
    class Customer {
        // Constructor adalah metode khusus yang dipanggil saat objek kelas dibuat.
        constructor() {
            console.info('Create new Customer'); // Mencetak pesan saat objek Customer dibuat.
        }
    }
    // Membuat kelas Order (tanpa constructor)
    class Order {}
    it('should can create class', () => {
        const customer: Customer = new Customer();
        const order = new Order();
    });

    it('should can create class', () => {
        // Membuat objek Customer baru dengan menggunakan constructor.
        const customer: Customer = new Customer();
        const order = new Order();
    });

    it('should can create class', () => {
        // Membuat dua objek Customer baru tanpa variabel referensi.
        // Ini tidak akan menyimpan referensi ke objek-objek tersebut.
        new Customer();
        new Customer();
    });
});
