const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
    menuToggle();
    menuIcon.classList.toggle("scale-105");
    list.addEventListener("click", () => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("hidden");
    })
})

function menuToggle(params) {
        dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("flex");
}



//Projects Lists

const projectList = [
  {
    id: 5,
    title: "Medware - Healthcare Companion",
    img: "build/img/medware.png",
    githubLink: "https://github.com/tanpreetjolly/Medware",
    live: "https://medware.live",
    desc: "A Healthcare Website consisting of a Disease Predictor made in React, Django, Tailwind and Machine Learning.",
  },
  {
    id: 8,
    title: "Swift Chat App",
    img: "build/img/chatapp.png",
    githubLink: "https://github.com/tanpreetjolly/swift-chat-app",
    live: "https://swifty-chatty-appy.onrender.com/",
    desc: "A chatapp built with WebSocket API and ws lib. MERN Stack with TailwindCSS. Feat inlcudes realtime msg exchange and user authentication with email verification.",
  },
  {
    id: 7,
    title: "Ebazar Online Store",
    img: "build/img/ebazar.png",
    githubLink: "https://github.com/tanpreetjolly/eBazaar",
    live: "https://ebazardeploy.onrender.com",
    desc: "Simple E-commerce website made in React, Redux, Firebase and Stripe for payment gateway.",
  },
  {
    id: 6,
    title: "Grocery App",
    img: "build/img/grocery.png",
    githubLink: "https://github.com/tanpreetjolly/groceryListApp",
    live: "https://groceryapp-tanpreet.netlify.app/",
    desc: "A grocery list app build in React to add or remove tems for grocery shopping",
  },
  {
    id: 1,
    title: "Tribute Page",
    img: "build/img/tribute-thumbnail.jpg",
    githubLink: "https://github.com/tanpreetjolly/fcc-project-tributePage",
    live: "https://tributepage-tanpreet.netlify.app/",
    desc: "A tribute page for the freeCodeCamp RWD Certification. Created using HTML5 and CSS3.",
  },
  {
    id: 2,
    title: "Survey Form",
    img: "build/img/surveyform-thumbnail.jpg",
    githubLink: "https://github.com/tanpreetjolly/fcc-project-surveyForm",
    live: "https://surveyform-tanpreet.netlify.app/",
    desc: "A replica survey form of the freeCodeCamp survey  designed using HTML5 and CSS3.",
  },
  {
    id: 3,
    title: "Landing Page",
    img: "build/img/landingpage-thumbnail.jpg",
    githubLink: "https://github.com/tanpreetjolly/fcc-project-landingPage",
    live: "https://landingpage-tanpreet.netlify.app/",
    desc: "A simple static landing page for a business that deals in handcrafted objects.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: "build/img/portfolio-thumbnail.jpg",
    githubLink: "https://github.com/tanpreetjolly/portfolio/tree/master ",
    live: "https://portfolio-tanpreet.netlify.app/",
    desc: "A personal portfolio created using HTML5, CSS3 and JavaScript showcasing my work.",
  },
];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card" class="text-gray-300">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">View Project</p></a>
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
            </div>
            <p class="m-1 w-4/5 text-xs lg:text-base">${item.desc}</p>
        </div>`

    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;

}


window.addEventListener("DOMContentLoaded", function(){
    displayAllProjects(projectList);
})