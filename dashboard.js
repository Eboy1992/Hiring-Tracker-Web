// dashboard.js

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBBTivHPY1IFPm7BsdLAtVpfp55ymjhagU6hglr-nJahKm7KeeAtog9aF69FGJlNnYWdizbW25Tv8d/pub?output=csv";

function fetchJobData() {
  fetch(CSV_URL)
    .then(response => response.text())
    .then(csv => {
      const rows = csv.split("\n").map(row => row.split(","));
      const headers = rows[0];
      const data = rows.slice(1);

      // Target headers
      const posIndex = headers.indexOf("Pos Title");
      const plantillaIndex = headers.indexOf("Plantilla Item No.");
      const placeIndex = headers.indexOf("Place Assign");

      // Build headers
      const headerRow = document.getElementById("job-headers");
      headerRow.innerHTML = "";
      ["Position Title", "Plantilla No.", "Place of Assignment"].forEach(title => {
        const th = document.createElement("th");
        th.className = "px-4 py-2 border";
        th.textContent = title;
        headerRow.appendChild(th);
      });

      // Build table rows
      const jobRows = document.getElementById("job-rows");
      jobRows.innerHTML = "";
      data.forEach(row => {
        if (row.length > Math.max(posIndex, plantillaIndex, placeIndex)) {
          const tr = document.createElement("tr");
          [posIndex, plantillaIndex, placeIndex].forEach(idx => {
            const td = document.createElement("td");
            td.className = "px-4 py-2 border";
            td.textContent = row[idx] || "";
            tr.appendChild(td);
          });
          jobRows.appendChild(tr);
        }
      });
    })
    .catch(err => console.error("Failed to fetch CSV:", err));
}

// Load table after login
window.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("dashboard-section") && !document.getElementById("dashboard-section").classList.contains("hidden")) {
    fetchJobData();
  }
});
