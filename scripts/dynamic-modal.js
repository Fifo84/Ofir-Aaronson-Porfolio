document.addEventListener("DOMContentLoaded", () => {
  const openModalButtons = document.querySelectorAll(".open-modal");
  const modal = document.getElementById("myModal");
  const closeModalButton = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTech = document.getElementById("modalTech");
  const modalSubTitle = document.getElementById("modalSubtitle");
  const modalImage = document.getElementById("modalImage");
  const modalDemo = document.getElementById("modalDemo");
  const modalCode = document.getElementById("modalCode");
  const modalDownload = document.getElementById("modalDownload");

  const projectsData = [
    {
      imageSrc: "./images/projects-images/memory-game-image.JPG",
      title: "Memory Game",
      subtitle: "Test Your Memory Skills with a Fun Card-Matching Game",
      description:
        "The Memory Game utilizes HTML, CSS, and JavaScript for its functionality and offers both 1 player and 2 players options. Players can compete for the most matches and record their completion time in this engaging memory-enhancing game.",

      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
      ],
      codeLink: "https://github.com/Fifo84/memory-game",
      demoLink: "https://fifo84.github.io/memory-game/",
      downloadLink: "/projects/Memory-Game.zip",
    },
    {
      imageSrc: "./images/projects-images/oop-gallery-image.JPG",
      title: "OOP Gallery",
      subtitle: "Interactive Image Gallery with Object-Oriented Programming",
      description:
        "This project utilizes object-oriented programming principles for a dynamic image slideshow. It features responsive navigation buttons, pauses on hover, and synchronizes multiple galleries on a single page for a seamless user experience.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
        {
          src: "./images/tech-icons/png-transparent-developer-development-object-oriented-programming-software-technology-icon-thumbnail.png",
          title: "Object Oriented Programming",
        },
      ],
      codeLink: "https://github.com/Fifo84/Oop--gallery",
      demoLink: "https://fifo84.github.io/Oop--gallery/",
      downloadLink: "/projects/Oop--Gallery.zip",
    },
    {
      imageSrc: "./images/projects-images/snake-game-image.JPG",
      title: "Snake Game",
      subtitle: "Classic Snake Fun with a Modern Twist",
      description:
        "The Snake Game is a classic browser-based game created using HTML, CSS, and JavaScript. Players control a snake, eating berries to increase their score and time while avoiding collisions. It offers difficulty levels, a sound toggle, timer, and score tracking, with the best score stored using local storage.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
        {
          src: "/images/tech-icons/local storage.png",
          title: "Local Storage",
        },
      ],
      codeLink: "https://github.com/Fifo84/snake",
      demoLink: "https://fifo84.github.io/snake/",
      downloadLink: "/projects/Snake.zip",
    },
    {
      imageSrc: "./images/projects-images/wordle-image.JPG",
      title: "Wordle Game",
      subtitle: "Guess the Hidden Country Word in 6 Attempts",
      description:
        "This project utilizes HTML, CSS, and JavaScript to create an engaging word-guessing game. Players can input their guesses using an on-screen keyboard, and the game provides feedback on correctness. It dynamically loads 5-letter country names from a REST API to keep the game engaging and educational.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
        { src: "./images/tech-icons/browser_718064.png", title: "API" },
      ],
      codeLink: "https://github.com/Fifo84/country-wordle",
      demoLink: "https://fifo84.github.io/country-wordle/",
      downloadLink: "/projects/Country-Wordle.zip",
    },
    {
      imageSrc: "./images/projects-images/to-do-list-image.JPG",
      title: "To do list",
      subtitle: "Organize Tasks with Ease",
      description:
        "This project is built using HTML, CSS, and TypeScript, and it features a responsive user interface. Users can add tasks, distinguish between regular and important tasks, edit task names, delete individual tasks, and clear the entire task list. The app also provides visual feedback for empty task names. Additionally, users can save all tasks to local storage and retrieve them on subsequent visits to the app.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        {
          src: "/images/tech-icons/icons8-typescript-48.png",
          title: "Type Script",
        },
        {
          src: "./images/tech-icons/local storage.png",
          title: "Local Storage",
        },
      ],
      codeLink: "https://github.com/Fifo84/to-do-list",
      demoLink: "https://fifo84.github.io/to-do-list/",
      downloadLink: "/projects/To-Do-List.zip",
    },

    {
      imageSrc: "./images/projects-images/calculator-image.JPG",
      title: "Calculator",
      subtitle: "Simple Calculator App",
      description:
        "This project is a web-based tool developed using HTML, CSS, and JavaScript. The calculator features a clean and intuitive user interface with a numerical keypad and operator buttons.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
      ],
      codeLink: "https://github.com/Fifo84/calculator",
      demoLink: "https://fifo84.github.io/calculator/",
      downloadLink: "/projects/Calculator.zip",
    },
    {
      imageSrc: "./images/projects-images/form-validation-image.JPG",
      title: "Form Validation",
      subtitle: "Streamlined Data Submission and Verification",
      description:
        " This project was built using HTML, CSS, and JavaScript, it provides real-time validation for fields such as first name, last name, identification type, and more. Users can seamlessly switch between different identification types, and the app employs custom JavaScript logic to validate ID numbers or passport numbers according to user selection.",
      technologies: [
        { src: "./images/tech-icons/html-5_5968267.png", title: "HTML" },
        { src: "./images/tech-icons/css-3_5968242.png", title: "CSS" },
        { src: "./images/tech-icons/js-icon.png", title: "java Script" },
      ],
      codeLink: "https://github.com/Fifo84/form-valdidation",
      demoLink: "https://fifo84.github.io/form-valdidation/",
      downloadLink: "/projects/Form-Valdidation.zip",
    },
  ];

  function openModal(projectIndex) {
    const projectData = projectsData[projectIndex];
    modalTitle.textContent = projectData.title;
    modalSubTitle.textContent = projectData.subtitle;
    modalDescription.textContent = projectData.description;
    modalImage.src = projectData.imageSrc;
    modalDemo.href = projectData.demoLink;
    modalCode.href = projectData.codeLink;
    modalDownload.href = projectData.downloadLink;

    modalTech.innerHTML = "";

    projectData.technologies.forEach((Technology) => {
      const imgElement = document.createElement("img");
      imgElement.src = Technology.src;
      imgElement.alt = "Technology Image";
      imgElement.title = Technology.title;
      modalTech.appendChild(imgElement);
    });

    modal.classList.add("fade-in");

    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.remove("fade-in");
    }, 300);
  }

  function closeModal() {
    modal.style.display = "none";
  }

  openModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      openModal(index);
    });
  });

  closeModalButton.addEventListener("click", closeModal);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close the modal when the user presses the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
});
