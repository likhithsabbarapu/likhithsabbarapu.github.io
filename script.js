const works = {
    "task1" : { "title" : "Project 1", "url" : "works/task1/index.html" },
    "task2" : { "title" : "Project 2", "url" : "works/task2/index.html" },
    "task3" : { "title" : "Project 3", "url" : "works/task3/index.html" },
};

function loadNavigation() {
    const navDiv = document.getElementById("nav_div");

    for (const key in works) {
        const work = works[key];
        const button = document.createElement("button");
        button.innerText = work.title;
        
        button.addEventListener("click", function() {
            loadPage(work.url);
        });

        navDiv.appendChild(button);
    }
}

function loadPage(url) {
    const iframe = document.getElementById("content_frame");
    iframe.src = url;
}

window.onload = loadNavigation;
