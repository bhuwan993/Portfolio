// animate the all pages 
let animation = ()=>{
    gsap.from(".animation .line1",{
        y:'100%',
        duration:0.5,
        
    })
    gsap.from('.animation .line2',{
        y:'100%',
        duration: 0.5,
        delay: 0.2,
    })
    gsap.from('.animation .line3',{
        y:'100%',
        duration: 0.5,
        delay: 0.4,
    })
    gsap.from('.animation .line4',{
        y:'100%',
        duration: 0.5,
        delay:0.6,
    })
    gsap.from('.animation .line5',{
        y:'100%',
        duration: 0.5,
        delay:0.8,
        
    })
    gsap.from('.animation .line6',{
        y:'100%',
        duration: 0.5,
        delay: 0.8,
    })
    gsap.from('.animation .line7',{
        y:"100%",
        duration:0.5,
        delay: 1,
    })
    gsap.from('.animation .line8',{
        y:"100%",
        duration:0.5,
        delay: 1.2
    })
 }
 animation();
let moveCircle= ()=>{

    
   
   gsap.to('.image .circle',{
        //  border: `15px dotted #00ff99`,
        duration: 60,
        rotate:360,
        repeat: -1,

        //  yoyo: true,
        
        
    })
    
    
}
moveCircle();
function menuBar(){
   document.querySelector('#menuBtn').addEventListener('click',function(){
      gsap.to('.menu',{
        x:-350,
        duration:0.5,

      })
      gsap.from('.menu a',{
        x:300,
        // delay:4,
        duration:0.7,
        // scrub:0.3,
        stagger:0.3,
        // yoyo:true,
      })

   })
   document.querySelector('#crossBtn').addEventListener('click',function(){
    gsap.to('.menu',{
        x:350,
        duration:0.5,
    })
   })
}

menuBar();
function projectSwiping(){
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
}
projectSwiping();