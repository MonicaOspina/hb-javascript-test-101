export function generateRandomColor(){
        return {r:Math.floor(Math.random() * 256), 
        g:Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256)};
        
}

export function functionalFilterNegativeNumbers(numbers){
        function isNoNegative(value) {
                return value >= 0;
        }
        console.log(numbers);
        var filtered = numbers.filter(isNoNegative);        
        return filtered;

}

export function filterNegativeNumbers(numbers){
        const array = [];
        for(var i = 0; i< numbers.length;i++){
                if(numbers[i] >=0){
                        array.push(numbers[i]);
                }
        }
        return array;
}

export function functionalMapNumbersIntoStrings(mapnumbers){
        return mapnumbers.map(String);
}

export function mapNumbersIntoStrings(mapnumbers){
        const strings = [];
        for(var i = 0; i<mapnumbers.length;i++){
                strings.push(mapnumbers[i].toString());
        }
        return strings;
}

export function printType(variable){
        console.log(typeof variable);        
}

export function isPalindrome(word){
        var reverseword = word.split('').reverse().join('');
        return  word.replace(/\W/g,'').toLowerCase()  === reverseword.replace(/\W/g,'').toLowerCase(); 
}

export class Person {
        constructor(name, age){
                this.name = name;
                this.age = age;
        }
        printName(){
                console.log(this.name);
        }
}

export function printOutPersonAge(person){
        console.log(person.age);

}
