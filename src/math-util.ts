// Mendefinisikan namespace MatUtil
export namespace MatUtil {
    // Mendefinisikan konstanta PI dengan tipe data number
    export const PI: number = 3.14;

    // Mendefinisikan fungsi sum yang menerima sejumlah nilai (gunakan operator spread)
    // dan mengembalikan jumlah total nilai tersebut
    export function sum(...values: number[]): number {
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;
    }
}

// Mendefinisikan namespace Eko
export namespace Eko {
    // Mendefinisikan fungsi sayHello yang menerima sebuah parameter name (string)
    // dan mencetak pesan sambutan ke konsol
    export function sayHello(name: string): void {
        console.info(`Hello ${name}`);
    }
}

// Mendefinisikan namespace Budi
export namespace Budi {
    // Mendefinisikan fungsi sayHello yang mirip dengan yang ada di namespace Eko
    // yaitu menerima sebuah parameter name (string) dan mencetak pesan sambutan ke konsol
    export function sayHello(name: string): void {
        console.info(`Hello ${name}`);
    }
}
