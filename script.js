//your JS code here. If required.
// Data for the table
const tableData = {<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Styled Table with Rounded Borders</title>

  <style>
    table {
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
    }

    th, td {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem;
      text-align: left;
    }

    tr:nth-child(odd) {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #ffffff;
    }

    th {
      background-color: #4CAF50;
      color: white;
    }
  </style>
</head>

<body>

<h2>Rounded Table Example</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>30</td>
    <td>Los Angeles</td>
  </tr>
  <tr>
    <td>Mike Johnson</td>
    <td>28</td>
    <td>Chicago</td>
  </tr>
  <tr>
    <td>Emily Davis</td>
    <td>22</td>
    <td>Houston</td>
  </tr>
</table>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Styled Table with Rounded Borders</title>

  <style>
    table {
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
    }

    th, td {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem;
      text-align: left;
    }

    tr:nth-child(odd) {
      background-color: #f2f2f2;
    }

    tr:nth-child(even) {
      background-color: #ffffff;
    }

    th {
      background-color: #4CAF50;
      color: white;
    }
  </style>
</head>

<body>

<h2>Rounded Table Example</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>30</td>
    <td>Los Angeles</td>
  </tr>
  <tr>
    <td>Mike Johnson</td>
    <td>28</td>
    <td>Chicago</td>
  </tr>
  <tr>
    <td>Emily Davis</td>
    <td>22</td>
    <td>Houston</td>
  </tr>
</table>

</body>
</html>

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
