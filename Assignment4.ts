let transactionAmount:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000]
let debit=0;
let credit=0;
let creditedAmount=0, debitedAmount=0;


for(let i=0;i<=transactionAmount.length;i++)
{
    if(transactionAmount[i]<0)
    {

        debit = debit+1;
        debitedAmount = debitedAmount + transactionAmount[i]
        if(transactionAmount[i] <= -10000)
        {
           console.log("Suspicious Debit Transaction of amount : " +transactionAmount[i] )

        }    
            
    }
       
    else if (transactionAmount[i]>0)
    {
    
      credit= credit+1;
      creditedAmount = creditedAmount + transactionAmount[i]
        if(transactionAmount[i] >= 10000)
        {
           console.log("Suspicious credit Transaction of amount : " +transactionAmount[i] )

        }   

    }
}
//total number of debit and credit transactions
console.log("Total number of Debit Transactions : "+debit+" credit transactions : "+credit)
//Print the total amount credited and debited in account
console.log("Total Amount Credited : "+creditedAmount+" Debited: "+ debitedAmount)
//Print total amount remaining at the end in Bank Account
console.log("Remaining Balance = "+ (creditedAmount+debitedAmount))
//If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit Transaction with Amount” and also print total number of suspicious transactions
