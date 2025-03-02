const data = [
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
    },
    {
        summary: "Entry-level web developer with 20+ years of customer service experience in retail, service, and maintenance fields. Strong communication and problem-solving skills lead to success in team environments and individual assignments. Knowledgeable in JavaScript and Java. Seeking to learn and become part of a team to work toward a new career in technology."
    },
    {
        association: "LaunchCode",
        degree: "Web Development Certification",
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
        year: "2025"
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
    {
        coding: [
            {
                Languages: ["JavaScript", "Java", "HTML", "CSS"]
            },
            {
                Frameworks: ["Springboot", "React", "Bootstrap"]
            },
            {
                Tools: ["MySQL Workbench"]
            }  
        ]
        
    },
    {
        job: 1,
        title: "Assistant Team Manager",
        company: "Greentec Auto",
        dates: "August 2023 - Present",
        bullets: ["Utilized strong problem-solving skills to recognize and solve the underlying issues the customer was experiencing with our company’s product.", "Keep warehouse storage areas, build team areas, and individual employee work areas organized to optimize productivity, ease of use, and to ensure team safety.", "Train new hires and employees on best work practices for new and current projects and time management skills.", "Oversee build teams' daily job tasks, productivity focus, final product quality assurance checks and review paperwork for missing information, inaccuracies & overall quality."]
    },
    {
        job: 2,
        title: "BookMaster App",
        company: "LaunchCode - Capstone Project",
        company_site: "https://www.launchcode.org/",
        dates: "December 2023 - January 2024",
        bullets: ["Developed a library management app with a team of developers.", "Implemented check-in and check-out features with a user display." ,"Created book review feature with update and delete functionality in the user dashboard.", "Applied React routing for page routing and styled the front end of the application, including the navigation bar and drop down menus with a quick view of the user's currently checked out books.", "Full Project Tech stack: JavaScript, React, Java, MySQL, Bootstrap, Spring Boot, Google Books API"]
    },
    {
        job: 3,
        title: "Web Development Online Course",
        company: "LaunchCode",
        company_site: "https://www.launchcode.org/",
        dates: "May 2023 - January 2024",
        bullets: ["Course Coverage:","Apply foundational coding structures to solve problems using JavaScript and Java.", "Develop full stack web applications that integrate databases to manage user data and a front end in React to display that data.", "Use common developer tools and best practices to write professional-quality code.", "Build software projects from the ground up using in-demand skills and technologies.", "Communicate and demonstrate their professional and technical skills"]
    },
    {
        job: 4,
        title: "Team Lead: Food/Drink Runners",
        company: "Top Golf",
        dates: "August 2022 - August 2023",
        bullets: ["Trained over 15 new hires through job shadowing job duties and assignments.", "Worked with the service manager to rewrite the departmental closing duties checklist to clarify and streamline team operations, saving 45 minutes of employee time each shift.", "Directed drink/food runners in completing job responsibilities outside of typical duties including deep cleaning and organization of drink and food areas.", "Making sure all food/drink items are safely stored, in correct temperature and labels up to date"],
    },
    {
        job: 5,
        title: "Trainer/Cook/Crew Member",
        company: "Chipotle",
        dates: "May 2019 - August 2022",
        bullets: ["Trained new employees in daily job duties and store functions.", "Updated training with store policies and maintained other employees updated training.","Food preparation, handling and safety.", "Cooking all food for the line and online services areas.", "Maintaining clean and sanitary working conditions while also keeping kitchen, storage, storefront and back of house areas organized.", "Assisting customers in preparing their food and any side items.", "Keeping front line restocked at all times and in range of food safety temperatures.", "Customer service with quick and efficient check out experience."],
    },
    {
        job: 6,
        title: "Sustainability Intern",
        company: "Johnson County Community College",
        dates: "January 2019 - May 2019",
        bullets: ["Breaking down and scraping or repurposing all items normally thrown away on campus including new renovation areas (such as desks, computers, furniture, etc).", "Sorting campus recycling (all recycling on campus sorted i.e. “paper”, “plastic”, “metals” etc).", "Everyday food waste pick up from all campus coffee shops and cafeteria.", "Used food waste to produce compost on site for use by agriculture department."],
    },
    {
        job: 7,
        title: "Installation Technician",
        company: "ITC Service Group LLC for Google Fiber",
        dates: "February 2016 to January 2019",
        bullets: ["Keep stock of truck inventory, tools, consumable supplies, and customer documents/pamphlets.", "Maintain and cleaned truck, safety equipment, and uniforms.", "Document detailed work notes, time logs, and paperwork; Including monthly inventory and inspection sheets for company vehicle, tools, and safety equipment.", "Remain up to date with training, pricing, new products, features, in-house information, and future company plans while following company information security protocols", "Install new fiber optic, CAT5e, coaxial, and phone wiring with minimal waste", "Work directly with customers to position and set up equipment for optimal use and customer satisfaction while keeping wiring proficiently concealed.", "Perform job duties while also following local ordinances, building codes, and safety laws."],
    },
    {
        job: 8,
        title: "Maintenance Technician",
        company: "The Preserve Apartments & Willow Creek Apartments",
        dates: "November 2014 to February 2016",
        bullets: ["Install/maintain/repair apartments and commercial buildings heating, air conditioning, electrical wiring, electrical conduit, water heaters, plumbing, plumbing appliances, drywall, general appliances, trim work, door frames, cabinets, carpeting, doors and locks, window/door screens, painting (indoor and outdoor), tile, vinyl flooring, concrete, etc.", "Work efficiently in a fast paced atmosphere both independently and as part of a team to complete daily and long term goals", "General grounds work including major and minor landscaping, trash removal, along with ice and snow treatment/removal", "Pool maintenance; including performing chemical testing, recording chemical levels, cleaning, chemical balancing, maintaining water level, and winterizing"],
    },
    {
        job: 9,
        title: "Residential Technician",
        company: "The Preserve Apartments & Willow Creek Apartments",
        dates: "November 2014 to February 2016",
        bullets: ["Warehouse knowledge and training with forklift operations.", "Familiar with operating a diverse set of vehicles, example: double axle box truck, forlifts, flat bed and stick shift trucks, etc", "Handled customer transactions, processed debit/credit card and cash payments.", "Loaded and unloaded equipment, appliances, and materials upwards of 80+ lbs.", "Residential and Commercial experience in heating, air conditioning, heat pumps, electrical, electric & gas waterheating, duct fabrication & assembly, soldering, brazing, concrete and plumbing work.", "Experience with electrical wiring, conduit,breaker replacement, and breaker panel installation."],
    },
    {
        job: 10,
        title: "Warehouse Member",
        company: "UPS",
        dates: "October 1012 to July 2013",
        bullets: ["Load and unload packages and freight, upwards of 80 lbs, in a safe yet timely manner.", "Track packages and ensure package safety while getting parcels to correct destinations.", "Contribute to a clean and safe work environment.", "Successfully work in a team setting to accomplish daily and weekly objectives."],
    },
    
]

