const projectsWrapper = document.getElementById("projects")

let projects = [
  { title: "GitHub Join Form", path: "github-join" },
  { title: "Gmail Sign in", path: "gmail-signin" },
  { title: "Remembering Steve", path: "remembering-steve" },
  { title: "Google Search", path: "google-search" },
  { title: "Twitter Sign in", path: "twitter-signin" },
  { title: "Facebook Create Post", path: "fb-create-post" },
  { title: "Facebook Login", path: "fb-login" },
  { title: "YouTube Home Page", path: "youtube-homepage" },
  { title: "Netflix Home Page", path: "netflix-homepage" },
  { title: "Instagram Profile", path: "instagram-profile" },
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
