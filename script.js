// sticky navbar
// line under navbar
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
  sections.forEach(Sect => {
      let top = window.scrollY;
      let offset = Sect.offsetTop - 150;
      let height = Sect.offsetHeight;
      let id= Sect.getAttribute('id');
      if(top >= offset && top <= offset + height){
          navLink.forEach(link =>{
              link.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active')   
                  })
      }
  });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}


// send button contact

/*function sendEmail(){
    Email.send({
         Host : "smtp.elasticemail.com",
        Username : "467b10f59b@mymaily.lol"
,
        Password :" 64D4A87A30725C8370280D0473009FE276EB",
        To : 'akf1276@gmail.com',
        From : document.querySelector('input[type="email"]').value,
        Subject :  document.querySelector('input[placeholder="Email Subject"]'),
        Body : "And this is the body"
    }).then(
      message => alert("message Sent Succesfully")
    );
}*/

ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:1000,
     delay:200
     });

     ScrollReveal().reveal('.home-content ,h2 ', { origin: 'top' });
     ScrollReveal().reveal('.hero-img img  ,.por-box,#contact form ,.skills-container', { origin: 'bottom' });
     ScrollReveal().reveal('.about-img img ', { origin: 'left' });