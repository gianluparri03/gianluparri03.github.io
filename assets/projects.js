function loadProjects() {
    // Makes a request at github
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () { postCallback(request); };
    request.open("GET", "https://gist.githubusercontent.com/gianluparri03/d3ed8d776078554b37c77687aec54010/raw", false);
    request.send(null);
}

function postCallback(request) {
    // Removes loading text
    document.getElementsByClassName("loading-anim")[0].style.display = "none";
    // Check for errors
    if (request.readyState == 4 && request.status == 200) {
        // Parses the JSON
        projects = JSON.parse(request.responseText);

        // Adds every project to the page
        projects.forEach(function (project) {
            div = document.createElement("div");
            Object.keys(project).forEach(function (key) {
                if (key == "_title") {
                    div.innerHTML = "<b>[" + project._title + "]</b><br>"
                    return
                }

                div.innerHTML += "> " + key + ": " + project[key] + "<br>"
            });
            main.appendChild(div);
        });
    }
    else {
        // Handle errors
        document.getElementById('general-error').style.display = 'block';
    }
}