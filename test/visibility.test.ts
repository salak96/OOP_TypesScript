describe('Visilibilty', () => {
    // Membuat cetakan class counter
    class Counter {
        // Visibilitas protected dan private
        protected counter: number = 0;
        // Visibilitas public
        public increment() {
            this.counter++;
        }
        // Visibilitas public
        public getCounter() {
            return this.counter;
        }
    }

    // DoubleCounter adalah subkelas dari Counter yang mengganti perilaku increment
    class DoubleCounter extends Counter{
        public increment(): void {
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
