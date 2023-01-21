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
        id: 1,
        title: "Tribute Page",
        img: "./img/tribute-thumbnail.jpg",
        githubLink: "https://github.com/tanpreetjolly/fcc-project-tributePage",
        live: "https://tributepage-tanpreet.netlify.app/",
        desc: "A tribute page for the freeCodeCamp RWD Certification. Created using HTML5 and CSS3.",
    },
    {
        id: 2,
        title: "Survey Form",
        img: "./img/surveyform-thumbnail.jpg",
        githubLink: "https://github.com/tanpreetjolly/fcc-project-surveyForm",
        live: "https://surveyform-tanpreet.netlify.app/",
        desc: "A replica survey form of the freeCodeCamp survey  designed using HTML5 and CSS3."
    },
    {
        id: 3,
        title: "Landing Page",
        img: "./img/landingpage-thumbnail.jpg",
        githubLink: "https://github.com/tanpreetjolly/fcc-project-landingPage",
        live: "https://landingpage-tanpreet.netlify.app/",
        desc: "A simple static landing page for a business that deals in handcrafted objects."
    },
    {
        id: 4,
        title: "Portfolio Website",
        img: "./img/portfolio-thumbnail.jpg",
        githubLink: "https://github.com/tanpreetjolly/portfolio/tree/master ",
        live: "https://portfolio-tanpreet.netlify.app/",
        desc: "A personal portfolio created using HTML5, CSS3 and JavaScript showcasing my work."
    },
]

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
              <a href="${item.githubLink}" target="_blank"><img src="img/footer-github.png" alt="github-link""></a>
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