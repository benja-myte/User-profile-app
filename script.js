// script.js

document.addEventListener('DOMContentLoaded', () => {
    const userProfilesContainer = document.getElementById('user-profiles');

    // Fetch user data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Generate user profiles
            users.forEach(user => {
                const userProfile = document.createElement('div');
                userProfile.classList.add('user-profile');
                
                // Creating a placeholder image for the user avatar
                const avatarUrl = `https://i.pravatar.cc/150?img=${user.id}`;

                userProfile.innerHTML = `
                    <img src="${avatarUrl}" alt="Avatar of ${user.name}">
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                userProfilesContainer.appendChild(userProfile);
            });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            userProfilesContainer.innerHTML = '<p>Failed to load user profiles.</p>';
        });
});
