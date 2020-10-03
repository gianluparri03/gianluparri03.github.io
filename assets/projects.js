function loadProjects() {
    setTimeout(function () {
        // Makes a request at github
        var request = new XMLHttpRequest();
        request.open("GET", "https://gist.githubusercontent.com/gianluparri03/d3ed8d776078554b37c77687aec54010/raw", false);
        request.send(null);

        // Parses the JSON
        projects = JSON.parse(request.responseText);

        // Removes text
        var main = document.getElementsByTagName("main")[0];
        main.removeChild(main.children[0])

        // Adds every project to the page
        projects.forEach(function (project) {
            div = document.createElement("div");
            Object.keys(project).forEach(function(key) {
                if (key == "_title") {
                    div.innerHTML = "<b>[" + project._title + "]</b><br>"
                    return
                }

                div.innerHTML += "> " + key + ": " + project[key] + "<br>"
            });
           main.appendChild(div);
        });
    }, 1000);
}
