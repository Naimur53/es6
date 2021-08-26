

// //arrow function
// let sadi = (a) => {
//     console.log(a + a);
// }
// sadi(5);

// // our button 
//and problem solve
// const myButton = document.getElementById('my-button');
// const shop = {
//     purchase: () => {
//         console.log(this);
//     },
//     car: 10000,
//     buyNow() {
//         myButton.addEventListener('click', () => {
//             console.log("kire vai " + this.car);
//         })
//     }
// }
// shop.purchase();
// // shop.buyNow();
// const myName = "hello sadi how are you"
// console.log(`dfe 
// dfdfdfd
//          dfdfdf
// ${myName}`);

// //get awesome object 
// const obj = {
//     name: 'sadi',
//     age: 434,
//     education: "none"
// }

// // normal method
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.education);

// see function new 
// jog korbo 
// function sum(a, b) {
//     const result = a + b;
//     // console.log(result);
//     return result;
// }
// // sum('sadi', 'soyab');
// // sum(70, 90);
// let ourSum = sum(12, 3);
// console.log(ourSum);
// onclick = "sum(43,232)"
// worng function call
// function sum() {
//     multi();
// // }
// console.log(sadi);
// let sadi = "dk";
// document.getElementById("my-button").addEventListener('click', sum);
// document.getElementById("my-button").addEventListener('click', function () {
//     sum();
// });
// // document.getElementById("my-button").onclick = sum;
// function sum() {
//     console.log('its sum');
// }
// arrow function -------------------------
// const multiply = (num1, num2) => num1 * num2;
// const hi = num => num + num;
// console.log(multiply(23, 32), hi(2));
// // if no perameter 
// const yourName = () => 'sadi';

// // ... thing  array push problem solve ---------------
// const myArray = [23, 56, 6773, 134, 4];
// const myVari = [...myArray];
// // const myVari = myArray;

// myArray.push('kire')
// console.log(myVari);
// function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));

// document.getElementById('my-button').addEventListener('click', () => {
//     const element = document.createElement('div');
//     element.innerHTML = `<h1>sadi</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores sapiente officia fuga quod molestias obcaecati molestiae labore cupiditate quasi maiores esse laboriosam delectus illo expedita quas quam repellat a.</p>`
//     const inner = document.getElementById('inner');

//     document.getElementById('hi').append(inner);


// })
// Destructuring Object to extract values to variables ----

// const ourObj = { id: 13232, name: 'sadi', ki: 'kisona' }
// const { id, name, ki } = ourObj;
// // console.log(id);

// //dive object 
// const company = {
//     tec: 2324,
//     ceo: { ceoName: 'sadi', work: '4hours' }

// }
// const { tec, ceo } = company;
// const { ceoName, work } = ceo;
// company.naimur = 'sa';
// console.log(tec);
// console.log(ceoName);
// console.log(company);
// // Array Destructuring, nested object Optional chaining------------
// const [itsArray, its2ndarray] = [['sadi', 'naimur'], 323232]
// console.log(itsArray, its2ndarray);
// // now its time of object --- its simple different between array
// const { sky, sad } = { sky: '4', sad: 'd' };
// console.log(sky, sad);

// // optional chaining --------------------------------

// const company2 = {
//     name: 'GP',
//     ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
//     web: {
//         work: 'website development',
//         employee: 22,
//         framework: 'react',
//         tech: {
//             first: 'html',
//             second: 'css',
//             third: 'js'
//         }
//     },
// };
// const { first, second, third } = company2.web.tech;
// console.log(first, second, third);
// //learning ??????????????????????????????????????????????????????
// console.log(first?.what?.inn,);

// // array map -------------------------
// const myArray2 = [23, 56, 6773, 134, 4];
// const multi = () => 2 * 2;

// console.log(myArray2.map(multi));
// console.log(myArray2.map(x => x * x));

// // more array maping ------------------------

// const products = [
//     { name: 'water bottle', price: 50, color: 'yellow' },
//     { name: 'mobile phone', price: 15000, color: 'black' },
//     { name: 'smart watch', price: 3000, color: 'black' },
//     { name: 'sticky note', price: 30, color: 'pink' },
//     { name: 'water glass', price: 3, color: 'white' }
// ];
// const allNameValue = products.map(x => x.name);
// const allNamePrice = products.map(x => x.price);
// console.log(allNameValue);
// console.log(allNamePrice);
// // const allSingleItem = products.map(x => console.log(x.name));


// // for only console.log its good to use foreach ------------
// // its not return a value 
// const allForeach = products.forEach(x => console.log(x));
// //filter ---------------------
// const checkingPrice = products.filter(x => x.price > 100);
// const [ft, sed] = checkingPrice;
// console.log('hi', ft.price);

// // find method 
// // its will return Element not array 
// const fin = products.find(product => product.color == 'pink');
// console.log(fin);

// learning class ----------

// class Support {
//     name;
//     role = 'support web dev';
//     address = 'anything'
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
//     startSession() {
//         console.log('start a support session')
//     }
// }
// class Nai {
//     k;
//     role = 'nothing'
//     constructor(k, role) {
//         this.k = k;
//         this.role = role;
//     }
// }
// const amir = new Support('its amir khan', 'bd');
// const sadi = new Nai('its sadi', 'arab');
// console.log(sadi);
// amir.startSession();

// // inheritance -------------------------------------------
// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);

//-----------------exam 
// let thereA = x => x / 5;
// const hi = thereA(50);
// console.log(hi)
//-------------3b
// let thereA = (x, y) => (x + y) * 2;
// const hi = thereA(50, 2);
// console.log(hi)
// console.log(hi)
//-----3c
// let thereA = (x, y, z) => x * y * z;
// const hi = thereA(50, 2, 3);
// console.log(hi);
//-----3d
// let thereA = (x, y) => {
//     let re = x + y;
//     re =re * 2;
//     return re;

// }
// const hi = thereA(50, 2);
// console.log(hi);
// // ---------------5
// const ourArray = [2, 423, 23, 23, 2];
// const multi5 = ourArray.map(x => x * 5);
// console.log(multi5);
// ------7
// const ourObj = [
//     { price: 33442 },
//     { price: 565 },
//     { price: 12 },
//     { price: 4546 },
//     { price: 34 }
// ];
// const moreThan500 = ourObj.find(x => x.price > 5000);
// console.log(moreThan500);
const ourObj = { name: "sadi", age: 18, education: 'collage' }
const { education } = ourObj;
console.log(education);

// last program 
const hmm = (x, y, z = 3) => {
    return x + y + z;
}
console.log(hmm(23, 2))