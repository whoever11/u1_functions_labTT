//Number 1 - Name

// let name = "Cj"
// function logIn() {
//     console.log("Welcome " + name)
// }
// logIn()
//end of number 1

//Number 2 - LoggedIn
// let name = "Cj"
// let isLoggedIn = false
// function logIn() {
//     if (isLoggedIn) {
//         console.log(`Hello ${name}! `)
//     } else {
//         console.log("Please log in")
//     }
// }
// logIn()

//end of number 2

// Number 3 = Lawn Cost

//  const length = 20
//  const width = 30
//  const sodPrice = 1.45
//  const laborCost = 100
//  const budget = 700

//  function calculateLawnCost(length, width, sodPrice, laborCost, budget) {
//      const area = length * width;
//      const totalCost = area * sodPrice + laborCost
   
//      if (totalCost <= budget) {        
//      console.log(`The total cost to redo the lawn is $${totalCost}`)
//         console.log("You have enough budget.");
//         console.log(`You will have $${budget - totalCost}`)
//      } else {
//         console.log(`The total cost to redo the lawn is $${totalCost}`)
//         console.log("You don't have enough budget.")
//         console.log(`You will need an additional $${totalCost - budget} to complete the job.`)
//     }
//  }
// calculateLawnCost(length, width, sodPrice, laborCost, budget)
// const width = 20;
// const length = 30;
// const sodPrice = 1.45;
// const laborCost = 100;
// const budget = 700;

// const calcArea = (width, length, sodPrice, laborCost, budget) => {
//     const sodCost = width * length * sodPrice;
//     const remainingBudget = budget - sodCost;

//     console.log(`Lawn Cost: ${sodCost}`);
//     console.log(`You ${sodCost <= budget ? "have enough" : "don't have enough"} budget.`);
//     console.log(`You ${sodCost <= budget ? "will have" : "need"} $${Math.abs(sodCost - budget)} ${sodCost <= budget ? "left over" : "additional"} to complete the job.`);
// }
// calcArea(width, length, sodPrice, laborCost, budget);

// end of Number 3

// Number 4

const students = [ 'Alice', 'Andy', 'Andrew', 'Casey','Damian','Emily','Emilie','Grant','Howie', 'Isabella','Kat','Kimbrad','Kiu', 'Natasha', 'Obi','Oscar','Pedro', 'Sarah','Scott', 'Tiffany','Umberto','Wade','Zhe'
]
function printNameAndLength(students) {
    for (let i = 0; i < students.length; i++) {
        const name = students[i]
        const length = name.length
        console.log(`${name} is ${length} letters long`)
    }
}
printNameAndLength(students)

// end of Number 4

// Number 5