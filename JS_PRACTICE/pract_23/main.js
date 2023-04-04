//1.
const add = (num1, num2) => {
    sum=num1+num2;
    console.log(sum);
}

add(10,15)


//2.

const subscription = (email_id) => {
    console.log(`Welcome! ${email_id} You are on 30 days free trial. `)
}

subscription ('25paruljain@gmail.com')

//3.

const vacation = () => {
    console.log("Book the flights")
    console.log("Book the Hotels")
    console.log("Plan your itenaries")
    console.log("Look for restaurants")
}

vacation()


//4. 

const shopping = (day1, day2) => {
    console.log(`I shop on: ${day1} and ${day2}`)
}

shopping('Tuesday', 'Friday')


//5.

const morningDrink = (beverage) => {
    console.log(`I prefer to drink ${beverage} in the morning`)
}

morningDrink("GreenTea")