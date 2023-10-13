"use strict";
describe('Visilibilty', () => {
    // Membuat cetakan class counter
    class Counter {
        constructor() {
            // Visibilitas protected dan private
            this.counter = 0;
        }
        // Visibilitas public
        increment() {
            this.counter++;
        }
        // Visibilitas public
        getCounter() {
            return this.counter;
        }
    }
    // DoubleCounter adalah subkelas dari Counter yang mengganti perilaku increment
    class DoubleCounter extends Counter {
        increment() {
            this.counter += 2;
        }
    }
    it('should support private', () => {
        // Membuat instance dari Counter
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        // Menampilkan nilai counter (visibilitas public)
        console.info(counter.getCounter());
    });
    it('should support protected', () => {
        // Membuat instance dari DoubleCounter, yang merupakan subkelas dari Counter
        const counter = new DoubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        // Menampilkan nilai counter (visibilitas protected)
        console.info(counter.getCounter());
    });
});
