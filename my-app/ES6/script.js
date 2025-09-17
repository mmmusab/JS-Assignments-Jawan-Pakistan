 var a="musab";
console.log(a);

let b=5;
console.log(b);

const c=11;
console.log(c);

function hello(){
    var x="hi";
    console.log(x);
}
hello();

function scopeFunction() {
    var fnVar = "var inside function";
    let fnLet = "let inside function";
    const fnConst = "const inside function";
    console.log("Inside function:", fnVar, fnLet, fnConst);
}
scopeFunction();
try { console.log(fnVar, fnLet, fnConst); } catch(e){ console.log("scopeFunction outside error:", e.message); }

if (true) {
    var blockVar = "var inside block";
    let blockLet = "let inside block";
    const blockConst = "const inside block";
    console.log("Inside block:", blockVar, blockLet, blockConst);
}
console.log("blockVar outside:", blockVar);
try { console.log(blockLet); } catch(e){ console.log("blockLet outside error:", e.message); }
try { console.log(blockConst); } catch(e){ console.log("blockConst outside error:", e.message); }

console.log("hoistedVar before declaration:", hoistedVar);
var hoistedVar = "Now assigned";
console.log("hoistedVar after assignment:", hoistedVar);

try {
    console.log(hoistedLet);
} catch(e){
    console.log("hoistedLet error:", e.message);
}
let hoistedLet = "let after declaration";
console.log("hoistedLet after declaration:", hoistedLet);

try {
    console.log(hoistedConst);
} catch(e){
    console.log("hoistedConst error:", e.message);
}
const hoistedConst = "const after declaration";
console.log("hoistedConst after declaration:", hoistedConst);

var redeclareVar = 1;
var redeclareVar = 2;
console.log("redeclareVar:", redeclareVar);

try {
    eval("let redeclareLet = 1; let redeclareLet = 2;");
} catch(e){
    console.log("redeclareLet eval error:", e.message);
}
try {
    eval("const redeclareConst = 1; const redeclareConst = 2;");
} catch(e){
    console.log("redeclareConst eval error:", e.message);
}

var reVar = 5;
reVar = 10;
console.log("reVar after reassignment:", reVar);

let reLet = 20;
reLet = 40;
console.log("reLet after reassignment:", reLet);

const reConst = 50;
try {
    eval("reConst = 100;");
} catch(e){
    // using eval to show error is caught at runtime if attempted as code string
}
console.log("reConst stays:", reConst);

{
    try { console.log(tdzLet); } catch(e){ console.log("TDZ let error:", e.message); }
    let tdzLet = "tdz let now";
    try { console.log(tdzConst); } catch(e){ console.log("TDZ const error:", e.message); }
    const tdzConst = "tdz const now";
    console.log("tdzLet and tdzConst after declaration:", tdzLet, tdzConst);
}

function useCaseVar() {
    for (var i = 0; i < 3; i++) {}
    console.log("useCaseVar i:", i);
}
useCaseVar();

function useCaseLet() {
    for (let j = 0; j < 3; j++) {
        setTimeout(function(){ console.log("useCaseLet j in timeout:", j); }, 0);
    }
}
useCaseLet();

const pi = 3.14159;
console.log("const example pi:", pi);

const firstName = "Ali";
const lastName = "Khan";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const address = `House 42
Street 7
City Metro`;
console.log(address);

const a = 8;
const b = 5;
console.log(`Sum of ${a} and ${b} is ${a + b}`);

function product(x,y){ return x*y; }
console.log(`Product of 4 and 5 is ${product(4,5)}`);

function tag(strings, ...values){
    console.log("tag called", strings, values);
    return strings.reduce((s, str, i) => s + str + (values[i] !== undefined ? values[i] : ""), "");
}
console.log(tag`Hello ${"friend"}, you have ${3} messages`);

function upperTag(strings, ...values){
    const raw = strings.reduce((s, str, i) => s + str + (values[i] !== undefined ? values[i] : ""), "");
    return raw.toUpperCase();
}
console.log(upperTag`hello ${"there"}`);

const hour = new Date().getHours();
console.log(`${hour < 12 ? "Good morning" : "Good afternoon"}, it's ${hour} o'clock`);

