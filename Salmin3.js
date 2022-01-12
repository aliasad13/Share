//CREATING CONSTANTS
/*int i = 5,i is the variable and 5 is the constatnt,same here */
const slideImage = document.querySelectorAll(".slide-image");
/*since we have multiple images*/ 
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

//CREATING VARIABLES
let numberOfImages = slideImage.length;//gives 5
/*as we can see in the first line tha slideImage took all images
in slide-image class in html*/
let slideWidth = slideImage[0].clientWidth;//gives the width of the slide image
let currentSlide=0;

////////////////////////////////////////////////////////////////////////////////////////////////////////



//INIT FUNCTION
/*now we create a function called init to place all the images in the correct order */
function init(){
/*
slideImage[0]=0
slideImage[1]=left position = 100%,will position the 2nd image afetr the first image
slideImage[2]=200%,3rd will position itself after 3rd image
..
*/


slideImage.forEach((img,i) => {
    /*inside the for each loop on slideImage we create
      two call back functions for the actual slide image
      and the index of the slideimage 
    */
     img.style.left = i * 100 + "%";
     //when i =0,img.style.left = 0,whem i=1 i.e. 2nd image,
     //img.style.left = 100
});
/*now lets create an active class and set active class 
to the first slide image */
slideImage[0].classList.add("active");

/*calling createNavigation dots in init so that when we 
load our page , the dots will be created automatically */
createNavigationDots();

}

init(); //calling init every time we load our page




///////////////////////////////////////////////////////////////////////////////////////////////////////////


//CREATE NAVIGATION DOTS


/*creating a function called navigation dots*/
function createNavigationDots(){
for(let i = 0;i <numberOfImages;i++) {
    /*so we creted a loop here that goes from 0 to number of images(5) */
    /*now we have to create some elements */

    const dot = document.createElement("div"); //craeted a division like in html
    /*now we have to add a class of single dot to dot element or division div*/
    dot.classList.add("single-dot");
    /*now we have to append this dot element to the navigationDots */
    navigationDots.appendChild(dot);
   //dot element which contains single dot class is now the child of navigationDots 
   //the below code was the last code added to change the slide when we click 
   //on required navigation dot
   dot.addEventListener("click",()=> {
       goToSlide(i);
   });
}
//to set the firs one as active
navigationDots.children[0].classList.add("active");
// calling the first child od navigationDots amd adding it to active class

}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//NEXT BUTTON

//creating a eventlistener for nextbtn and for the event click we create a function
//(using ()=>{}) to move the slide container div to left.
//for this we need to calculate howmany pixels we need to move to the left by knowing 
//the width of the first slide image
//for this we create a variable at top called slide width
nextBtn.addEventListener("click", ()=> {

    if(currentSlide >= numberOfImages-1){
        goToSlide(0);
        currentSlide=0;
       
        return;
    }

currentSlide++;//everytime we press the next button we will increment the current slide by 1
    goToSlide(currentSlide);
});


prevBtn.addEventListener("click", ()=> {

    if(currentSlide <= 0){
        goToSlide(numberOfImages - 1);
        currentSlide=numberOfImages-1;
        
        return;
    }

currentSlide--;
    goToSlide(currentSlide);


});


function goToSlide(slideNumber){
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
    currentSlide = slideNumber;
    setActiveClass();

}


//NAVIGATION DOTS ACTIVE



function setActiveClass(){

    //setting active class for slide image
    //first we have to find the current active class and remove the active class from there
    //and set the current slide as the active class
    let currentActive = document.querySelector(".slide-image.active");
    //this will give us the div with slide image and division apllied to it
    // //
    // now we have to remove the active class from that division
     currentActive.classList.remove("active");
     slideImage[currentSlide].classList.add("active");




//SET ACTIVE CLASS FOR NAVIGATION BUTTONS

let currentdot = document.querySelector(".single-dot.active");
currentdot.classList.remove("active");
navigationDots.children[currentSlide].classList.add("active");
}


// alert("sdaf")
const accordion = document.getElementsByClassName('contentBx');
for(i=0;i<=accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}