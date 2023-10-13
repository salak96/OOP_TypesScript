import { MatUtil } from "../src/math-util";
describe('Namespace', () => {
    it('should be able to create an instance of the property', () => {
        console.info(MatUtil.PI);
        console.info(MatUtil.sum(1, 2, 3, 4, 5));
    });
});
