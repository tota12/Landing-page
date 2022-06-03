const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
sections.forEach((section, sec) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `Section${sec+1}`
    navList.appendChild(listItem)
    listItem.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({behavior:'smooth'})
    })
});
const list = document.querySelectorAll('li');
/* Getting the length of the section*/
console.log(sections[0].bottom - sections[0].top)
/* Changing the background-color when the user get to the half of the section*/
window.addEventListener('scroll', () => {
    sections.forEach((sec, secN) => {
        const secL = (sec.getBoundingClientRect().bottom-sec.getBoundingClientRect().top)/2;
        if ((sec.getBoundingClientRect().top + secL < window.innerHeight) && (sec.getBoundingClientRect().bottom + secL> window.innerHeight)) {
            sec.classList.add('active');
            list[secN].classList.add('current');
        }
    })
})
/* return the previous background-color when the user leaves the section*/
window.addEventListener('scroll', () => {
    sections.forEach((sec, secN) => {
        const secL = (sec.getBoundingClientRect().bottom-sec.getBoundingClientRect().top)/2;
        if ((sec.getBoundingClientRect().bottom + secL < window.innerHeight) || (sec.getBoundingClientRect().top + secL> window.innerHeight) ) {
            sec.classList.remove('active');
            list[secN].classList.remove('current');
        }
    }
)})


