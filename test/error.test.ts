describe('Error Handling', () => {
    class ValidationEroor extends Error {
        constructor(message: string) {
            super(message);
        }
    }
    function doubleIt(value: number): number {
        if (value < 0) {
            throw new ValidationEroor('value cannot be less than 0');
        }
        return value * 2;
    }

    it('should be able to create an instance of the property', () => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        } catch (error) {
            if (error instanceof ValidationEroor) {
                console.info(error.message);
            }
        }
    });
});
