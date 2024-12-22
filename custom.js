document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('countryFilter');
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tbody tr');

  input.addEventListener('keyup', function() {
    const filter = input.value.toUpperCase();
    
    rows.forEach(row => {
      const countryCode = row.querySelector('td:first-child').textContent.toUpperCase();
      const countryISOCode = row.querySelector('td:nth-child(2)').textContent.toUpperCase();
      const countryName = row.querySelector('td:last-child').textContent.toUpperCase();
      
      if (countryCode.includes(filter) || countryISOCode.includes(filter) || countryName.includes(filter)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
