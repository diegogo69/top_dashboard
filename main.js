const stars = document.querySelectorAll('.star');
stars.forEach((star) => star.addEventListener('click', event => {
    const svg = star.querySelector('svg');
    svg.classList.toggle('liked');
}))