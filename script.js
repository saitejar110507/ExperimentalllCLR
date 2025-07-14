const apiEndpoint = 'https://collage-resources.onrender.com/api/files';
const viewEndpoint = 'https://collage-resources.onrender.com/view';
let allFiles = [], filteredFiles = [], visibleCount = 10;

async function fetchFiles() {
    document.getElementById('loader').style.display = 'block';
    try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error('Network response not OK');
        const files = await response.json();
        allFiles = files;
        filteredFiles = [...allFiles];
        applySort();
        renderFiles(filteredFiles.slice(0, visibleCount));
    } catch (error) {
        document.getElementById('message').textContent = `Failed to load files: ${error.message}`;
    } finally {
        document.getElementById('loader').style.display = 'none';
    }
}
