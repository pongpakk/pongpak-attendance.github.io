function processData() {
    const raw = document.getElementById("rawInput").value.trim();
    if (!raw) {
        alert("กรุณาวางข้อความก่อนค่ะ");
        return;
    }

    const lines = raw.split("\n");
    let html = `
        <table id="resultTable">
            <tr>
                <th>ลำดับ</th>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>รหัสนักศึกษา</th>
                <th>ชื่อ-นามสกุล</th>
                <th>อีเมล</th>
                <th>หมายเหตุ</th>
            </tr>
    `;

    lines.forEach(line => {
        const parts = line.trim().split(/\s+/);

        let order = parts[0] || "";
        let date = `${parts[1]} ${parts[2]} ${parts[3]}`;
        let time = `${parts[4]} ${parts[5]}`;
        let studentId = parts[6] || "";
        let name = parts[7] || "";
        let email = parts[8] || "";
        let note = parts[9] || "-";

        html += `
            <tr>
                <td>${order}</td>
                <td>${date}</td>
                <td>${time}</td>
                <td>${studentId}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${note}</td>
            </tr>
        `;
    });

    html += `</table>`;
    document.getElementById("tableArea").innerHTML = html;
}

function clearData() {
    document.getElementById("rawInput").value = "";
    document.getElementById("tableArea").innerHTML = "";
}

function downloadPDF() {
    const table = document.getElementById("resultTable");
    if (!table) {
        alert("ยังไม่มีตารางให้ดาวน์โหลดค่ะ");
        return;
    }

    const opt = {
        margin: 10,
        filename: 'attendance.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(table).save();
}