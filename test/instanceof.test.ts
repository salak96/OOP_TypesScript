describe('Instanceof', () => {
    // Ini adalah kelas Employee dan Manager
    class Employee {}
    class Manager {}
    // Ini adalah objek Employee dan Manager
    const budi = new Employee();
    const kurniawan = new Manager();

    it('should  have problem using typeof', () => {
        // Menggunakan typeof untuk menentukan tipe objek budi dan kurniawan
        console.info(typeof budi); // Ini akan mencetak "object" karena budi adalah objek Employee
        console.info(typeof kurniawan); // Ini akan mencetak "object" karena kurniawan adalah objek Manager
    });

    it('should  have problem using instanceof', () => {
        // Menggunakan instanceof untuk memeriksa apakah objek budi adalah instance dari Employee
        expect(budi instanceof Employee).toBe(true); // Ini akan menghasilkan true karena budi adalah instance dari Employee
        expect(kurniawan instanceof Manager).toBe(true); // Ini akan menghasilkan true karena kurniawan adalah instance dari Manager

        // Menggunakan instanceof untuk memeriksa apakah objek budi adalah instance dari Manager
        expect(budi instanceof Manager).toBe(false); // Ini akan menghasilkan false karena budi bukan instance dari Manager
        expect(kurniawan instanceof Employee).toBe(false); // Ini akan menghasilkan false karena kurniawan bukan instance dari Employee
    });
});
