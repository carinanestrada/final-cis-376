import { buildings, loadBuildings } from './data.js';

document.addEventListener('DOMContentLoaded', async function() {
  await loadBuildings();
  const buildingsContainer = document.getElementById('buildingsContainer');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const sessionBtn = document.getElementById('sessionBtn');

  function renderBuildings(list) {
    buildingsContainer.innerHTML = '';
    list.forEach(building => {
      const col = document.createElement('div');
      col.className = 'col mb-4';
      col.innerHTML = `
        <div class="card h-100">
          <img src="images/${building.image}" class="card-img-top imges" alt="${building.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${building.name}</h5>
          </div>
        </div>
      `;
      buildingsContainer.appendChild(col);
    });
  }

  function filterAndSort() {
    let filtered = buildings.filter(b => b.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    if (sortSelect.value === 'desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    renderBuildings(filtered);
  }

  searchInput.addEventListener('input', filterAndSort);
  sortSelect.addEventListener('change', filterAndSort);

  sessionBtn.addEventListener('click', function() {
    let data = 'Session Data:\n';
    for (let key in sessionStorage) {
      data += `${key}: ${sessionStorage[key]}\n`;
    }
    alert(data || 'No session data');
  });

  renderBuildings(buildings);
});