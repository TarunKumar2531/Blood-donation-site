// Function for the Home Page button
function displayAlert() {
    alert("Thank you for your interest! Click on 'Register' to sign up as a Donor or Receiver.");
}

// Function for the Search Page (Search.html)
function handleSearch() {
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;
    const resultsDiv = document.getElementById('searchResults');

    // Basic simulation of search results
    let message = `Searching for **${bloodType}** blood in **${location}**...`;
    
    // Simple conditional logic based on the blood type
    if (bloodType === 'O-') {
        message += `<p style="color: red; font-weight: bold;">CRITICAL NEED! Universal Donor blood is always in high demand. We found 3 potential donors nearby!</p>`;
    } else if (bloodType === 'AB+') {
        message += `<p style="color: green;">Good news! We found 5 requests and 2 registered donors for this type. Please contact the nearest facility.</p>`;
    } else {
        message += `<p>Search complete. Please register or call our helpline for immediate assistance.</p>`;
    }

    resultsDiv.innerHTML = message;
}

// Function for the Registration Page (Register.html)
function handleRegistration(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault(); 
    
    const name = document.getElementById('regName').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    const phone = document.getElementById('regPhone').value;
    
    // Basic form validation for phone number length
    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    
    alert(`Thank you, ${name}! You have successfully registered as a ${role}. We will be in touch!`);
    
    // Clear the form after success
    document.getElementById('registerForm').reset();
    return true;
}