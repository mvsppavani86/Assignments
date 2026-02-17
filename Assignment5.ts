interface employees 
{
 id: number;
 empname: string
 basesalary:number
 experience:number
 rating:number

} 

let emp: employees[] = 
[

   {id:1, empname: "Alice Johnson", basesalary: 75000.0, experience:5.1,rating:4.2},
   {id:2, empname: "Bob Smith", basesalary: 68000.0, experience:3.2,rating:3.8},
   {id:3, empname: "Carol Davis", basesalary: 82000.0, experience:7.1,rating:4.5},
   {id:4, empname: "David Brown", basesalary: 90000.0, experience:10.2,rating:2.5},
    {id:5, empname: "Eva Green", basesalary: 60000.0, experience:2.4,rating:3.5},

]
let empHikeMap = new Map<string,number>
let variablepay:number=0;
let bonus:number=0;
let extrareward:number=5000;
let hike:number=0;
let hikePercentage:number=0;

for(let i=0;i<=emp.length-1;i++)
{
if(emp[i].rating>=4)

    {
        if(emp[i].experience>=5)
        {
            variablepay = ((emp[i].basesalary)*15)/100
            bonus=1500;
            hike= (emp[i].basesalary*variablepay)+bonus+extrareward
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }
        else
        {
            variablepay = ((emp[i].basesalary)*15)/100
             bonus=1500;
            hike= (emp[i].basesalary*variablepay)+bonus
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }
         
    }

    else if(emp[i].rating>=3 && emp[i].rating<4)
    {

        if(emp[i].experience>=5)
        {
            variablepay = ((emp[i].basesalary)*10)/100
            bonus=1200;
            hike= (emp[i].basesalary*variablepay)+bonus+extrareward
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }
        else
        {
            variablepay = ((emp[i].basesalary)*10)/100
             bonus=1200;
            hike= (emp[i].basesalary*variablepay)+bonus
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }

    }
   else if(emp[i].rating<3)
   {
    if(emp[i].experience>=5)
        {
            variablepay = ((emp[i].basesalary)*3)/100
            bonus=300;
            hike= (emp[i].basesalary*variablepay)+bonus+extrareward
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }
        else
        {
            variablepay = ((emp[i].basesalary)*3)/100
             bonus=300;
            hike= (emp[i].basesalary*variablepay)+bonus
            hikePercentage = hike/emp[i].basesalary
            empHikeMap.set(emp[i].empname,hikePercentage)
        }

   }
   hike=0;
   hikePercentage=0;
   bonus=0;
   variablepay=0

}
console.log(empHikeMap)





