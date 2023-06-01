
var preloader = document.getElementById('loading');
function myFunction(){
preloader.style.display = 'none'
}

  
  $('.count').counterUp({
    delay:10,
    time:3000
  })

new Swiper(".mySwiper", {
    slidesPerView: "2",
    spaceBetween: 30,
    autoplay: {
        Delay: 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const widthSize = window.matchMedia('(max-width: 780px)');
const myJsmedia = (widthSize) => {
  if(widthSize.matches)
  {
    new Swiper(".mySwiper", {
      slidesPerView: "1",
      spaceBetween: 30,
      autoplay: {
        Delay: 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    }); 
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: "2",
      spaceBetween: 30,
      autoplay: {
        Delay: 1000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    }); 
  }
}


myJsmedia(widthSize);

widthSize.addEventListener('change', myJsmedia)

//scroll


const scrollTop = document.querySelector(".scrollTop-style");


const heroSec = document.querySelector(".section-hero")

const scrollToTop = () => {
    heroSec.scrollIntoView({ behavior:"smooth" })
};

scrollTop.addEventListener("click", scrollToTop);




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	scrollTop.style.display = "inline-block";
	} else {
        scrollTop.style.display = "none";
	}
}



const workSection = document.querySelector(".section-work-data")
const workObserver = new IntersectionObserver((entries, observer) => {

  const [entry] = entries;
  console.log(entry)

  if (entry.isIntersecting == false) return;


  const counterNum = document.querySelectorAll(".counter-number");

  const speed = 10;

  counterNum.forEach((curElem) => {
    const updateNum = () => {
      const targetNum = parseInt(curElem.dataset.number);
      // console.log(targetNum);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNum = Math.trunc(targetNum / speed)
      // console.log(incrementNum);

      if(initialNum < targetNum) {
        curElem.innerText = `${initialNum + incrementNum}+`;
        setTimeout(updateNum, 100);
        }
    }

    updateNum();
  });

  observer.unobserve(workSection)

}, {
  root: null,
  threshold: 0,
});

workObserver.observe(workSection)

// responsive navbar
const mobile_nav = document.querySelector(".mobile-nav");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active")
});


