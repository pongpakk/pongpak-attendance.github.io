// ฟังก์ชันแยกข้อมูล
function processData() {
    const raw = document.getElementById("rawText").value.trim();
    const lines = raw.split("\n");

    const tableBody = document.querySelector("#resultTable tbody");
    tableBody.innerHTML = "";

    lines.forEach(line => {
        const parts = line.trim().split(/\s+/);

        if (parts.length >= 7) {
            const no = parts[0];
            const day = parts[1];
            const month = parts[2];
            const year = parts[3];
            const time = parts[4] + " " + parts[5];
            const id = parts[6];

            let name = "";
            let email = "";
            let note = "-";

            const rest = parts.slice(7);
            rest.forEach(p => {
                if (p.includes("@")) {
                    email = p;
                } else if (p === "-")
