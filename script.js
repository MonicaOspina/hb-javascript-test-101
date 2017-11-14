function generateRandomNumber(){
        return {r:Math.floor(Math.random() * 256), 
        g:Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)};
        
}

function functionalFilterNegativeNumbers(numbers){
        function isNoNegative(value) {
                return value >= 0;
        }
        console.log(numbers);
        var filtered = numbers.filter(isNoNegative);        
        return filtered;

}

function filterNegativeNumbers(numbers){
        const array = [];
        for(var i = 0; i< numbers.length;i++){
                if(numbers[i] >=0){
                        array.push(numbers[i]);
                }
        }
        return array;
}

function functionalMapNumbersIntoStrings(mapnumbers){
        return mapnumbers.map(String);
}

function mapNumbersIntoStrings(mapnumbers){
        const strings = [];
        for(var i = 0; i<mapnumbers.length;i++){
                strings.push(mapnumbers[i].toString());
        }
        return strings;
}

function printType(variable){
        console.log(typeof variable);        
}

function isPalindrome(word){
        var reverseword = word.split('').reverse().join('');
        return  word === reverseword;
}

class Person {
        constructor(name, age){
                this.name = name;
                this.age = age;
        }
        printName(){
                console.log(this.name);
        }
}

function printOutPersonAge(person){
        console.log(person.age);

}

console.log(generateRandomNumber());
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalMapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));
printType(2);
console.log(isPalindrome('anitalavalatina'));
const student = new Person('John', 25);
student.printName(); // "John"
printOutPersonAge(student); // 25