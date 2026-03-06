const viewCount = document.querySelector('.viewCount');
const count = document.querySelector('.count');
const home = document.querySelector('.home');
const projects = document.querySelector('.projects');

fetch("https://countapi.mileshilliard.com/api/v1/hit/Views")
    .then(res => res.json())
    .then(data => {
        count.textContent = `Count: ${data.value}`;
    })

if (location.pathname === "/index.html") {
    home.classList.add('chosen');
} else if (location.pathname === "/projects.html") {
    projects.classList.add('chosen');
}