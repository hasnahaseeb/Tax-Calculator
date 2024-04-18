document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const income = document.getElementById("income").value;
    if (isValidNumber(income)) {
        document.getElementById("incomeError").style.display = "none";       
    } else {
        document.getElementById("incomeError").style.display = "inline";
        return;
    }

    const exIncome = document.getElementById("exIncome").value;
    if (isValidNumber(exIncome)) {
        document.getElementById("exIncomeError").style.display = "none";  
    } else {
        document.getElementById("exIncomeError").style.display = "inline";
        return;        
    }

    const ageGrp = document.getElementById("ageGrp").value;
    if (ageGrp === "") {
        document.getElementById("ageGrpError").style.display = "inline";
        return;
    } else {
        document.getElementById("ageGrpError").style.display = "none";
    }

    const deductions = document.getElementById("deductions").value;
    if (isValidNumber(deductions)) {
        document.getElementById("deductionsError").style.display = "none";    
    } else {
        document.getElementById("deductionsError").style.display = "inline";
        return;        
    }

    
    const totalIncome = parseFloat(income) + parseFloat(exIncome) - parseFloat(deductions);
    if (totalIncome <= 800000) {
        overallIncome = totalIncome;
    } else {
        if(ageGrp === "under40") {
            const tax = 0.3 * (totalIncome - 800000);
            overallIncome = totalIncome - tax;   
        }
        if(ageGrp === "40 to 59") {
            const tax = 0.4 * (totalIncome - 800000);
            overallIncome = totalIncome - tax;
        }
        if(ageGrp === "60 and over") {
            const tax = 0.1 * (totalIncome - 800000);
            overallIncome = totalIncome - tax;
        }
        
    }
    const taxResultsContent = 'Your overall income will be\n' + overallIncome.toLocaleString('hi-IN') + '\nafter tax deductions';
    document.getElementById("taxResults").innerText = taxResultsContent;
    document.getElementById("taxResultsModal").style.display = "block";
    
});


function isValidNumber(value) {
    return /^\d+$/.test(value);
}

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("taxResultsModal").style.display = "none";
    });