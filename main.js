console.log('hallo')
const navMenu= document.querySelector('[data-nav-]')
const navTrigger =document.querySelector('[data-nav-trigger-]');
const childrenTrigger=document.querySelector('[data-cildren-trigger-]');
const open= 'open'
 // navTrigger.addEventListener('click',(event)=>{
 //     event.preventDefault();
 //
 //     if(navMenu.classList.contains(open)){
 //         navMenu.classList.remove(open);
 //     }else{
 //         navMenu.classList.add(open);
 //     }
 // })
navTrigger.addEventListener('click',()=>{
    navMenu.classList.toggle('open');
})
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