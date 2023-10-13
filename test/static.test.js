"use strict";
describe('Static', () => {
    // Mendefinisikan kelas Configuration dengan properti-statik
    class Configuration {
    }
    Configuration.NAME = 'Belajar Typescript  OOP Static';
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = 'Sasangka Lambang';
    // Mendefinisikan kelas MathUtil dengan metode statis
    class MathUtil {
        static sum(...values) {
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
