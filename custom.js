document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('countryFilter');
  const table = document.querySelector('table');
  if (!input || !table) {
      console.error("Input field or table not found.");
      return;
  }

  const rows = table.querySelectorAll('tbody tr');
  if (rows.length === 0) {
      console.error("No rows found in the table.");
      return;
  }

  input.addEventListener('keyup', function () {
      const filter = input.value.toUpperCase();

      rows.forEach(row => {
          const countryCode = row.querySelector('td:nth-child(1)').textContent.toUpperCase();
          const countryISO = row.querySelector('td:nth-child(2)').textContent.toUpperCase();
          const countryName = row.querySelector('td:nth-child(3)').textContent.toUpperCase();

          if (
              countryCode.includes(filter) ||
              countryISO.includes(filter) ||
              countryName.includes(filter)
          ) {
              row.style.display = '';
          } else {
              row.style.display = 'none';
          }
      });
  });
});
