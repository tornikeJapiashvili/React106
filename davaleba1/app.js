///////////// დავალება 1 /////////////

const numbers = [1, -2, -10, 3, -7, 5];

const positiveNumbers = numbers.filter(number => number > 0);

const positiveNumbersSum = positiveNumbers.reduce((sum, current) => {
    sum += current;
    return sum;
}, 0);

console.log(`დადებითი რიცხვების ჯამია ${positiveNumbersSum}`);




///////////// დავალება 2 /////////////

const lettersArray = ['a', 'b', 'a', 'c', 'a', 'b'];

const answer = lettersArray.reduce((obj, current) => {
    if (current == 'a') {
        obj.a++;
    }
    if (current == 'b') {
        obj.b++;
    }
    if (current == 'c') {
        obj.c++;
    }
    return obj;
}, { a: 0, b: 0, c: 0 });

console.log("პასუხი", answer);



///////////// დავალება 3 /////////////

class car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.motion = "მანქანა გაჩერებულია"
    }
    check_motion() {
        if (this.speed == 0) {
            this.motion = "მანქანა გაჩერებულია";
        }
        if (this.speed > 0) {
            this.motion = "მანქანა მოძრაობს";
        }
    }
    accelerate(addSpeed) {
        this.speed += addSpeed;
        this.check_motion();
    }
    brake(subtractSpeed) {
        if (subtractSpeed >= this.speed) {
            this.speed = 0;
        }
        else {
            this.speed -= subtractSpeed;
        }
        this.check_motion();
    }
    emergency_brake() {
        this.speed = 0;
        this.check_motion();
    }
    status() {
        return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია: ${this.motion}`;
    }
}

const porsche356 = new car("Porsche", "356");
porsche356.accelerate(80);
console.log(porsche356.status());

porsche356.brake(90);
console.log(porsche356.status());

porsche356.accelerate(30);
console.log(porsche356.status());

porsche356.emergency_brake();
console.log(porsche356.status());



///////////// დავალება 4 /////////////

function addAsync(a, b) {
    return new Promise((res, rej) => {
        if (typeof a === 'number' && typeof b === 'number') {
            res("success");
        }
        else {
            rej("failure");
        }
    });
};

addAsync(2, -3).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
//success


addAsync(2).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
//failure


addAsync(2, 'abc').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
//failure

