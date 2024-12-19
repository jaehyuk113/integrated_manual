document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('country-search');
    const table = document.getElementById('country-table');
    if (input && table) {
      input.addEventListener('keyup', function() {
        const filter = this.value.toLowerCase();
        const rows = table.getElementsByTagName('tr');
        for (let i = 1; i < rows.length; i++) {
          const td = rows[i].getElementsByTagName('td')[0];
          if (td) {
            const txtValue = td.textContent || td.innerText;
            rows[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? "" : "none";
          }
        }
      });
    }
  });
  