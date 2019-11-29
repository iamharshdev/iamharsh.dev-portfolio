document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline({
        
    })
    .add({
        targets: '.blue_bg',
        left: ['-100%', '100%'],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: (el,i)=>i*500
    })

    .add({
        targets: '.text',
        top: ['75%', '50%'],
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i)=>i*100,
        offset: '-=3000'
    })

    .add({
        targets: '.text2',
        top: ['75%', '50%'],
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i)=>i*100,
        offset: '-=2300'
    })

    .add({
        targets: '.text3',
        top: ['75%', '50%'],
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: (el, i)=>i*100,
        offset: '-=1800'
    })
})