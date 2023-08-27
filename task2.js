const product=(a,b)=>a*b;
console.log(product(100,34));
console.log(product(9,9));

class student{
    constructor(name,age,Department){
        this.name=name;
        this.age=age;
        this.Department=Department;
    }
}
const yash=new student('Yash',23,'CSE');
const rishab=new student('Rishab',25,'ECE');
console.log(yash);
console.log(rishab)