







// // Function to toggle password visibility
// function togglePasswordVisibility(passwordFieldId) {
//     const passwordField = document.getElementById(passwordFieldId);
//     const type = passwordField.type === 'password' ? 'text' : 'password';
//     passwordField.type = type;
// }

// // Function to toggle between login and signup forms
// function toggleForm() {
//     const loginForm = document.getElementById("loginForm");
//     const signupForm = document.getElementById("signupForm");

//     // Toggle visibility
//     if (loginForm.style.display === "none") {
//         loginForm.style.display = "block";
//         signupForm.style.display = "none";
//     } else {
//         loginForm.style.display = "none";
//         signupForm.style.display = "block";
//     }
// }

// // Form validation for login and signup
// document.getElementById("loginFormElement").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission for validation
//     const username = document.getElementById("loginUsername").value;
//     const password = document.getElementById("loginPassword").value;

//     if (username.trim() === "" || password.trim() === "") {
//         alert("Please fill in both username and password.");
//     } else {
//         // For now, just log success message (you can send request to the server)
//         alert("Login successful!");
//     }
// });

// document.getElementById("signupFormElement").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission for validation
//     const email = document.getElementById("signupEmail").value;
//     const fullName = document.getElementById("signupFullName").value;
//     const username = document.getElementById("signupUsername").value;
//     const password = document.getElementById("signupPassword").value;

//     // Validate email format using regex
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isValidEmail = emailPattern.test(email);

//     if (!isValidEmail) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Ensure full name and username are not empty
//     if (fullName.trim() === "" || username.trim() === "" || password.trim() === "") {
//         alert("All fields are required.");
//         return;
//     }

//     // Validate password strength (at least 6 characters)
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return;
//     }

//     // If all validations pass, show a success message
//     alert("Signup successfully!");
// });










// Simulating a simple users database in memory (for demo purposes)
const usersDB = [];

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

// Toggle between login and signup forms
function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Login form validation
document.getElementById("loginFormElement").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in both username and password.");
    } else {
        // Check if the username exists in the simulated "database"
        const user = usersDB.find(user => user.username === username && user.password === password);
        if (user) {
            alert("Login successful!");
        } else {
            alert("Account not found! Please sign up.");
            toggleForm(); // Show signup form
        }
    }
});

// Signup form validation
document.getElementById("signupFormElement").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    const email = document.getElementById("signupEmail").value;
    const fullName = document.getElementById("signupFullName").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate email format using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/;
    const isValidEmail = emailPattern.test(email);

    if (!isValidEmail) {
        alert("Please enter a valid email address.");
        return;
    }

    // Ensure full name, username, password, and confirm password are not empty
    if (fullName.trim() === "" || username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
        alert("All fields are required.");
        return;
    }

    // Validate password strength (at least 6 characters) and confirm password match
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save user to "database"
    usersDB.push({ email, fullName, username, password });
    alert("Signup successful!");
    toggleForm(); // Show login form after successful signup


      // Clear the signup form fields
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupFullName").value = "";
      document.getElementById("signupUsername").value = "";
      document.getElementById("signupPassword").value = "";
      document.getElementById("confirmPassword").value = "";
  
      alert("Signup successful!");
      toggleForm(); // Show login form after successful signup
});
