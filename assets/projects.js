function loadProjects() {
    // Fetches the gist
    var request = new XMLHttpRequest();
    request.open("GET", "https://gist.githubusercontent.com/gianluparri03/d3ed8d776078554b37c77687aec54010/raw", false);
    request.onreadystatechange = function() { setTimeout(() => postCallback(request), 750); };
    request.send(null);
}

function postCallback(request) {
    // Removes loading text
    document.getElementById("loading").style.display = "none";

    // If the gist has been fetched correctly
    if (request.status == 200) {
        // Parses the JSON
        projects = JSON.parse(request.responseText);

        // Adds every project to the page
        projects.forEach(function (project) {
            div = document.createElement("div");
            div.classList.add("project");
            Object.keys(project).forEach(function (key) {
                if (key == "_title") {
                    div.innerHTML = "<b>[" + project._title + "]</b><br>"
                } else if (key == "_desc") {
                    div.innerHTML += "<i>" + project._desc + "</i><br>"
                } else {
                    div.innerHTML += "> " + key + ": " + project[key] + "<br>"
                }
            });

            // Saves the div
            document.getElementsByTagName("main")[0].appendChild(div);
        });
    } else {
        // Otherwise an the error message
        document.getElementById('loading').innerHTML = "ERROR: can't load projects";
    }
}
