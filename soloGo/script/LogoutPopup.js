function showLogoutModal() {
  const modal = document.getElementById('logoutModal');
  modal.style.display = 'block';
}

// Function to hide the logout modal
function hideLogoutModal() {
  const modal = document.getElementById('logoutModal');
  modal.style.display = 'none';
}

// Function to handle the logout action
function handleLogout() {
  // Implement logout functionality here, such as sending a logout request to the server.
  // For this example, we'll simply redirect to the login.html page.
  window.location.href = 'login.html';
}

// Attach click event listeners to the "Logout" link and buttons
document.getElementById('logoutLink').addEventListener('click', showLogoutModal);
document.getElementById('logoutLinkimg').addEventListener('click', showLogoutModal);
document.getElementById('cancelButton').addEventListener('click', hideLogoutModal);
document.getElementById('logoutButton').addEventListener('click', handleLogout);