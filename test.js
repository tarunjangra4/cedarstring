// $(".video-container2").animate(
//   { screenX: $("#myVideo2").position().left },
//   500
// );

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
}

function scrollLeft1() {
  if (currentIndex1 > 0) {
    currentIndex1--;
  }
  let targetPosition = currentIndex1 * (550 + 50);
  console.log(currentIndex1, targetPosition);
  container1.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash1(currentIndex1);
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
}

function scrollLeft2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
  }
  let targetPosition = currentIndex2 * (550 + 50);
  console.log(currentIndex2, targetPosition);
  container2.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash2(currentIndex2);
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
}

function scrollLeft3() {
  if (currentIndex3 > 0) {
    currentIndex3--;
  }
  let targetPosition = currentIndex3 * (550 + 50);
  console.log(currentIndex3, targetPosition);
  container3.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash3(currentIndex3);
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
}

function scrollLeft4() {
  if (currentIndex4 > 0) {
    currentIndex4--;
  }
  let targetPosition = currentIndex4 * (550 + 50);
  console.log(currentIndex4, targetPosition);
  container4.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash4(currentIndex4);
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
