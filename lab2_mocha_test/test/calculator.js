import { expect } from "chai";
import { add, sub, mul, div } from "../calculator.js";

describe("Calculator Tests", () => {
  it("should return 7 when adding 5 and 2", () => {
    const result = add(5, 2);
    console.log(`add(5, 2) => ${result}`);
    expect(result).to.equal(7);
  });

    it("should return 8 when adding 5 and 2 (FAIL)", () => {
      const result = add(5, 2);
      console.log(`add(5, 2) => ${result}`); // Custom log
      expect(result).to.equal(8);
    });
  });

  // Subtraction Tests
  describe("Subtraction Tests", () => {
    it("should return 3 when subtracting 2 from 5 (PASS)", () => {
      const result = sub(5, 2);
      console.log(`sub(5, 2) => ${result}`); // Custom log
      expect(result).to.equal(3);
    });

    it("should return 5 when subtracting 2 from 5 (FAIL)", () => {
      const result = sub(5, 2);
      console.log(`sub(5, 2) => ${result}`); // Custom log
      expect(result).to.equal(5);
    });
  });

  // Multiplication Tests
  describe("Multiplication Tests", () => {
    it("should return 10 when multiplying 5 and 2 (PASS)", () => {
      const result = mul(5, 2);
      console.log(`mul(5, 2) => ${result}`); // Custom log
      expect(result).to.equal(10);
    });

    it("should return 12 when multiplying 5 and 2 (FAIL)", () => {
      const result = mul(5, 2);
      console.log(`mul(5, 2) => ${result}`); // Custom log
      expect(result).to.equal(12);
    });
  });

  // Division Tests
  describe("Division Tests", () => {
    it("should return 5 when dividing 10 by 2 (PASS)", () => {
      const result = div(10, 2);
      console.log(`div(10, 2) => ${result}`); // Custom log
      expect(result).to.equal(5);
    });

    it("should return 2 when dividing 10 by 2 (FAIL)", () => {
      const result = div(10, 2);
      console.log(`div(10, 2) => ${result}`); // Custom log
      expect(result).to.equal(2);
    });
  });
