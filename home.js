const titreSpans = document.querySelectorAll('h1 span,p span,h2 span');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load',() =>{

    const TL = gsap.timeline({paused: true});
    
    TL
    .staggerFrom(titreSpans, 1, {top:-50, opacity: 0, ease:"power2.out" },0.3 )
    .from(l1, 1, {width: 0, ease:"power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease:"power2.out"}, '-=2')

    TL.play();
})
/*nav bar*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
/*nav bar*/
