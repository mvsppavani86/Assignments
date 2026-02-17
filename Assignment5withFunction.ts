function calculateHike(
    basesalary:number,
    experience:number,
    rating:number

):number
    { let variablepaypercentage=0;
    let bonus=0;
    let extrareward=0;

    if(rating>=4)
    {
        variablepaypercentage=15
        bonus=1500
    }
    else if(rating>=3 && rating<4)
    {
          variablepaypercentage=12
        bonus=1200
    }
    else
    {
        variablepaypercentage=3;
        bonus=300

    }
    if (experience>=5)
     extrareward=5000;

   let hike=(basesalary*variablepaypercentage/100)+bonus+extrareward;
   let hikepercentage=(hike/basesalary)*100;
   return hikepercentage;
}
// declaring employee interface
interface employees {
 id: number;
 empname: string;
 basesalary: number;
 experience: number;
 rating: number;
}

let employees_list: employees[] = 
[

   {id:1, empname: "Alice Johnson", basesalary: 75000.0, experience:5.1,rating:4.2},
   {id:2, empname: "Bob Smith", basesalary: 68000.0, experience:3.2,rating:3.8},
   {id:3, empname: "Carol Davis", basesalary: 82000.0, experience:7.1,rating:4.5},
   {id:4, empname: "David Brown", basesalary: 90000.0, experience:10.2,rating:2.5},
    {id:5, empname: "Eva Green", basesalary: 60000.0, experience:2.4,rating:3.5},

]

let hikeMap: Map<string, number> = new Map();

for (let employee of employees_list) {
    let hikePercentage = calculateHike(employee.basesalary, employee.experience, employee.rating);
    hikeMap.set(employee.empname, hikePercentage);
}
// Print the hike percentages for each employee
for (let [empname, hikePercentage] of hikeMap.entries()) {
    console.log(`${empname} will receive a hike of ${hikePercentage.toFixed(2)}%`);
}
hikeMap.forEach((hikePercentage, empname) => {
    console.log(`${empname} will receive a hike of ${hikePercentage.toFixed(2)}%`);
});
