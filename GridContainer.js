
const projectContainer = document.getElementById("js-project-grid-container");
const contactContainer = document.getElementById("js-contacts-grid-container");

//OVERVIEW OF PROJECTS --------------------------------------------------------------------------------

if(projectContainer)
    projectContainer.innerHTML = `
<div class="Grid-Container">
    ${createProjectGridItem("Final Blaze","This was the third game project I was participating in.","FinalBlaze.png","FinalBlaze.html", 1)}
    ${createProjectGridItem("Crimson","This was the forth game project I was participating in.","Crimson.png","Crimson.html", 2)}
    ${createProjectGridItem("Final Blaze","This was the third game project I was participating in.","FinalBlaze.png","FinalBlaze.html", 3)}
    ${createProjectGridItem("Crimson","This was the forth game project I was participating in.","Crimson.png","Crimson.html", 4)}
</div>
`;

function createProjectGridItem(title, description, img, link, proj_nr){
    return `
        <div class="Grid-Item-Project-${proj_nr}">
            <a href="${link}", class ="Project-Div-Link">
                <div class="Text-Grid">
                        <h2>${title}</h2>
                        <p2 class="Paragraph">${description}</p2>
                </div>
                <div class="Project-Image-Div">
                    
                    <img src="${img}">
                </div>
            </a>
        </div>
    `;
}
//!OVERVIEW OF PROJECTS --------------------------------------------------------------------------------

//CONTACT INFO -----------------------------------------------------------------------------------------

if(contactContainer)
    contactContainer.innerHTML =  `
    <div class="Centered-Grid-Container">
        ${createContactsGridItem(
            "Email", "leopanthera.sll@gmail.com",
            "Phone", "073-634 74 13",
            "GitHub", "https://github.com/CoffeeCrashedCoder/",
            "LinkedIn", "https://www.linkedin.com/in/sebastian-leopanthera-lundgren-574551359/")}
    </div>
`;

function createContactsGridItem(title, description, t2, d2, t3, d3, t4, d4)
{
    return `
        <div class="Contacts-Grid-Item">
            <a>
            ${createContactItem(title, description, true, true)}
            ${createContactItem(t2, d2)}
            ${createContactItem(t3, d3, true)}
            ${createContactItem(t4, d4, true)}
            </a>
        </div>
    `;
}

function createContactItem(title, description, isLink = false, isMail = false)
{
    if(isLink)
    return `
    <div class="Contacts-Text-grid">
                    <div class="Contacts-Paragraph">
                        <h2>${title}:</h2>
                    </div>`

                + (isMail?

                    `<div class="Contacts-Paragraph">
                        <a href="mailto:${description}"><h4>${description}</h4></a>
                    </div>
                </div>`
                :

                `<div class="Contacts-Paragraph">
                        <a href="${description}" target="_blank"><h4>${description}</h4></a>
                    </div>
                </div>`);
    else
    return `
    <div class="Contacts-Text-grid">
                    <div class="Contacts-Paragraph">
                        <h2>${title}:</h2>
                    </div>
                    <div class="Contacts-Paragraph">
                        <h4>${description}</h4>
                    </div>
                </div>
    `;
}

//!CONTACT INFO ----------------------------------------------------------------------------------------