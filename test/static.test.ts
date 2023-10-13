describe('Static', () => {
    // Mendefinisikan kelas Configuration dengan properti-statik
    class Configuration {
        static NAME: string = 'Belajar Typescript  OOP Static';
        static VERSION: number = 1.0;
        static AUTHOR: string = 'Sasangka Lambang';
    }

    // Mendefinisikan kelas MathUtil dengan metode statis
    class MathUtil {
        static sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }

    it('should static Method', () => {
        // Menguji metode statis sum dari MathUtil
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });

    it('should be able to create an instance of the property', () => {
        // Mengakses properti-statik dari kelas Configuration
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
});
