let city1 = {};
city1.name = "Город Нефтеюганск";
city1.population = "10млн человек";
console.log(city1);



let city2 = {
    name: "Город Сургут",
    population: 1e6
};
console.log(city2);


city1.getName = city2.getName = function () {return this.name; };
console.log(city1.getName());
console.log(city2.getName());



city1.exportStr = city2.exportStr = function () {
    return `name = ${this.name}\npopulation = ${this.population}\n`;
};
console.log(city1.exportStr());
console.log(city2.exportStr());



function getObj() { return this; }
city1.getCity = city2.getCity = getObj;
console.log(city1.getCity().getName() + ' ' + city1.getCity().population);
console.log(city2.getCity().getName() + ' ' + city2.getCity().population);




let d1 = [45, 78, 10, 3];
d1[7] = 100;
let sum3 = 0;
for(let el in d1) {
    sum3 += d1[el]
}
console.log(sum3);



var d4 = [45, 78, 10, 3]; 
d4.sort(function(a,b) {
    return b - a;
});
console.log(d4);