const items = ["eggs","milk","bread"];
console.log(`<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`);

const backtickString = `This string contains a backtick \``;
console.log(backtickString);

const nested = `<table>${[1,2].map(r => `<tr>${[3,4].map(c => `<td>${r*c}</td>`).join("")}</tr>`).join("")}</table>`;
console.log(nested);

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

function grade(score){
    return score >=90 ? "A" : score >=80 ? "B" : score >=70 ? "C" : score >=60 ? "D" : "F";
}
console.log("grade 85:", grade(85));

const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

const isMember = true;
const purchaseAmount = 150;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.10 : 0;
console.log("discount:", discount);

function maxValue(x,y){ return x > y ? x : y; }
console.log("maxValue 7,9:", maxValue(7,9));

function greet(name){ return name && name.trim() ? `Hello, ${name}!` : "Hello, guest!"; }
console.log(greet("Zain"), greet(""));

const nums = [1,2,3,4,5];
const mapped = nums.map(n => n % 2 === 0 ? n*2 : n*3);
console.log(mapped);

const strings = ["one","two","three","four"];
const filteredStrings = strings.filter(s => s.length > 3);
console.log(filteredStrings);

const originalArray = [1,2,3];
const copiedArray = [...originalArray];
console.log(originalArray, copiedArray, originalArray === copiedArray);

