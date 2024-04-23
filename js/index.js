function searchImages(event) {

     fetch('https://api.unsplash.com/search/photos?client_id=YOUR_ACCESS_KEY&query=1xhhNRg7X9ARvGADoeFTR5jcqGqNaLws_OQN7GbwePI')
     .then(response => {
          return response.json();
        })
        .then(data => {
          const dataContainer = document.getElementById('data');
      
          dataContainer.innerHTML = '';
          data.forEach(item => {
            const newItem = document.createElement('p');
            newItem.textContent = item.title; 
            dataContainer.appendChild(newItem);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
     }
     