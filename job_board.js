function searchJobs() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const jobElements = document.querySelectorAll('.job');
    const searchResults = document.getElementById('searchResults');
    
    searchResults.innerHTML = '';
    jobElements.forEach(job => {
      const title = job.querySelector('h3').textContent.toLowerCase();
      const location = job.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(input) || location.includes(input)) {
        searchResults.appendChild(job.cloneNode(true)); 
      }
    });
  
    if (searchResults.innerHTML === '') {
      searchResults.innerHTML = '<p>No jobs found.</p>';
    }
  }
  