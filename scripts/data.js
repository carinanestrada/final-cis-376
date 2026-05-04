let buildings = [];

async function loadBuildings() {
  try {
    const response = await fetch('../data/buildings.json');
    buildings = await response.json();
  } catch (error) {
    console.error('Error loading buildings:', error);
  }
}

export { buildings, loadBuildings };