describe ('Class', () => {
    class Customer {
        //constructor seperti function
        constructor() {
            console.info('Create new Customer');
        }
    }

    class Order {
    
    }
    it('should can create class', () => {
    
        const customer:Customer = new Customer();
        const order = new Order();

    });
    it('should can create class', () => {
        // Untuk memanggil object class
        new Customer();
        new Customer();
    })
});