const myInfoCard = document.getElementById("my_info");
const summarySection = document.getElementById("summary");
const educationSection = document.getElementById("education");
const experienceSection = document.getElementById("experience");
const codingSection = document.getElementById("coding");
const allLinkBrackets = document.getElementsByClassName("hover");


data.filter(el => el.summary).forEach(
    ({summary}) => {
        summarySection.innerHTML += `
    <h2>Summary</h2>
    <p>${summary}</p>
    `
    }
);

data.filter(el => el.degree).forEach(
    ({association, degree, year}) => {
        educationSection.innerHTML += `
        <p><span class="bold">${association}</span> ${degree}, ${year}</p>
        `
    }
)

data.filter(el => el.coding).forEach(
    ({coding}) => {
        coding.forEach(el => {
            for (let key in el) {
                codingSection.innerHTML += `
                <div id="${key}">
                    <h3>${key}</h3>
                    <p>${el[key].join(", ")}</p>
                </div>
                `
            }
        })}
)

data.filter(el => el.job).forEach(
    ({job, title, company, dates, bullets}) => {
        experienceSection.innerHTML +=`
        <div id="job${job}" class="jobs">
            <p><span class="bold">${title}</span> - ${company} <br> ${dates}</p>
            <ul id="bullets${job}">
                ${bullets.map((el) => {
                    return `<li>${el}</li>`;
                }).join("")}
            </ul>

        </div>
        `
        
    }
)

data.filter(el => el.icon).forEach(
    ({id, icon, link, text}) => {
        myInfoCard.innerHTML += `
        <div class="info" id="${id}"> 
            ${link ? `<a href="${link}" > <i id="${id}-icon" class="${icon}"></i> ${text} </a>` : `<i id="${id}-icon" class="${icon}"></i> ${text}`}
        </div>
        `
    }
)

