//modal form

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

//show hide gallery's items
let showAllImg = document.querySelector('#btn-show');
let turnElem = document.querySelectorAll('.arrow_gallery');
showAllImg.addEventListener("click", show);
let allImages = document.querySelectorAll('.gallery__item');

window.addEventListener('DOMContentLoaded', function() {
  showAllImg.innerHTML = 'Показать все ' + allImages.length +  ' фото';
  
});
  
function show() {
  
  for(i = 0;i < turnElem.length; i++) {
    if(turnElem[i].style.transform == false ) {
      turnElem[i].style.transform = 'rotate(180deg)';
    } else if (turnElem[i].style.transform == 'rotate(180deg)') {
      turnElem[i].style.transform = '';
    }
    
  }

  for (i = 0; i < allImages.length; i++) {

     if (allImages[i].classList.contains('item-active') == false){
        allImages[i].classList.add('item-active');
        showAllImg.innerHTML = 'скрыть';

     } else if (showAllImg.innerHTML == 'скрыть' ) {

       for(i = 8; i < allImages.length; i++) {
        allImages[i].classList.remove('item-active');
       }

       showAllImg.innerHTML = 'Показать все ' + allImages.length +  ' фото';
     }
  }
}


//videoWindow
let videoWrapper = document.querySelector('.main-video__img-wrapper');
videoWrapper.addEventListener('click', hideWrap);
function hideWrap() {
  videoWrapper.style.display = 'none';
  document.querySelector('.main-video__button-play').style.display = 'none';
  
}
//show hide feedback's items

let showAllfb = document.querySelector('#btn-show-fb');
let turnElement = document.querySelectorAll('.arrow_feedback');
showAllfb.addEventListener("click", showFb);

window.addEventListener('DOMContentLoaded', function() {
  showAllfb.innerHTML = 'Показать все ' + '('+allItems.length+')';
});
let allItems = document.querySelectorAll('.feedback-item');
function showFb() {
  
  
  for(i = 0;i < turnElement.length; i++) {
    if(turnElement[i].style.transform == false ) {
      turnElement[i].style.transform = 'rotate(180deg)';
    } else if (turnElement[i].style.transform == 'rotate(180deg)') {
      turnElement[i].style.transform = '';
    }
    
  }

  for (i = 0; i < allItems.length; i++) {

     if (allItems[i].classList.contains('feedback-item_active') == false){
        allItems[i].classList.add('feedback-item_active');
        showAllfb.innerHTML = 'скрыть';

     } else if (showAllfb.innerHTML == 'скрыть' ) {

       for(i = 3; i < allItems.length; i++) {
        allItems[i].classList.remove('feedback-item_active');
       }

       showAllfb.innerHTML = 'Показать все ' + '('+allItems.length+')';
     }
  }
}

//form validation
let form = document.querySelector('form');
let text = document.querySelectorAll('input[type=text]');
let btn = document.querySelector('input[type=submit]');
  
  btn.onmousedown = function() {
	  this.classList.add('clicked');
  }
  
    btn.onmouseup = function() {
	  this.classList.remove('clicked');
  }

for (i = 0; i < text.length; i++) {
  text[i].onfocus = function() {
      this.classList.remove('error');

  }
}

  form.onsubmit = function(event) {
    event.preventDefault();

    for (i = 0, j = 0; i < text.length; i++) {
      if (text[i].value == '') {
        text[i].classList.add('error');
        j++;
      }
    }
      if (j > 0) {
        return false;
        
      } else {
        closeModal();
        alert('Мы свяжемся с вами в близжайшее время');
        form.reset();
        

        
      }
    }

    let modall = document.getElementById("myModall");
    let img = document.querySelectorAll(".gallery__item-img");
    let modallImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");

    
    
      for(i = 0; i < img.length; i++) {
        img[i].onclick = function(){
          modall.style.display = "block";
          modallImg.src = this.src;
          captionText.innerHTML = this.alt;
        }
      }
    
    

    
    
    
    var span = document.getElementsByClassName("closee")[0];
    
    
    span.onclick = function() {
      modall.style.display = "none";
    }


  
//check size window events
let gallArr = document.querySelectorAll('.gallery__item');
window.onresize = function( event ) {
  if (document.documentElement.clientWidth < 570) {
    for(i = 1; i < gallArr.length; i++) {
      gallArr[i].classList.remove('item-active');
    };
    nextBtn.style.display = "flex";
    
  } else if (document.documentElement.clientWidth >= 570) {
    for(i = 0; i < 8; i++) {
      gallArr[i].classList.add('item-active');
    };
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";

  }
};
window.onload = function( event ) {
  if (document.documentElement.clientWidth < 570) {
    for(i = 1; i < gallArr.length; i++) {
      gallArr[i].classList.remove('item-active');
    }
  } else if (document.documentElement.clientWidth >= 570) {
    for(i = 0; i < 8; i++) {
      gallArr[i].classList.add('item-active');
    };
    
  }
};
//slider Img
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');

let count =  0;

nextBtn.onclick = nextImg;
prevBtn.onclick = prevImg;


function nextImg() {
  if(count <= gallArr.length) {
    count += 1;
    for(i = 0; i < gallArr.length; i++) {
      if(gallArr[i].classList.contains('item-active') && count <= gallArr.length ) {
        gallArr[i].classList.remove('item-active');
        gallArr[i+1].classList.add('item-active');
        console.log(count);
        
        
        break;
      }
    }
  }
  if(count >= gallArr.length - 1) {
    nextBtn.style.display = "none";
  }
  prevBtn.style.display = "flex";
}



function prevImg() {
  if(count >= 0) {
    count -= 1;
    for(i = 0; i < gallArr.length; i++) {
      if(gallArr[i].classList.contains('item-active') && count >= 0 ) {
        gallArr[i].classList.remove('item-active');
        gallArr[i-1].classList.add('item-active');
        console.log(count);
        break;
      }
    }
  }
  if(count < 1) {
    prevBtn.style.display = "none";
  }
  nextBtn.style.display = "flex";
  
}


//slider 
let mapSlides = document.querySelectorAll('.map__slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dot = document.querySelectorAll('.dot');


mapSlides[0].style.display = "flex";
dot[0].classList.add('dot-active');

next.addEventListener("click", nextCardSlide);
function nextCardSlide() {
  for(i = 0; i < mapSlides.length; i++) {
    if(mapSlides[i].style.display == "flex" && mapSlides[2].style.display !== "flex") {
      mapSlides[i].style.display = "none";
      mapSlides[i+1].style.display = "flex";
      dot[i].classList.remove('dot-active');
      dot[i+1].classList.add('dot-active');
      break;
    } 
  }
}
prev.addEventListener("click", prevCardSlide);
function prevCardSlide() {
  for(i = 0; i < mapSlides.length; i++) {
    if(mapSlides[i].style.display == "flex" && mapSlides[0].style.display !== "flex") {
      mapSlides[i].style.display = "none";
      mapSlides[i-1].style.display = "flex";
      dot[i].classList.remove('dot-active');
      dot[i-1].classList.add('dot-active');
      break;
    } 
  }
}


