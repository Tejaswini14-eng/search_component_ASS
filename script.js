// Sample data of pets with their details
const pets = [
    { name: 'Dog', price: 8000, breed: 'Labrador Retriever' },
    { name: 'Cat', price: 6000, breed: 'Persian' },
    { name: 'Fish', price: 3000, breed: 'Goldfish' },
    { name: 'Bird', price: 7000, breed: 'Parrot' },
    { name: 'Hamster', price: 4000, breed: 'Syrian' },
    { name: 'Snake', price: 9000, breed: 'Python' }
];

// Function to filter pets with price > specified value and display them
function filterPets(minPrice) {
    const petListContainer = document.getElementById('petList');
    petListContainer.innerHTML = ''; // Clear previous results

    // Filter pets with price > specified value
    const filteredPets = pets.filter(pet => pet.price > minPrice);

    // Display each filtered pet
    if (filteredPets.length > 0) {
        filteredPets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.classList.add('card', 'mb-3');
            petCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text"><strong>Breed:</strong> ${pet.breed}</p>
                    <p class="card-text"><strong>Price:</strong> ${pet.price} RS</p>
                </div>
            `;
            petListContainer.appendChild(petCard);
        });
    } else {
        petListContainer.innerHTML = '<p>No pets found with price > 5000 RS.</p>';
    }
}

// Event listener for form submission
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const minPrice = document.getElementById('priceFilter').value.trim();

    if (!minPrice || isNaN(minPrice)) {
        alert('Please enter a valid minimum price.');
        return;
    }

    filterPets(parseInt(minPrice));
});

// Initial display of pets on page load
filterPets(5000); // Show pets with price > 5000 RS by default
