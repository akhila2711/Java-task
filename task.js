function addInput() {
    const inputField = document.getElementById("input");
    const inputValue = inputField.value;

    if (inputValue.trim() !== "") {
        const tableBody = document.getElementById("tableBody");

        const row = document.createElement("tr");

        const serialCell = document.createElement("td");
        const valueCell = document.createElement("td");

        const serialNumber = tableBody.rows.length + 1;
        serialCell.textContent = serialNumber;
        valueCell.textContent = inputValue;

        row.appendChild(serialCell);
        row.appendChild(valueCell);

        tableBody.appendChild(row);

        inputField.value = "";

        const div2 = document.getElementById("div2");
        const circle = document.createElement("div");

        const divWidth = div2.clientWidth;
        const divHeight = div2.clientHeight;
        const circleDiameter = 40; // Diameter of the circle

        
        const circleX = Math.random() * (divWidth - circleDiameter);
        const circleY = Math.random() * (divHeight - circleDiameter);

        circle.style.position = "absolute"; 
        circle.style.left = circleX + "px";
        circle.style.top = circleY + "px";

        circle.textContent = serialNumber;
        circle.style.width = circleDiameter + "px";
        circle.style.height = circleDiameter + "px";
        circle.style.borderRadius = "50%";
        circle.style.display = "flex";
        circle.style.alignItems = "center";
        circle.style.justifyContent = "center";
        circle.style.backgroundColor = "red";
        circle.style.color = "white";
        circle.style.margin = "5px";

        circle.addEventListener("click", function () {
            circle.style.backgroundColor = "green";

            const rows = tableBody.getElementsByTagName("tr");
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                if (row.cells[0].textContent == serialNumber) {
                    tableBody.removeChild(row);
                    break;
                }
            }

            updateTotal();
        });

        div2.appendChild(circle);

        updateTotal();
    } else {
        alert("Please enter a value.");
    }
}

