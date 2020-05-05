const header = document.querySelector('header');
const logo = document.querySelector('.logo')
const hamburger = document.querySelector('.menu');
const nav = document.querySelector('nav');
const navClone = nav.cloneNode(true);
const navItems = navClone.querySelectorAll('.nav');
const mobileNavMenu = document.createElement('div');
const blurAndDim = document.createElement('div');
blurAndDim.className = 'blurdim';
document.querySelector('body').insertBefore(blurAndDim, header);
mobileNavMenu.className = 'mobile-nav-menu';

logo.addEventListener('click', () => {
    window.location = './index.html';
})

const mobileNavDeactive = () => {
    mobileNavMenu.style.display = 'none';
    blurAndDim.style.display = 'none';
    hamburger.style.backgroundColor = 'inherit';
}

const mobileNavActive = () => {
    navItems.forEach(item => {
        mobileNavMenu.appendChild(item);
        if (item !== navItems[navItems.length - 1]) {
            mobileNavMenu.appendChild(document.createElement('hr'));
        }
    })
    mobileNavMenu.style.display = 'flex';
    blurAndDim.style.display = 'flex';
    hamburger.style.backgroundColor = 'rgba(85, 106, 119, 0.3)';
    blurAndDim.addEventListener('click', () => {
        mobileNavMenu.style.display = 'none';
        blurAndDim.style.display = 'none';
        hamburger.style.backgroundColor = 'inherit';
    })
}

header.appendChild(mobileNavMenu);

hamburger.addEventListener('click', () => {
    if (mobileNavMenu.style.display === 'flex') {
        mobileNavDeactive();
    } else {
        mobileNavActive();
    }
    blurAndDim.addEventListener('click', () => {
        mobileNavDeactive();
        return;
    })
})