document.addEventListener("DOMContentLoaded", () => {
    // Sample Data
    let resources = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", type: "Book", available: true },
        { title: "Science Journal", author: "Various", type: "Journal", available: false }
    ];

    let borrowings = [
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" },
        { title: "The Great Gatsby", user: "John Doe", dueDate: "2025-02-10" }

    ];

    // Search Functionality
    document.getElementById("searchInput")?.addEventListener("keyup", function() {
        let searchValue = this.value.toLowerCase();
        let table = document.getElementById("catalogTable");
        table.innerHTML = "";

        resources.forEach(resource => {
            if (resource.title.toLowerCase().includes(searchValue) || resource.author.toLowerCase().includes(searchValue)) {
                let row = `<tr>
                    <td>${resource.title}</td>
                    <td>${resource.author}</td>
                    <td>${resource.type}</td>
                    <td>${resource.available ? "Available" : "Not Available"}</td>
                </tr>`;
                table.innerHTML += row;
            }
        });
    });

    // Resource Management
    document.getElementById("resourceForm")?.addEventListener("submit", function(event) {
        event.preventDefault();

        let newResource = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            type: document.getElementById("type").value,
            available: true
        };

        resources.push(newResource);
        document.getElementById("resourceForm").reset();
        alert("Resource Added!");
    });

    // Display Borrowing Data
    let borrowTable = document.getElementById("borrowingTable");
    if (borrowTable) {
        borrowings.forEach(borrow => {
            let row = `<tr>
                <td>${borrow.title}</td>
                <td>${borrow.user}</td>
                <td>${borrow.dueDate}</td>
                <td><button class="btn btn-danger">Return</button></td>
            </tr>`;
            borrowTable.innerHTML += row;
        });
    }
});