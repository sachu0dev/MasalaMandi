import { sum } from "../sum";


test("Sum function should calculate the sum of two number", ()=>{
    const result = sum(5,6);

    expect(result).toBe(11);
})