const array1 = [1,2];
const array2 = [3,4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

let numbers = [2,3,4];
numbers = [1, ...numbers, 5];
console.log(numbers);

const originalObject = {name:"Sami", age:22};
const copiedObject = {...originalObject};
console.log(originalObject, copiedObject, originalObject === copiedObject);

const object1 = {a:1, b:2};
const object2 = {b:3, c:4};
const mergedObject = {...object1, ...object2};
console.log(mergedObject);

const user = {name:"Nadia", age:30, email:"n@e.com"};
const updatedUser = {...user, email:"nadia@example.com", address:"Somewhere"};
console.log(updatedUser);

function sum(a,b,c){ return a+b+c; }
const numbersForSum = [1,2,3];
console.log(sum(...numbersForSum));

function combineArrays(...arrays){ return arrays.flat(); }
console.log(combineArrays([1,2],[3,4],[5]));

function multiply(multiplier, ...args){
    return args.map(n => n * multiplier);
}
console.log(multiply(2,1,2,3));

const nestedArray = [[1,2],[3,4],[5,6]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log("original nested after shallow modify:", nestedArray);
console.log("shallowCopy:", shallowCopy);

function sumRest(...args){ return args.reduce((s,x)=>s+x,0); }
console.log(sumRest(1,2,3,4));

function average(...args){ return args.reduce((s,x)=>s+x,0)/args.length; }
console.log(average(2,4,6));

const numbersFive = [10,20,30,40,50];
const [first, ...rest] = numbersFive;
console.log(first, rest);

const colors = ["red","green","blue","yellow"];
const [ , , tertiaryColor] = colors;
console.log(tertiaryColor);

const person = {name:"Ayesha", age:24, email:"a@x.com", address:"City"};
const {name, email, ...restProps} = person;
console.log(name, email, restProps);

const student = {id:1, name:"Bilal", grades:[90,80], info:{age:21, major:"CS"}};
const {id, name:studentName, info:{major}, ...studentRest} = student;
console.log(id, studentName, major, studentRest);

function filterEven(...args){ return args.filter(n => n % 2 === 0); }
console.log(filterEven(1,2,3,4,5,6));

function combineAndSort(...arrays){ return arrays.flat().sort((a,b)=>a-b); }
console.log(combineAndSort([3,1],[4,2]));

const fruits = ["apple","banana","cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

const col = ["red","green","blue","yellow"];
const [, , tertiary] = col;
console.log(tertiary);

const nums1 = [1,2,3,4,5];
const [firstNum, ...remainingNumbers] = nums1;
console.log(firstNum, remainingNumbers);

const personObj = {name:"Z", age:29, city:"Karachi"};
const {name:personName, age:personAge, city:personCity} = personObj;
console.log(personName, personAge, personCity);

const car = {make:"Toyota", model:"Corolla", year:2018};
const {make:carMake, model:carModel, year:carYear} = car;
console.log(carMake, carModel, carYear);

const settings = {theme:"dark"};
const {theme, language = "English"} = settings;
console.log(theme, language);

const nestedArr = [[1,2],[3,4],[5,6]];
const [[a1],[b1],[c1]] = nestedArr.map(sa => [sa[0]]);
console.log(a1, b1, c1);

const profile = {username:"user1", details:{email:"u@x.com", address:"Addr"}};
const {username, details:{email, address}} = profile;
console.log(username, email, address);

const data = {id:10, info:[{name:"Alice"},{age:25}]};
const {id: dataId, info:[{name:infoName},{age:infoAge}]} = data;
console.log(dataId, infoName, infoAge);

function printCoordinates([x,y]){ console.log("x:", x, "y:", y); }
printCoordinates([4,5]);

function displayUser({name, age}){ console.log("displayUser", name, age); }
displayUser({name:"Omar", age:19});

const book = {title:"JS", author:"E", year:2020};
console.log(Object.keys(book));

const studentObj = {name:"X", age:17, grade:"A", school:"HighSchool"};
console.log(Object.keys(studentObj).length);

const product = {name:"Laptop", price:1200, category:"Electronics"};
Object.keys(product).forEach(k => console.log(k, product[k]));

const movie = {title:"Film", director:"Dir", year:2021, genre:"Drama"};
console.log(Object.values(movie));

const scores = {math:90, science:85, english:88};
const total = Object.values(scores).reduce((s,x)=>s+x,0);
console.log(total);

const userObj = {username:"usr", email:"u@e", location:"Here"};
Object.values(userObj).forEach(v => console.log(v));

const carObj = {make:"H", model:"M", year:2015};
console.log(Object.entries(carObj));

const person2 = {firstName:"A", lastName:"B", age:30};
console.log(Object.entries(person2));

const settingsObj = {theme:"light", notifications:true, privacy:"high"};
Object.entries(settingsObj).forEach(([k,v]) => console.log(k,v));

const inventory = {apples:12, bananas:5, oranges:20, grapes:8};
const keysGT10 = Object.keys(inventory).filter(k => inventory[k] > 10);
console.log(keysGT10);

const temps = {morning:20, afternoon:25, evening:18};
const transformed = Object.fromEntries(Object.entries(temps).map(([k,v]) => [k, Math.round((v * 9/5) + 32)]));
console.log(transformed);

const roles = {admin:"Alice", editor:"Bob", viewer:"Charlie"};
const swapped = Object.fromEntries(Object.entries(roles).map(([k,v]) => [v,k]));
console.log(swapped);

function filterAndMap(arr, filterFn, mapFn){ return arr.filter(filterFn).map(mapFn); }
console.log(filterAndMap([1,2,3,4,5], n => n%2!==0, n => n*n));

function sortAndReduce(arr, sortFn, reduceFn){
    return arr.sort(sortFn).reduce(reduceFn);
}
console.log(sortAndReduce(["apple","banana","cherry","date"], (a,b)=>a.localeCompare(b), (acc,x)=>acc + x, ""));

function greetCb(name, cb){ cb(`Hello, ${name}`); }
function printGreeting(msg){ console.log(msg); }
greetCb("Sam", printGreeting);

function fetchData(callback){
    setTimeout(()=> { callback({id:1, name:"Fake"}); }, 500);
}
function displayData(d){ console.log("displayData", d); }
fetchData(displayData);

const add = (a,b) => a+b;
console.log(add(3,5));

const numsArr = [1,2,3,4,5];
console.log(numsArr.map(n => n*n));

function outer(){
    const x = "outer x";
    function inner(){ console.log(x); }
    inner();
}
outer();

function createCounter(){
    let count = 0;
    return function(){ count++; console.log("count:", count); return count; };
}
const c1 = createCounter();
const c2 = createCounter();
c1(); c1(); c2();

function greetDefault(name="Hello", personName="Guest"){ console.log(name, personName); }
greetDefault(undefined, "Yasin");
greetDefault("Hi", "Yasin");

function calculateArea(width=10, height=5){ return width * height; }
console.log(calculateArea(), calculateArea(3,4));

const numsSquare = [1,2,3,4,5];
console.log(numsSquare.map(n=>n*n));

const words = ["apple","banana","cherry"];
console.log(words.map(w => w.toUpperCase()));

const numbersForFilter = [1,2,3,4,5,6,7,8,9,10];
console.log(numbersForFilter.filter(n => n%2===0));

const wordsForFilter = ["apple","banana","cherry","date"];
console.log(wordsForFilter.filter(w => w.length > 5));

const numsForEach = [1,2,3,4,5];
numsForEach.forEach(n => console.log(n));

const wordsForEach = ["apple","banana","cherry"];
wordsForEach.forEach(w => console.log(w.length));

const sumNums = [1,2,3,4,5];
console.log(sumNums.reduce((s,x)=>s+x,0));

const concatWords = ["Hello","world","this","is","JavaScript"];
console.log(concatWords.reduce((acc,w)=>acc + (acc? " ":"") + w,""));

const evenCheck = [1,3,5,7,8];
console.log(evenCheck.some(n => n%2===0));

const longWordCheck = ["apple","banana","cherry","date"];
console.log(longWordCheck.some(w => w.length > 5));

const allEven = [2,4,6,8,10];
console.log(allEven.every(n => n%2===0));

const allLong = ["elephant","giraffe","hippopotamus"];
console.log(allLong.every(w => w.length > 5));

const firstEven = [1,3,5,7,8].find(n => n%2===0);
console.log(firstEven);

const firstLong = ["apple","banana","cherry","date"].find(w => w.length > 5);
console.log(firstLong);

const idxFirstEven = [1,3,5,7,8].findIndex(n => n%2===0);
console.log(idxFirstEven);

const idxLongWord = ["apple","banana","cherry","date"].findIndex(w => w.length > 5);
console.log(idxLongWord);

function delay(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }
delay(2000).then(()=>console.log("Hello, world! after 2s"));

function fetchDataPromise(){
    return Promise.resolve({user:"U", id:1});
}
fetchDataPromise().then(d => console.log("fetchDataPromise", d));

function fetchUserData(){
    return new Promise((resolve, reject) => {
        const data = {name:"NoAge"};
        if(!data.age) reject("Missing age");
        else resolve(data);
    });
}
fetchUserData().then(d => console.log(d)).catch(e => console.log("fetchUserData error:", e));

function getWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(Math.random() > 0.5) resolve({temp:25});
            else reject("Network error");
        }, 1000);
    });
}
getWeather().then(w => console.log("weather", w)).catch(e => console.log("weather error", e));

