document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tableForm').addEventListener('submit', e => {
        e.preventDefault();
        const columns = document.getElementById('columns').value;
        const rows = document.getElementById('rows').value;

        if (columns && rows) {
            let tableHTML = '';
            for (let i = 0; i < rows; i++) {
                tableHTML += '<tr>' + 'KITM'.repeat(columns).replace(/KITM/g, '<td>KITM</td>') + '</tr>';
            }
            tableContainer.innerHTML = '<table>' + tableHTML + '</table>';
        }
    });
});