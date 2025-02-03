function addIncome(){
    let income = document.getElementById('in-num').value;
    
    let expense = document.getElementById('ex-num').value;
    
    let date1 = document.getElementById('date').value;
    let select = document.getElementById('select').value;
    
    
    var newRow = document.createElement('tr');
 
    // Create and populate cells in the new row
    var nameCell = document.createElement('td');
    var dateCell = document.createElement('td');
    var amountCell = document.createElement('td');
    var type = document.createElement('td');
    if(income){
        nameCell.textContent = select;
        dateCell.textContent = date1;
        amountCell.textContent = income;
        type.textContent = "Income";
        
    }
    else if (expense){
        nameCell.textContent = select;
        dateCell.textContent = date1;
        amountCell.textContent = expense;
        
    }
    
  
    newRow.appendChild(nameCell);
    // we are creating 4 td inside a tr
    newRow.appendChild(amountCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(type);
  
    // Add the new row to the table body
    var tableBody = document.querySelector('table tbody');
    tableBody.appendChild(newRow);
  
    // Clear input fields
    document.getElementById('ex-num').value = '';
    document.getElementById('in-num').value = '';
    document.getElementById('date').value = '';
    document.getElementById('Amount').value = '';
}
