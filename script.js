document.addEventListener("DOMContentLoaded", function() {
    // Get the create card button
    var createCardButton = document.getElementById("create-card-button");
  
    // Add click event listener
    createCardButton.addEventListener("click", function() {
      // Get form inputs
      var name = document.getElementById('name').value;
      var description = document.getElementById('description').value;
      var imageFile = document.getElementById('image').files[0];
  
      // Create new card element
      var card = document.createElement('div');
      card.classList.add('card');
  
      // Create image element
      var image = document.createElement('img');
      image.classList.add('profile-pic');
      image.alt = 'Profile Picture';
      var reader = new FileReader();
      reader.onload = function(event) {
        image.src = event.target.result;
      }
      reader.readAsDataURL(imageFile);
  
      // Create info element
      var info = document.createElement('div');
      info.classList.add('info');
      var nameElement = document.createElement('div');
      nameElement.classList.add('name');
      nameElement.textContent = name;
      var descriptionElement = document.createElement('div');
      descriptionElement.classList.add('description');
      descriptionElement.textContent = description;
  
      // Append elements
      info.appendChild(nameElement);
      info.appendChild(descriptionElement);
      card.appendChild(image);
      card.appendChild(info);
  
      // Add card to container
      var cardsContainer = document.getElementById('cards-container');
      cardsContainer.appendChild(card);

       // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('image').value = '';

      // Adjust form container position
      var formContainer = document.querySelector('.form-container');
      formContainer.style.top = cardsContainer.clientHeight + 40 + 'px'; // Adjust as needed
    });
  });