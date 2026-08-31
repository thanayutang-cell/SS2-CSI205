function showData(id, data, placeholder) {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    if (typeof data === "string" && data.trim() !== "") {

        element.textContent = data;

        element.classList.remove("placeholder");

    } else {

        element.textContent = "[" + placeholder + "]";

        element.classList.add("placeholder");

    }
}


/* Name */

showData(
    "name",
    typeof invoiceName !== "undefined"
        ? invoiceName
        : undefined,
    "nametxt"
);


/* Invoice Number */

showData(
    "invoiceNumber",
    typeof invoiceNumber !== "undefined"
        ? invoiceNumber
        : undefined,
    "invoice-number"
);


/* Date */

showData(
    "date",
    typeof invoiceDate !== "undefined"
        ? invoiceDate
        : undefined,
    "date"
);


/* Company Logo */

const logoElement = document.getElementById("companyLogo");

if (
    typeof companyLogo !== "undefined" &&
    companyLogo !== ""
) {

    logoElement.innerHTML = `
        <img src="${companyLogo}" alt="Company Logo">
    `;

} else {

    logoElement.innerHTML = `
        <span class="placeholder">[logo-company]</span>
    `;

}


/* Bill To */

showData(
    "billToName",
    typeof billToName !== "undefined"
        ? billToName
        : undefined,
    "bill-to-name"
);

showData(
    "billToAddress",
    typeof billToAddress !== "undefined"
        ? billToAddress
        : undefined,
    "bill-to-address"
);

showData(
    "billToEmail",
    typeof billToEmail !== "undefined"
        ? billToEmail
        : undefined,
    "bill-to-email"
);


/* From */

showData(
    "fromName",
    typeof fromName !== "undefined"
        ? fromName
        : undefined,
    "from-name"
);

showData(
    "fromAddress",
    typeof fromAddress !== "undefined"
        ? fromAddress
        : undefined,
    "from-address"
);

showData(
    "fromEmail",
    typeof fromEmail !== "undefined"
        ? fromEmail
        : undefined,
    "from-email"
);


/* Total */

/* Total */

/* Total */

const totalElement = document.getElementById("total");
const totalRow = totalElement.closest("tr");

if (
    typeof invoiceTotal !== "undefined" &&
    invoiceTotal !== ""
) {

    totalElement.textContent = invoiceTotal;
    totalRow.querySelector("td:nth-child(3)").textContent = "Total";
    totalRow.classList.remove("no-data");

} else {

    totalRow.remove();

}


/* Payment */

showData(
    "paymentMethod",
    typeof invoicePayment !== "undefined"
        ? invoicePayment
        : undefined,
    "payment-method"
);


/* Note */

showData(
    "note",
    typeof invoiceNote !== "undefined"
        ? invoiceNote
        : undefined,
    "note"
);


/* Items */

const itemsTable = document.getElementById("items");

if (
    typeof invoiceItems !== "undefined" &&
    Array.isArray(invoiceItems) &&
    invoiceItems.length > 0
) {

    itemsTable.innerHTML = "";

    invoiceItems.forEach(function (item) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item[0]}</td>
            <td>${item[1]}</td>
            <td>${item[2]}</td>
            <td>${item[3]}</td>
        `;

        itemsTable.appendChild(row);

    });

} else {

    itemsTable.innerHTML = `
        <tr>
            <td colspan="4" class="placeholder">
                [items]
            </td>
        </tr>
    `;

}