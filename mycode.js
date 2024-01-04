function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  const days =["Lun", "Mar", "Mie", "jue", "Vie", "Sab", "Dom"];
  // creating all cells
  for (let i = 1; i < 6; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      if (j == 0)
      {
        var cell = document.createElement("td");
        const cellText = document.createTextNode(` ${i} `);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else
      {
        const btn = document.createElement("BUTTON");
        
        //cell.appendChild(cellText);
        //btn.innerHTML("Iam a button");
        btn.innerText = days[i-1];
        row.appendChild(btn);
      }

    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
