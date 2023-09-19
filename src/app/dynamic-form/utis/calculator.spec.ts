import { calculateMaxRefund, calculateTotalPrice } from "./calculator";

describe("Total Price Tests", ()=>{
    test.each([
        {price: 1, tax: 1, expected: 2},
        {price: 1.19, tax: 18.81, expected: 20.00},
        {price: 1.19, tax: 18.81, expected: 20.00},
      ])(`.calculateTotalPrice($price, $tax)`, ({price, tax, expected}) => {
        expect(calculateTotalPrice(price,tax)).toBe(expected);
      });
})

