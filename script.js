//your JS code here. If required.
// Data for the table
const tableData = {
  headers: ["Name", "Age", "City", "Occupation"],
  rows: [
    ["John Doe", "28", "New York", "Software Engineer"],
    ["Jane Smith", "32", "Los Angeles", "Graphic Designer"],
    ["Mike Johnson", "25", "Chicago", "Data Analyst"],
    ["Emily Davis", "30", "San Francisco", "Product Manager"],
  ],
};

// Create and append the table dynamically
const tableContainer = document.getElementById("table-container");

// Create the table element
const table = document.createElement("table");

// Create thead
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Add headers to thead
tableData.headers.forEach((header) => {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);

// Create tbody
const tbody = document.createElement("tbody");

// Add rows to tbody
tableData.rows.forEach((row) => {
  const tr = document.createElement("tr");
  row.forEach((cellData) => {
    const td = document.createElement("td");
    td.textContent = cellData;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

// Append thead and tbody to the table
table.appendChild(thead);
table.appendChild(tbody);

// Add the table to the container
tableContainer.appendChild(table);
