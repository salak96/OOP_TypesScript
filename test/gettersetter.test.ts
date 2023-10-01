describe('Getter and Setter', () => {
    // Ini adalah deskripsi pengujian (test suite) dengan nama "Getter and Setter".
    class Category {
        _name?: string;
        // Ini adalah variabel privat yang akan digunakan oleh getter dan setter di bawah.

        get name(): string {
            // Ini adalah getter untuk properti "name".
            if (this._name) {
                return this._name;
                // Jika _name tidak null atau undefined, maka nilai _name akan dikembalikan.
            } else {
                return 'empty';
                // Jika _name null atau undefined, maka 'empty' akan dikembalikan.
            }
        }
        set name(value: string) {
            // Ini adalah setter untuk properti "name".
            if (value !== '') {
                // Memeriksa apakah nilai yang akan di-set bukan string kosong.
                this._name = value;
                // Jika nilai tidak kosong, maka nilai akan di-set ke _name.
            }
        }
    }

    it('should be able to create an instance of the property', () => {
        // Ini adalah pengujian tunggal (test case).
        const category = new Category();
        // Membuat instance baru dari kelas Category.
        console.info(category.name);
        // Mencetak nilai properti "name" ke konsol, yang awalnya akan 'empty'.

        category.name = 'Food';
        // Mengubah nilai properti "name" menjadi 'Food'.
        console.info(category.name);
        // Mencetak kembali nilai properti "name" ke konsol, yang sekarang akan menjadi 'Food'.

        category.name = '';
        // Mengubah nilai properti "name" menjadi string kosong, yang akan diabaikan oleh setter.
        console.info(category.name);
        // Mencetak kembali nilai properti "name" ke konsol, yang akan tetap 'Food' karena setter mengabaikan nilai string kosong.
    });
});
