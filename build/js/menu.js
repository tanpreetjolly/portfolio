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
        githubLink: "",
        live: "",
        desc: "A tribute page for the freeCodeCamp RWD Certification. Created using HTML5 and CSS3.",
    },
    {
        id: 2,
        title: "Survey Form",
        img: "./img/surveyform-thumbnail.jpg",
        githubLink: "",
        live: "",
        desc: "A replica survey form of the freeCodeCamp survey from designed using HTML5 and CSS3."
    },
    {
        id: 3,
        title: "Landing Page",
        img: "./img/landingpage-thumbnail.jpg",
        githubLink: "",
        live: "",
        desc: "A simple static landing page for a business that deals in handcrafted objects."
    },
    {
        id: 4,
        title: "Portfolio Website",
        img: "./img/portfolio-thumbnail.jpg",
        githubLink: "",
        live: "",
        desc: "A personal portfolio created using HTML5, CSS3 and JavaScript showcasing my work."
    },
]

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card">
            <img src= ${item.img} alt=${item.title}>
            <h2 class="text-2xl  font-bold mx-3 pt-1">${item.title}</h2>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live}><p class="text-lg">View Project</p></a>
              <a href="${item.githubLink}"><img src="img/footer-github.png" alt=""></a>
            </div>
            <p class="m-1 w-4/5">${item.desc}</p>
        </div>`

    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;

}


window.addEventListener("DOMContentLoaded", function(){
    displayAllProjects(projectList);
})