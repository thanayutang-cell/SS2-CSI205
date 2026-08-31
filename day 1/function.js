// Company
document.getElementById("companyName").textContent =
    invoiceData.companyName;

document.getElementById("companyAddress").textContent =
    invoiceData.companyAddress;


// Bill To
document.getElementById("billToName").textContent =
    invoiceData.billTo.name;

document.getElementById("billToAddress").textContent =
    invoiceData.billTo.address;


// Ship To
document.getElementById("shipToName").textContent =
    invoiceData.shipTo.name;

document.getElementById("shipToAddress").textContent =
    invoiceData.shipTo.address;


// Invoice information
document.getElementById("invoiceId").textContent =
    invoiceData.invoiceId;

document.getElementById("invoiceDate").textContent =
    invoiceData.invoiceDate;

document.getElementById("poNumber").textContent =
    invoiceData.poNumber;

document.getElementById("dueDate").textContent =
    invoiceData.dueDate;


// Items
const itemsTable = document.getElementById("items");

invoiceData.items.forEach(function(item) {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.qty}</td>
        <td>${item.description}</td>
        <td>$${item.unitPrice}</td>
        <td>$${item.amount}</td>
    `;

    itemsTable.appendChild(row);
});


// Terms
document.getElementById("terms").textContent =
    invoiceData.terms;