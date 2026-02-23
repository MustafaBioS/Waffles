const viewCount = document.querySelector('.viewCount');
const count = document.querySelector('.count');

fetch("https://countapi.mileshilliard.com/api/v1/hit/Views")
    .then(res => res.json())
    .then(data => {
        count.textContent = `Count: ${data.value}`;
    })