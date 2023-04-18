// $(".video-container2").animate(
//   { screenX: $("#myVideo2").position().left },
//   500
// );

var video1 = document.querySelector(".video-container1");
function handleIntersection1(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      section1[0].pause();
      section1[1].pause();
      section1[2].pause();
      section1[currentIndex1].play();
    } else {
      section1[currentIndex1].pause();
    }
  });
}
var observer1 = new IntersectionObserver(handleIntersection1);
observer1.observe(video1);

//////////////////////
var video2 = document.querySelector(".video-container2");
function handleIntersection2(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      section2[0].pause();
      section2[1].pause();
      section2[2].pause();
      section2[currentIndex2].play();
    } else {
      section2[currentIndex2].pause();
    }
  });
}
var observer2 = new IntersectionObserver(handleIntersection2);
observer2.observe(video2);

////////////////////
var video3 = document.querySelector(".video-container3");
function handleIntersection3(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      section3[0].pause();
      section3[1].pause();
      section3[currentIndex3].play();
    } else {
      section3[currentIndex3].pause();
    }
  });
}
var observer3 = new IntersectionObserver(handleIntersection3);
observer3.observe(video3);

////////////////////
var video4 = document.querySelector(".video-container4");
function handleIntersection4(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      section4[0].pause();
      section4[1].pause();
      section4[2].pause();
      section4[currentIndex4].play();
    } else {
      section4[currentIndex4].pause();
    }
  });
}
var observer4 = new IntersectionObserver(handleIntersection4);
observer4.observe(video4);

////////////
/////////////
window.addEventListener("load", () => {
  dash1[0].style.width = "50px";
  dash1[0].style.border = "1.5px solid black";
  dash2[0].style.width = "50px";
  dash2[0].style.border = "1.5px solid black";
  dash3[0].style.width = "50px";
  dash3[0].style.border = "1.5px solid black";
  dash4[0].style.width = "50px";
  dash4[0].style.border = "1.5px solid black";
});

const container1 = document.querySelector(".video-container1");
const section1 = document.querySelectorAll(".bed-video");
let currentIndex1 = 0;

function scrollRight1() {
  if (currentIndex1 < section1.length - 1) {
    currentIndex1++;
  }
  let targetPosition = currentIndex1 * 622 + 50;
  console.log(currentIndex1, targetPosition);
  container1.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash1(currentIndex1);
  playVideo1(currentIndex1);
}

function scrollLeft1() {
  if (currentIndex1 > 0) {
    currentIndex1--;
  }
  let targetPosition = currentIndex1 * (550 + 50);
  console.log(currentIndex1, targetPosition);
  container1.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash1(currentIndex1);
  playVideo1(currentIndex1);
}

var dash1 = document.querySelectorAll(".bottom-dash1");

function changeDash1(currentIndex) {
  for (let i = 0; i < dash1.length; i++) {
    dash1[i].style.width = "20px";
    dash1[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash1[currentIndex].style.width = "50px";
  dash1[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

function playVideo1(index) {
  section1[0].pause();
  section1[1].pause();
  section1[2].pause();
  section1[index].play();
}

/////////////////////////////222222222//////////////////////////////
/////////////////////////////222222222//////////////////////////////
/////////////////////////////222222222//////////////////////////////
const container2 = document.querySelector(".video-container2");
const section2 = document.querySelectorAll(".living-video");
let currentIndex2 = 0;

function scrollRight2() {
  if (currentIndex2 < section2.length - 1) {
    currentIndex2++;
  }
  let targetPosition = currentIndex2 * 622 + 50;
  console.log(currentIndex2, targetPosition);
  container2.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash2(currentIndex2);
  playVideo2(currentIndex2);
}

function scrollLeft2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
  }
  let targetPosition = currentIndex2 * (550 + 50);
  console.log(currentIndex2, targetPosition);
  container2.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash2(currentIndex2);
  playVideo2(currentIndex2);
}

var dash2 = document.querySelectorAll(".bottom-dash2");

function changeDash2(currentIndex) {
  for (let i = 0; i < dash2.length; i++) {
    dash2[i].style.width = "20px";
    dash2[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash2[currentIndex].style.width = "50px";
  dash2[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

function playVideo2(index) {
  section2[0].pause();
  section2[1].pause();
  section2[2].pause();
  section2[index].play();
}
/////////////////////////////333333333//////////////////////////////
/////////////////////////////333333333//////////////////////////////
/////////////////////////////333333333//////////////////////////////
const container3 = document.querySelector(".video-container3");
const section3 = document.querySelectorAll(".bath-video");
let currentIndex3 = 0;

function scrollRight3() {
  if (currentIndex3 < section3.length - 1) {
    currentIndex3++;
  }
  let targetPosition = currentIndex3 * 622 + 50;
  console.log(currentIndex3, targetPosition);
  container3.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash3(currentIndex3);
  playVideo3(currentIndex3);
}

function scrollLeft3() {
  if (currentIndex3 > 0) {
    currentIndex3--;
  }
  let targetPosition = currentIndex3 * (550 + 50);
  console.log(currentIndex3, targetPosition);
  container3.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash3(currentIndex3);
  playVideo3(currentIndex3);
}

var dash3 = document.querySelectorAll(".bottom-dash3");

function changeDash3(currentIndex) {
  for (let i = 0; i < dash3.length; i++) {
    dash3[i].style.width = "20px";
    dash3[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash3[currentIndex].style.width = "50px";
  dash3[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

function playVideo3(index) {
  section3[0].pause();
  section3[1].pause();
  section3[index].play();
}
/////////////////////////////444444444//////////////////////////////
/////////////////////////////444444444//////////////////////////////
/////////////////////////////444444444//////////////////////////////
const container4 = document.querySelector(".video-container4");
const section4 = document.querySelectorAll(".balc-video");
let currentIndex4 = 0;

function scrollRight4() {
  if (currentIndex4 < section4.length - 1) {
    currentIndex4++;
  }
  let targetPosition = currentIndex4 * 622 + 50;
  console.log(currentIndex4, targetPosition);
  container4.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash4(currentIndex4);
  playVideo4(currentIndex4);
}

function scrollLeft4() {
  if (currentIndex4 > 0) {
    currentIndex4--;
  }
  let targetPosition = currentIndex4 * (550 + 50);
  console.log(currentIndex4, targetPosition);
  container4.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash4(currentIndex4);
  playVideo4(currentIndex4);
}

var dash4 = document.querySelectorAll(".bottom-dash4");

function changeDash4(currentIndex) {
  for (let i = 0; i < dash4.length; i++) {
    dash4[i].style.width = "20px";
    dash4[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash4[currentIndex].style.width = "50px";
  dash4[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

function playVideo4(index) {
  section4[0].pause();
  section4[1].pause();
  section4[2].pause();
  section4[index].play();
}
