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
                text: "LinkedIn"
            },
            {
                id: "github",
                icon: "fa-brands fa-square-github",
                link: "https://github.com/ChadHarper811",
                text: "GitHub"
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
    {
        experience: [
            {
                title: "Assistant Team Manager",
                company: "Greentec Auto",
                dates: "August 2023 - Present",
                bullets: ["Utilized strong problem-solving skills to recognize and solve the underlying issues the customer was experiencing with our company’s product.", "Keep warehouse storage areas, build team areas, and individual employee work areas organized to optimize productivity, ease of use, and to ensure team safety.", "Train new hires and employees on best work practices for new and current projects and time management skills.", "Oversee build teams' daily job tasks, productivity focus, final product quality assurance checks and review paperwork for missing information, inaccuracies & overall quality."]
            },
            {
                title: "Web Development Course",
                company: "LaunchCode",
                company_site: "https://www.launchcode.org/",
                dates: "May 2023 - January 2024",
                bullets: ["Course Coverage:","Apply foundational coding structures to solve problems using JavaScript and Java.", "Develop full stack web applications that integrate databases to manage user data and a front end in React to display that data.", "Use common developer tools and best practices to write professional-quality code.", "Build software projects from the ground up using in-demand skills and technologies.", "Communicate and demonstrate their professional and technical skills"]
            },
            {
                title: "BookMaster App",
                company: "LaunchCode - Capstone Project",
                company_site: "https://www.launchcode.org/",
                dates: "December 2023 - January 2024",
                bullets: ["Developed a library management app with a team of developers.", "Implemented check-in and check-out features with a user display." ,"Created book review feature with update and delete functionality in the user dashboard.", "Applied React routing for page routing and styled the front end of the application, including the navigation bar and drop down menus with a quick view of the user's currently checked out books.", "Full Project Tech stack: JavaScript, React, Java, MySQL, Bootstrap, Spring Boot, Google Books API"]
            },
            {
                title: "Team Lead: Food/Drink Runners",
                company: "Top Golf",
                dates: "August 2022 - August 2023",
                bullets: ["Trained over 15 new hires through job shadowing job duties and assignments.", "Worked with the service manager to rewrite the departmental closing duties checklist to clarify and streamline team operations, saving 45 minutes of employee time each shift.", "Directed drink/food runners in completing job responsibilities outside of typical duties including deep cleaning and organization of drink and food areas.", "Making sure all food/drink items are safely stored, in correct temperature and labels up to date"],
            },
            {
                title: "Trainer/Cook/Crew Member",
                company: "Chipotle",
                dates: "August 2022 - August 2023",
                bullets: ["Trained new employees in daily job duties and store functions.", "Updated training with store policies and maintained other employees updated training.","Food preparation, handling and safety.", "Cooking all food for the line and online services areas.", "Maintaining clean and sanitary working conditions while also keeping kitchen, storage, storefront and back of house areas organized.", "Assisting customers in preparing their food and any side items.", "Keeping front line restocked at all times and in range of food safety temperatures.", "Customer service with quick and efficient check out experience."],
            },
            {
                title: "Installation Technician",
                company: "ITC Service Group LLC for Google Fiber",
                dates: "February 2016 to December 2018",
                bullets: ["Keep stock of truck inventory, tools, consumable supplies, and customer documents/pamphlets.", "Maintain and cleaned truck, safety equipment, and uniforms.", "Document detailed work notes, time logs, and paperwork; Including monthly inventory and inspection sheets for company vehicle, tools, and safety equipment.", "Remain up to date with training, pricing, new products, features, in-house information, and future company plans while following company information security protocols", "Install new fiber optic, CAT5e, coaxial, and phone wiring with minimal waste", "Work directly with customers to position and set up equipment for optimal use and customer satisfaction while keeping wiring proficiently concealed.", "Perform job duties while also following local ordinances, building codes, and safety laws."],
            },
            
        ]
    }
    
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
            ${link ? `<a href="${link}" > <i id="${id}-icon" class="${icon}"></i> ${text} </a>` : `<i id="${id}-icon" class="${icon}"></i> ${text}`}
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

