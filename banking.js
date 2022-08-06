
//handel deposit button

document.getElementById("button-deposit").addEventListener('click',function(){
    const depositInput = document.getElementById("Deposit");
   
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
  
//update Deposit total
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositAmmountText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositAmmountText);

    const newDepositTotal =  previousDepositAmmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal; 

    //update total balance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear input fild
    depositInput.value = "";
})


//handle withdraw event



//handel withdraw button

document.getElementById("button-withdraw").addEventListener('click',function(){
    const withdrawInput = document.getElementById("Withdraw");
   
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
 
  
//update Deposit total
    const withdrawTotal = document.getElementById("withdraw-total");

    const previousWithdrawAmmountText = withdrawTotal.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdrawAmmountText);

    const newWithdrawTotal =  previousWithdrawAmmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal; 

    //update total balance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear input fild
    withdrawInput.value = "";
})








