
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector(".close-btn");
const allow_all_cookies =document.querySelector(".allow-all-cookies");
const only_allow_necessary_cookies = document.querySelector(".choose-cookie-btn")
const hidediv =document.querySelector(".cookiesSetting");
const modalScreen = document.querySelector(".modal")
const modalBox =document.querySelector(".modal-content")
const selectedCookieBtn = document.querySelector(".selectbtncookie");
const modal_all_allow_cookies =  document.querySelector(".modal-allow-all-cookies")



window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  },1000); //Popup the screen in 1 seconds after the page is loaded.
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
   document.body.style.overflow = "hidden";   //you can disabled scroll when user click on data protection banner close button

});


hidediv.addEventListener("click", () => {
  popupScreen.classList.remove("active");//hide first popupscreen when user click on cookies setting link
});

allow_all_cookies.addEventListener("click", () => {
  popupScreen.classList.remove("active"); 
  //Create a cookie for a day (to expire within a day) on click the close button.
  document.cookie = "AllCookiesAccept=true; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
  document.cookie = "AllCookiesAnalysisAndStatistics=true; max-age=" + 24 * 60 * 60;
  document.cookie = "AllCookiesMarketing=true; max-age=" + 24 * 60 * 60;
});


only_allow_necessary_cookies.addEventListener("click", () => {
  popupScreen.classList.remove("active"); 
  document.cookie = "only_allow_necessary_cookies = true; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
});

// Selected button cookies like checkbox options
selectedCookieBtn.addEventListener("click",()=>{
    modalScreen.classList.remove("active");
  if(document.getElementById('analysisCookie').checked){
    document.cookie = "analysisAndStatisticsCookie = true; max-age="+ 24 * 60 * 60;
  } if(document.getElementById('marketingCookie').checked){
    document.cookie = "marketingCookies = true; max-age="+ 24 * 60 * 60;
  }
  document.getElementById('marketingCookie').checked;
  document.cookie = "AcceptNecessaryCookie=true; max-age=" + 24 * 60 * 60;
});

modal_all_allow_cookies.addEventListener("click", () => {
    popupScreen.classList.remove("active"); 
    document.cookie = "AllCookiesAccept=true; max-age=" + 24 * 60 * 60; 
    document.cookie = "AllCookiesAnalysisAndStatistics=true; max-age=" + 24 * 60 * 60;
    document.cookie = "AllCookiesMarketing=true; max-age=" + 24 * 60 * 60;
  });



// Use the created cookie to hide or show the popup screen.
const AllCookiesAccept = document.cookie.indexOf("AllCookiesAccept=");
const only_allow_necessary_cookie = document.cookie.indexOf("only_allow_necessary_cookies=");
const analysisAndStatisticsCookie = document.cookie.indexOf("analysisAndStatisticsCookie=");
const marketingCookies = document.cookie.indexOf("marketingCookies=");
const AcceptNecessaryCookie = document.cookie.indexOf("AcceptNecessaryCookie=");

if(AllCookiesAccept != -1 || only_allow_necessary_cookie != -1 || analysisAndStatisticsCookie != -1 || marketingCookies != -1 || AcceptNecessaryCookie != -1){
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
}
else{
  popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
}




// -------------------------------------------------------------------Modal open code-----------------------------------------------
 
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("cookiesSetting");
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "flex";
  }
  
//   modal close code 
  function hideSelectCookie() {
    var x = document.getElementById("myModal");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
