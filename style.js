   
   
//    Income section
let a=1;
let b=1;
let totalIncome=0;
let totalExpense=0;

   
   function myFunctionOne(){
        
       
        const name = document.getElementById("income").value;
        const number = document.getElementById("incmamount").value;
        // const total1= document.getElementById("incometotal").value;
        // const total2=document.getElementById("incometotal2").value
        // const tot=parseInt(total1)+parseInt(total2);
        // document.getElementById("incometotal").innerHTML=tot;





        const nameError= document.getElementById("nameError");
        const numberError = document.getElementById("numberError");

     
        nameError.textContent="";
        numberError.textContent="";
        
        
        let isValidone=false;
        let isValidtwo=false;
        // let Valid=false;
       
        if ( name==="") {
        nameError.textContent="Enter catogary";
        nameError.style.color="red";
        isValidone = false;

        } else {
        
        nameError.textContent="valid";
        nameError.style.color="white";
         isValidone=true;
        }
        
        if( number ===""){
        numberError.textContent = "Enter Amount";
        numberError.style.color="red";
        isValidtwo =false;
        }else{
        
        numberError.textContent = "Valid";
        numberError.style.color="white";
        isValidtwo=true;
        }
        if(isValidone==true&&isValidtwo==true){
            
            const tablebody=document.getElementById("table-body");
            const newRow=tablebody.insertRow();
            const slnumber=newRow.insertCell(0);
            const cellCatogary=newRow.insertCell(1);
            const cellIncome=newRow.insertCell(2);
            slnumber.innerHTML=a;
            cellCatogary.innerHTML=name;
            cellIncome.innerHTML=number;
            
            document.getElementById("income").value="";
            document.getElementById("incmamount").value="";
            a+=1;


      
            totalIncome = parseInt(number) + totalIncome;
            document.getElementById("totalIn").innerHTML = totalIncome;
            // document.getElementById("Balance").innerHTML= Balance;
            // chart();
            updateBalance();

          
        }
        
}

// expense section


function expense(){
    const expense=document.getElementById("Expense").value;
    const exAmount=document.getElementById("expenseamount").value;

    const ErExcat=document.getElementById("ErrorExpense");
    const ErExamt=document.getElementById("ErExpAmnt");

    ErExcat.textContent="";
    ErExamt.textContent="";

    let isValidthree=false;
    let isValidfour=false;

    if ( expense ==="") {
        ErExcat.textContent="Enter catogary";
        
        ErExcat.style.color="red";
        isValidthree = false;

        } else {
            ErExcat.textContent="valid";
            ErExcat.style.color="green";
            isValidthree=true;
        }
        
        if( exAmount ===""){
            ErExamt.textContent = "Enter Amount";
           
            ErExamt.style.color="red";
            isValidfour =false;
        }else{
            ErExamt.textContent = "Valid";
            ErExamt.style.color="green";
            isValidfour=true;
        }

        if(isValidthree==true&&isValidfour==true){
            const tbody=document.getElementById("tbody");
            const newRowone=tbody.insertRow();
            const slnumber=newRowone.insertCell(0);
            const cellCatogary=newRowone.insertCell(1);
            const cellIncome=newRowone.insertCell(2);
            slnumber.innerHTML=b;
            cellCatogary.innerHTML=expense;
            cellIncome.innerHTML=exAmount;

            document.getElementById("Expense").value="";
            document.getElementById("expenseamount").value="";
            b+=1;


            totalExpense = parseInt(exAmount) + totalExpense;
            document.getElementById("totalExpense").innerHTML = totalExpense;
          
            updateBalance();
        }
}

function updateBalance() {
   
     const balance = totalIncome - totalExpense;
     document.getElementById("Balance").innerHTML = balance;
     const xValues = ["Income", "Expense", "Balance"];
     const yValues = [totalIncome,totalExpense,totalIncome-totalExpense];
     const barColors = [ "#2b5797","#b91d47", "#00aba9" ];
        
     new Chart("myChart", {
    type: "pie",
     data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
    options: {
    title: {
      display: true,
      text: ""
    }
  }
});
}
 
