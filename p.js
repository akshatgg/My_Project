<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery List</title>
</head>
<body>
    <h1>Grocery List</h1>
    
    <input type="text" id="item" placeholder="Add an item">
    <button id="add">Add</button>
    
    <ul id="list">
        <!-- Grocery list items will appear here -->
    </ul>

    <script>
        // Get references to HTML elements
        const itemInput = document.getElementById("item");
        const addButton = document.getElementById("add");
        const list = document.getElementById("list");

        // Add event listener to the "Add" button
        addButton.addEventListener("click", addItem);

        // Function to add a new item to the list
        function addItem() {
            const newItemText = itemInput.value.trim(); // Get the text from the input field and remove leading/trailing spaces

            if (newItemText === "") {
                alert("Please enter a valid item.");
                return;
            }

            const listItem = document.createElement("li");
            listItem.textContent = newItemText;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                listItem.remove(); // Remove the item when the "Remove" button is clicked
            });

            listItem.appendChild(removeButton);
            list.appendChild(listItem);

            itemInput.value = ""; // Clear the input field
        }
    </script>
</body>
</html>