async function sayHello(){ await delay(2000); console.log("Hello, world! (async)"); }
sayHello();

async function getUserDataAsync(){
    try {
        const data = await fetchUserData();
        console.log("user data async", data);
    } catch(e){
        console.log("getUserDataAsync error:", e);
    }
}
getUserDataAsync();

function fetchUser(){
    return new Promise((resolve, reject) => {
        const user = {id:1, name:"User1"};
        if(user) resolve(user);
        else reject("User not found");
    });
}
function fetchPosts(userId){
    return new Promise(resolve => resolve([{id:1, title:"Post"}]));
}
async function getUserAndPosts(){
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        console.log("user", user, "posts", posts);
    } catch(e){
        console.log("getUserAndPosts error:", e);
    }
}
getUserAndPosts();

function fetchUserMaybeFail(){
    return new Promise((resolve, reject) => {
        const found = Math.random() > 0.3;
        if(found) resolve({id:2, name:"Found"});
        else reject("not found");
    });
}
async function getUserInfo(){
    try {
        const u = await fetchUserMaybeFail();
        console.log("getUserInfo", u);
    } catch(e){
        console.log("getUserInfo error:", e);
    }
}
getUserInfo();

function apiCall(id){
    return new Promise(resolve => setTimeout(()=> resolve({id, time:Date.now()}), Math.random()*1000));
}
async function getData(){
    try {
        const r1 = await apiCall(1); console.log(r1);
        const r2 = await apiCall(2); console.log(r2);
        const r3 = await apiCall(3); console.log(r3);
    } catch(e){ console.log("getData error", e); }
}
getData();
