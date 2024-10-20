const resumeInfo = [
    {
        my_info: [
            {
                id: "title",
                icon: "fa-solid fa-briefcase",
                text: "Assistant Team Manager"
            },
            {
                id: "home",
                icon: "fa-solid fa-house",
                text: "Olathe, KS"
            },
            {
                id: "email",
                icon: "fa-solid fa-envelope",
                link: "mailto: chadharper811@gmail.com",
                text: "Email"
            },
            {
                id: "phone",
                icon: "fa-solid fa-mobile-screen",
                link: "tel:913-961-8439",
                text: "Phone"
            },
            {
                id: "linkedin",
                icon: "fa-brands fa-linkedin",
                link: "https://www.linkedin.com/in/chadharper811/",
                text: "LinkedIn: ChadHarper811"
            },
            {
                id: "github",
                icon: "fa-brands fa-square-github",
                link: "https://github.com/ChadHarper811",
                text: "GitHub: ChadHarper811"
            },
            {
                id: "portfolio",
                icon: "fa-regular fa-folder-open",
                link: "https://chadharper811.github.io/Personal-Portfolio/",
                text: "Porfolio site"
            }
        ]
    },
    {
        coding: {
            languages: ["Java", "JavaScript", "HTML", "CSS"],
            frameworks: ["Springboot", "React"],
            tools: ["MySQL Workbench"]
        }
    },
    {
        summary: "Entry-level web developer with 20+ years customer service experience in retail, service and maintenance fields. Leverages strong communication and problem solving skills to achieve success in team environments and individual assignments. Learns complex tasks quickly and aims to improve efficiency. Knowledgeable in JavaScript, Java, HTML and CSS. Seeking to learn and become part of a team to work toward a new career in technology."
    },
    {
        education: [
            {
                association: "LaunchCode",
                degree: "Web Development",
                year: "2024"
            },
            {
                association: "freeCodeCamp",
                degree: "Responsive Web Design Certification",
                year: "2024"
            },
            {
                association: "freeCodeCamp",
                degree: "JavaScript Algorithms and Data Structures Certification",
                year: "2024"
            },
            {
                association: "Johnson County Community College",
                degree: "Associate of Science General Sciences",
                year: "2021"
            },
            {
                association: "Johnson County Community College",
                degree: "Associate of Applied Science HVAC Residential Service Technician",
                year: "2013"
            },
        ]
    },
    
]

const myInfoCard = document.getElementById("my_info");
const summary = document.getElementById("summary");
const educationCard = document.getElementById("education");
const experience = document.getElementById("experience");
const allLinkBrackets = document.getElementsByClassName("hover");

summary.innerHTML = `
    <h2>Summary</h2>
    <p>${resumeInfo[2].summary}</p>
    `

resumeInfo[0].my_info.forEach(
    ({id, icon, link, text}) => {
        myInfoCard.innerHTML += `
        <div class="info" id="${id}"> 
            ${link ? `<a href="${link}" class="contact-details"> <span class="hover">&lt;</span><i class="${icon}"></i>${text}<span class="hover">&#47;&gt;</span> </a>` : `<i class="${icon}"></i> ${text}`}
        </div>
        `
    }
)



// data.filter(el => el.day).forEach(
//     ({day, imgData}) => {
//         gallery.innerHTML += `
//             <div class="gallery-day-container" id="${day}">
//             ${imgData.map((e) => `
//                 <div class="img-container">
//                     <img class="travel-images" src="${e.src}" alt="${e.caption}" /><br>
//                     <span class="bold"><span class="hover">&lt;</span> Day ${day} ${imgData.length > 1 ? `#${e.image}` : ""}<span class="hover">&#47;&gt;</span></span><br>
//                     ${e.caption}
//                 </div>`
//             ).join("")}
//             </div>` 
// });

