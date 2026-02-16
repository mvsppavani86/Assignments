let creditScore:number=0;
let loanApproved:string;
let employeeSalary:number=0;
let employmentStatus:string;
let dtiRatio:number=0;
let customerName:String="John Doe";

// Function to evaluate loan application
function evaluateLoanApplication(creditScore: number, employeeSalary: number, dtiRatio: number): void {

if(employeeSalary>=50000 && dtiRatio<40)
{
employmentStatus="Employed";    
if(creditScore>=750)
{
    loanApproved="Approved";
    console.log("Customer Name: "+customerName+", Employment Status: "+employmentStatus+" and Loan Status: "+loanApproved);
}
else if(creditScore>=650 && creditScore<750)
{
    loanApproved="Approved with conditions";
     console.log("Customer Name: "+customerName+", Employment Status: "+employmentStatus+" and Loan Status: "+loanApproved);
}
else
{
    loanApproved="Rejected";
    console.log("Customer Name: "+customerName+", Employment Status: "+employmentStatus+" and Loan Status: "+loanApproved);
}

}
else 
{
    employmentStatus="Unemployed";
     loanApproved="Rejected";
     console.log("Customer Name: "+customerName+", Employment Status: "+employmentStatus+" and Loan Status: "+loanApproved);
 }
}

evaluateLoanApplication(720,55000,35.0);
evaluateLoanApplication(680,60000,30.0);
evaluateLoanApplication(620,45000,45.0);
evaluateLoanApplication(800,70000,25.0);
