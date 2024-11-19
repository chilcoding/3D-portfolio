

//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};



//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//back profile button when click
const backProfileBtn = document.querySelector(".back-profile");
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});





// Projects

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentProjectIndex = 0;

  // Function to show a specific project by index
  function showProject(index) {
      projects.forEach((project, i) => {
          project.classList.remove("active");
          project.style.animation = 'none'; // Reset animation
          if (i === index) {
              project.classList.add("active");
              project.style.animation = ''; // Reapply animation
          }
      });

      // Show or hide buttons based on the current index
      if (index === 0) {
          prevButton.style.display = "none"; // Hide prev button on first project
          nextButton.style.display = "inline-block"; // Show next button
      } else if (index === projects.length - 1) {
          nextButton.style.display = "none"; // Hide next button on last project
          prevButton.style.display = "inline-block"; // Show prev button
      } else {
          prevButton.style.display = "inline-block"; // Show prev button
          nextButton.style.display = "inline-block"; // Show next button
      }
  }

  // Initially show the first project and handle buttons
  showProject(currentProjectIndex);

  // Next button functionality
  nextButton.addEventListener("click", function () {
      if (currentProjectIndex < projects.length - 1) {
          currentProjectIndex++;
          showProject(currentProjectIndex);
      }
  });

  // Previous button functionality
  prevButton.addEventListener("click", function () {
      if (currentProjectIndex > 0) {
          currentProjectIndex--;
          showProject(currentProjectIndex);
      }
  });
});






emailjs.init("uBlTo8POLFZEWinE9"); 

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const userName = document.getElementById('userName').value;
  const userEmail = document.getElementById('userEmail').value;
  const userMessage = document.getElementById('userMessage').value;

  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    message: userMessage,
  };

  emailjs.send('service_8nqt64r', 'template_8l6b9ks', templateParams)
    .then(function(response) {
      console.log('Success:', response);
      document.getElementById('formMessage').innerText = 'Your message has been sent successfully!';
      document.getElementById('contactForm').reset(); 
    }, function(error) {
      console.error('Error details:', error); 
      document.getElementById('formMessage').innerText = `Failed to send the message: ${error.text}`;
    });
});



