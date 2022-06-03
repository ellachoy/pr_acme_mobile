const nav = document.querySelector('[data-nav]');
const navTrigger = document.querySelector('[data-nav-trigger]');
const childrenTrigger = document.querySelectorAll('[data-children-trigger]');
const openClass = 'is-open';

navTrigger.addEventListener('click', (event) => {
    event.preventDefault();

    if (nav.classList.contains(openClass)) {
        nav.classList.remove(openClass);
    } else {
        nav.classList.add(openClass);
    }
});

childrenTrigger.forEach((trigger) => {
    const child = trigger.dataset.childrenTrigger;
    const childElement = document.querySelector(child);

    trigger.addEventListener('click', (event) => {
        event.preventDefault();

        if (childElement.classList.contains(openClass)) {
            childElement.classList.remove(openClass);
        } else {
            childElement.classList.add(openClass);
        }
    });
});