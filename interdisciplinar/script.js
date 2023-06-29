let count =1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>6)
    count =1;

    document.getElementById("radio"+count).checked = true;
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-0, hr',{
    rotate:{ x:0, y: 80, z:0},
    duration: 1500
});

sr.reveal('.area-1', {duration: 1000});

sr.reveal('.area-2', {duration: 1000});

sr.reveal('.area-3', {duration: 1000});

sr.reveal('.texto, .frase_header', {duration: 2000});

sr.reveal('#btnTop', {duration: 2000});


// Smooth Scrolling

$(".navbar a").on("click", function (event) {

    if (this.hash !== "") {

        event.preventDefault();


 

        const hash = this.hash;


 

        $("html, body").animate(

            {

                scrollTop: $(hash).offset().top - 0

            },

            800

        );

    }

});

window.addEventListener('scroll', function() {
    var botaoTopo = document.getElementById('btnTop');
    if (window.scrollY > window.innerHeight) {
      botaoTopo.style.display = 'block';
    } else {
      botaoTopo.style.display = 'none';
    }
  });
  
  document.getElementById('btnTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  


 
