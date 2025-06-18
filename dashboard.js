// Dummy data - will replace with real Google Sheet data later
const applicants = [
  { name: "Juan Dela Cruz", position: "Electrician", score: 92, status: "passed" },
  { name: "Maria Santos", position: "Technician", score: 75, status: "shortlisted" },
  { name: "Jose Rizal", position: "Engineer", score: 48, status: "failed" },
  { name: "Liza Villanueva", position: "Electrician", score: 95, status: "passed" }
];

function displayApplicants(filter = "all") {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  applicants.forEach(app => {
    if (filter === "all" || app.status === filter) {
      const row = `<tr>
        <td>${app.name}</td>
        <td>${app.position}</td>
        <td>${app.score}</td>
        <td>${app.status}</td>
      </tr>`;
      tbody.innerHTML += row;
    }
  });
}

function filterApplicants(status) {
  displayApplicants(status);
}

// Default display
window.onload = () => {
  displayApplicants("all");
};
