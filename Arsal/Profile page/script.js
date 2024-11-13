
// Placeholder functions for each edit action
function editPassword() {
    alert("Edit Password functionality goes here.");
}

function editUsername() {
    alert("Edit Username functionality goes here.");
}

function editBio() {
    alert("Edit Bio functionality goes here.");
}

// Existing function for changing profile image
function changeProfileImage() {
    document.getElementById('profileImageInput').click();     //trigger input file dialog
}

function updateProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.stats__img-holder').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}


function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("active");
  }
  function closeDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.remove("active");
  }  

 // Function to show the logout alert
function logout() {
    alert("You have been logged out."); 
    closeDropdown(); 
  }

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        const dropdownMenu = document.getElementById("dropdownMenu");
        const menuButton = document.querySelector(".top-bar__menu-btn");

        // Check if the clicked target is outside the dropdown menu and the settings button
        if (
          dropdownMenu.classList.contains("active") &&
          !dropdownMenu.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          closeDropdown();
        }
      });

  
    
    //   function changeSection() {
    //     const section = document.getElementById("contentSection");
    //     console.log("Hello i am clicked");
    //     // Toggle display between 'none' and 'block'
    //     if (section.style.display === "none") {
    //         section.style.display = "block";
    //     } else {
    //         section.style.display = "none";
    //     }
    // }


    function showSection(section) {
      // Get sections
      const postsSection = document.getElementById("postsSection");
      const reelsSection = document.getElementById("reelsSection");
    
      // Get buttons
      const postsTab = document.getElementById("postsTab");
      const reelsTab = document.getElementById("reelsTab");
    
      if (section === 'posts') {
        postsSection.style.display = "grid";
        reelsSection.style.display = "none";
    
        // Activate posts button
        postsTab.classList.add("tabs__btn--active");
        reelsTab.classList.remove("tabs__btn--active");
      } else if (section === 'reels') {
        postsSection.style.display = "none";
        reelsSection.style.display = "grid";
    
        // Activate reels button
        reelsTab.classList.add("tabs__btn--active");
        postsTab.classList.remove("tabs__btn--active");
      }
    }
    









































































































// // Change profile image logic
// function changeProfileImage() {
//     document.getElementById('profileImageInput').click();
//   }
  
//   // Update profile image when file is selected
//   function updateProfileImage(event) {
//     const imageUrl = URL.createObjectURL(event.target.files[0]);
//     document.querySelector('.stats__img-holder').style.backgroundImage = `url(${imageUrl})`;
//   }
  
//   // Toggle the Edit Profile options
//   function toggleEditProfile() {
//     const editProfileOptions = document.getElementById('editProfileOptions');
//     editProfileOptions.style.display = editProfileOptions.style.display === 'none' ? 'block' : 'none';
//   }
  
//   // Open settings (can be extended for functionality)
//   function openSettings() {
//     alert('Settings clicked!');
//   }
  
//   // Placeholder functions for editing profile fields
//   function editPassword() {
//     alert('Edit Password clicked!');
//   }
  
//   function editUsername() {
//     alert('Edit Username clicked!');
//   }
  
//   function editBio() {
//     alert('Edit Bio clicked!');
//   }
  