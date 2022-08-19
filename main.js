// const firstName = 'Shahin'
// const lastName = 'Islam'

// const fullName = `${firstName} ${lastName}`
// console.log(fullName)

// const students = [
//     100, 200, 300, 400, 500, 50
// ];

// for(let i=0; i<students.length; i++){
//     console.log(students[i])
// }
// console.log(students.length)

const car = {
    name: 'Volvo',
    model: 'M-2323',
    price: 1000,
    drive: function(){
        console.log(this.name + ' is running')
    }
}

let carName = car.name;
car.drive();

console.log(carName)