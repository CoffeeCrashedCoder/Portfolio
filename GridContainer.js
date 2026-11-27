
const projectContainer = document.getElementById("js-project-grid-container");

//PROJECTS PAGE --------------------------------------------------------------------------------

if(projectContainer)
    projectContainer.innerHTML = `
<div class="Grid-Container">
    ${createProjectGridItem("Final Blaze","This was the third game project I was participating in.","FinalBlaze.png","FinalBlaze.html", 1)}
    ${createProjectGridItem("Crimson","This was the forth game project I was participating in.","Crimson.png","Crimson.html", 2)}
    ${createProjectGridItem("Specialization","This is my specialization project.","","", 3)}
    ${createProjectGridItem("Factory Game","This is a product from the specialization project.","","", 4)}
    ${createProjectGridItem("Turned Based Combat Package (TBC-Package)","This project thought me more about working in Unity.","","", 5)}
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

//!PROJECTS PAGE --------------------------------------------------------------------------------