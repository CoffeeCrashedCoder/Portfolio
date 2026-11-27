document.getElementById("js-overhead").innerHTML = `
<div class="Overhead">
    <h1>Sebastian Leopanthera Lundgren</h1>
    <div class="Overhead-Container">
        <div class="Overhead-Item">
            <h2>
                <a href="index.html" Class="OverheadLinks">Projects</a>
            </h2>
        </div>
        <div class="Overhead-Item">
            <h2>
                <a href="contacts.html" Class="OverheadLinks">Contacts</a>
            </h2>
        </div>
        <div class="Overhead-Item">
            <h2>
                <a href="about-me.html" Class="OverheadLinks">About me</a>
            </h2>
        </div>
    </div>
</div> `;

//   FIXED GRID - BOX   -----------------------------------------------------------------------

const el = document.getElementById("js-fixed-grid");
const box = JSON.parse(el.dataset.config);

el.innerHTML = `
<div class="Fixed-Grid-Container">
        <div class="Fixed-Grid-Item" style="--start_x: ${box.pos_x}; --start_y: ${box.pos_y}; --width: ${box.width}; --height: ${box.height};">
            <a href="${box.link}"><h3 class="Title">${box.desc} </h3></a>
        </div>
</div> `;