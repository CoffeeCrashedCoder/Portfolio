
const projectContainer = document.getElementById("js-project-grid-container");
const contactContainer = document.getElementById("js-contacts-grid-container");

if(projectContainer)
    projectContainer.innerHTML = `
<div class="Grid-Container">
    ${createProjectGridItem("TechnoMania","This was the second game project I was participating in.","Technomania.jpg","Technomania.html")}
    ${createProjectGridItem("Final Blaze","This was the third game project I was participating in.","FinalBlaze.png","FinalBlaze.html")}
</div>
`;

if(contactContainer)
    contactContainer.innerHTML =  `
    <div class="Grid-Container">
        ${createContactsGridItem("Email", "leopanthera.sll@gmail.com")}
        ${createContactsGridItem("Phone", "073-634 74 13")}
    </div>
`;

function createProjectGridItem(title, description, img, link){
    return `
        <div>
            <a href="${link}">
                <div class="Grid-Item">
                    <div class="Text-grid">
                        <div>
                            <h2>${title}</h2>
                        </div>
                        <div class="Paragraph">
                            <p2>${description}</p2>
                        </div>
                    </div>
                    <div class="Image-Div">
                        <span class="Adjust-Image"></span>
                        <img src="${img}">
                    </div>
                </div>
            </a>
        </div>
    `;
}

function createContactsGridItem(title, description)
{
    return `
        <div class="Grid-Item">
            <a>
                <div class="Text-grid">
                    <div class="Paragraph">
                        <h2>${title}:</h2>
                    </div>
                    <div class="Paragraph">
                        <p2>${description}</p2>
                    </div>
                </div>
            </a>
        </div>
    `;
}