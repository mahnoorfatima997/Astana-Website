document.addEventListener('DOMContentLoaded', () => {
    const flipbook = document.querySelector('.flipbook');
    const totalPages = 4; // Set the total number of pages

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement('div');
        page.classList.add('page');
        page.style.backgroundImage = `url('page${i}.jpg')`;
        page.dataset.pageNumber = i;
        flipbook.appendChild(page);
    }

    let currentPage = 1;

    flipbook.addEventListener('click', () => {
        const pages = document.querySelectorAll('.page');
        if (currentPage < totalPages) {
            pages[currentPage - 1].classList.add('flipped');
            currentPage++;
        } else {
            pages[currentPage - 1].classList.remove('flipped');
            currentPage--;
        }
    });
});
