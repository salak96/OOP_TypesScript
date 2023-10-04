describe('Parameter Properties', () => {
    // Ini adalah kelas Person dengan constructor yang memiliki parameter properties "name"
    class Person {
        constructor(public name: string) {}
    }

    // Ini adalah pengujian untuk memastikan parameter properties bekerja dengan baik
    it('should support', () => {
        // Membuat objek person dengan nama 'Lambang'
        const person = new Person('Lambang');
        console.info(person.name); // Menampilkan nama 'Lambang' ke konsol

        // Mengubah nilai parameter properties "name" menjadi 'Sasangka'
        person.name = 'Sasangka';
        console.info(person.name); // Menampilkan nama 'Sasangka' ke konsol
    });
});
