// DropDown Logic:
const dropDownButton = document.querySelector('.dropDownBtn');
const content = document.querySelector('.content');

dropDownButton.addEventListener('click', () => {
    // if opened, close the drop down
    if (content.style.opacity === '1') {
        content.style.opacity = '0';
        content.style.transform = 'translateY(-10px)';
        content.style.pointerEvents = 'none';
    }
    // if closed, open the drop down
    else {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        content.style.pointerEvents = 'auto';
    }
});

// Image Carousel Logic:
let currentIndex = 0;
const images = document.querySelectorAll('.images img');
const imagesContainer = document.querySelector('.images');
const dots = document.querySelectorAll('.allNav ul a');
const forwardBtn = document.querySelector('.forwardBtn');
const backwardBtn = document.querySelector('.backwardBtn');

// function that updates everything
function updateSelectors(index) {
    // Slide the images container
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
    
    // removes 'active' from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // adds 'active' to only selected index
    dots[index].classList.add('active');

    //update Current Index
    currentIndex = index;
}

// add function to buttons
forwardBtn.addEventListener('click', () => {
    let next = (currentIndex + 1) % images.length;
    updateSelectors(next);
});

backwardBtn.addEventListener('click', () => {
    let back = (currentIndex - 1 + images.length) % images.length;
    updateSelectors(back);
})

// add functionality to nav dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        updateSelectors(index);
    });
});

updateSelectors(0);