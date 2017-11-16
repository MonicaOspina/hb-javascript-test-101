import {
    generateRandomColor,
    functionalFilterNegativeNumbers,
    filterNegativeNumbers,
    functionalMapNumbersIntoStrings,
    mapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge,
        
} from './script.js';
describe('generateRandomColor',()=>{
    const KEYS = ["r","g","b"];
    const randomcolor = generateRandomColor();
    it("generate 3 colors random r, g, b",() =>{
        expect(generateRandomColor()).toMatchObject({
            r:expect.any(Number), 
            g:expect.any(Number),
            b:expect.any(Number)}); 
    });
    it("generate 3 colors random r, g, b with a value from 0 to 255",() =>{
        for(let key of KEYS){
            expect(randomcolor[key]).toBeGreaterThanOrEqual(0);
            expect(randomcolor[key]).toBeLessThanOrEqual(255);
        }
    });
    it("test if is integer number",()=>{
        for(let key of KEYS){
            expect(parseInt(randomcolor[key]) === randomcolor[key]).toBe(true);
        }
    });
});

describe('functionalFilterNegativeNumbers',()=>{
    it('Filter negative numbers',() => {
        expect(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7])).toEqual([0 , 34, 54]);
        expect(functionalFilterNegativeNumbers([-4, -6, -5, -34, -54, -7])).toEqual([]);
    });
});

describe('filterNegativeNumbers',()=>{
    it('Filter negative numbers in a cycle',() =>{
        expect(filterNegativeNumbers([4, 6, 5, 34, 54, 7, 0, -2])).toEqual([4, 6, 5, 34, 54, 7, 0]);
    });
});

describe('functionalMapNumbersIntoStrings',()=>{
    it("Filter negative numbers in a cycle",() =>{
        expect(functionalMapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7])).toEqual(["-4", "-6", "-5", "0", "34", "54", "-7"]);
    });
});

describe('mapNumbersIntoStrings',()=>{
    it("Filter negative numbers in a cycle",() =>{
        expect(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7])).toEqual(["-4", "-6", "-5", "0", "34", "54", "-7"]);
    });
});

describe('printType',()=>{
    global.console.log = jest.fn();
    it("should print 'number' of number",() =>{
        printType(5);
        expect(global.console.log).toHaveBeenCalledWith('number');
    });
    it("should print 'string' of letter",() =>{
        printType('a');
        expect(global.console.log).toHaveBeenCalledWith('string');
    });
    it("should print 'boolean' of boolean",() =>{
        printType(true);
        expect(global.console.log).toHaveBeenCalledWith('boolean');
    });
    it("should print 'object' of array",() =>{
        printType([1, 2, 5, 'a']);
        expect(global.console.log).toHaveBeenCalledWith('object');
    });
});

describe('isPalindrome',()=>{
    it("Say if 'madam' is palindrome",() =>{
        expect(isPalindrome('madam')).toEqual(true);
    });
    it("Say if 'anitalavalatina' is palindrome",() =>{
        expect(isPalindrome('anitalavalatina')).toEqual(true);
    });
    it("Say if 'anita lava la tina' is palindrome",() =>{
        expect(isPalindrome('anita lava la tina')).toEqual(true);
    });
    it("Say if 'armario' is palindrome",() =>{
        expect(isPalindrome('armario')).toEqual(false);
    });
});

describe('Person',()=>{
    const student = new Person('Jhon',25);
    global.console.log = jest.fn();
    it("Say the name of person",() =>{
        student.printName();
        expect(global.console.log).toHaveBeenCalledWith('Jhon');
    });
});

describe('printOutPersonAge',()=>{
    const student = new Person('Jhon',25);
    global.console.log = jest.fn();
    it("Say the age of person",() =>{
        printOutPersonAge(student)
        expect(global.console.log).toHaveBeenCalledWith(25);
    });
});