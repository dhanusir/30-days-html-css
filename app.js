const projectsWrapper = document.getElementById("projects")

let projects = [
  { title: "YouTube Home Page", path: "youtube-homepage" },
  { title: "Netflix Home Page", path: "netflix-homepage" },
]

projects.slice(0)
        .map((project) => {
          projectsWrapper.innerHTML += `
          <div class="project">
            <div class='title'>
              <a href="/30-days-html-css/${project.path}/">${project.title}</a>
            </div>

            <div class='bottom-align'>
              <a href="https://github.com/dhanusir/30-days-html-css/tree/master/${project.path}" target='_blank'>
                View Project Code →
              </a>
            </div>
        </div>
        `
        })
