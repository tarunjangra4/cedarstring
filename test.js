// $(".video-container2").animate(
//   { screenX: $("#myVideo2").position().left },
//   500
// );

// window.addEventListener("load", () => {
//   console.log("kadkjfakjjl");
//   dash1[0].style.width = "50px";
//   dash1[0].style.border = "1.5px solid black";
//   dash2[0].style.width = "50px";
//   dash2[0].style.border = "1.5px solid black";
//   dash3[0].style.width = "50px";
//   dash3[0].style.border = "1.5px solid black";
//   dash4[0].style.width = "50px";
//   dash4[0].style.border = "1.5px solid black";
// });

// var dash1 = document.querySelectorAll(".bottom-dash1");

// function changeDash(currentIndex) {
//   for (let i = 0; i < dash1.length; i++) {
//     dash1[i].style.width = "20px";
//     dash1[i].style.border = "1.5px solid rgb(214, 213, 213)";
//   }
//   dash1[currentIndex].style.width = "50px";
//   dash1[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
// }

// var container = document.querySelector(".video-container1");
// var sections = document.querySelectorAll(".bed-video");
// var currentIndex = 0;

// document.getElementById("rightScroll1").addEventListener("click", function () {
//   currentIndex++;
//   if (currentIndex >= sections.length) {
//     currentIndex = 0;
//   }
//   sections[currentIndex].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
//   if (currentIndex == 0) {
//     sections[currentIndex].play();
//   }
//   changeDash(currentIndex);
// });

// document.getElementById("leftScroll1").addEventListener("click", function () {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = sections.length - 1;
//   }
//   sections[currentIndex].scrollIntoView({ behavior: "smooth" });
//   sections[currentIndex].play();
//   changeDash(currentIndex);
// });

// var currentIndex = 1;
// console.log("index ", currentIndex);
// document.getElementById("rightScroll1").addEventListener("click", function () {
//   currentIndex++;
//   if (currentIndex >= sections.length) {
//     currentIndex = 0;
//     console.log("if", sections[currentIndex]);
//   }
//   console.log("index ", currentIndex);
//   sections[currentIndex].scrollIntoView({ behavior: "smooth" });
//   if (currentIndex == 0) {
//     currentIndex++;
//   }
// });

// document.getElementById("leftScroll1").addEventListener("click", function () {
//   if (currentIndex == 0 || currentIndex == 1) {
//     console.log("first");
//     currentIndex = sections.length - 1;
//   } else if (currentIndex < 0) {
//     console.log("third");
//     currentIndex = sections.length - 1;
//   } else if (currentIndex == sections.length - 1) {
//     currentIndex -= 2;
//   } else {
//     currentIndex--;
//   }
//   console.log("abc ", currentIndex);
//   sections[currentIndex].scrollIntoView({ behavior: "smooth" });
// });

// var dash2 = document.querySelectorAll(".bottom-dash2");

// function changeDash2(currentIndex) {
//   for (let i = 0; i < dash2.length; i++) {
//     dash2[i].style.width = "20px";
//     dash2[i].style.border = "1.5px solid rgb(214, 213, 213)";
//   }
//   dash2[currentIndex].style.width = "50px";
//   dash2[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
// }

// var container2 = document.querySelector(".video-container2");
// var sections2 = document.querySelectorAll(".living-video");
// var currentIndex2 = 0;

// document.getElementById("rightScroll2").addEventListener("click", function () {
//   currentIndex2++;
//   if (currentIndex2 >= sections2.length) {
//     currentIndex2 = 0;
//   }
//   sections2[currentIndex2].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
//   console.log("abc");
//   sections2[currentIndex2].play();
//   changeDash2(currentIndex2);
// });

// document.getElementById("leftScroll2").addEventListener("click", function () {
//   currentIndex2--;
//   if (currentIndex2 < 0) {
//     currentIndex2 = sections2.length - 1;
//   }
//   sections2[currentIndex2].scrollIntoView({ behavior: "smooth" });
//   sections2[currentIndex2].play();
//   changeDash2(currentIndex2);
// });

////////////////////////////////
///////////////////////////////
/////////////////////////////////section3
// var dash3 = document.querySelectorAll(".bottom-dash3");

// function changeDash3(currentIndex) {
//   for (let i = 0; i < dash3.length; i++) {
//     dash3[i].style.width = "20px";
//     dash3[i].style.border = "1.5px solid rgb(214, 213, 213)";
//   }
//   dash3[currentIndex].style.width = "50px";
//   dash3[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
// }

// var container3 = document.querySelector(".video-container3");
// var sections3 = document.querySelectorAll(".bath-video");
// var currentIndex3 = 0;

// document.getElementById("rightScroll3").addEventListener("click", function () {
//   currentIndex3++;
//   if (currentIndex3 >= sections3.length) {
//     currentIndex3 = 0;
//   }
//   sections3[currentIndex3].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
//   sections3[currentIndex3].play();
//   changeDash3(currentIndex3);
// });

// document.getElementById("leftScroll3").addEventListener("click", function () {
//   currentIndex3--;
//   if (currentIndex3 < 0) {
//     currentIndex3 = sections3.length - 1;
//   }
//   sections3[currentIndex3].scrollIntoView({ behavior: "smooth" });
//   sections3[currentIndex3].play();
//   changeDash3(currentIndex3);
// });

////////////////////////////////
///////////////////////////////
/////////////////////////////////section3
// var dash4 = document.querySelectorAll(".bottom-dash4");

// function changeDash4(currentIndex) {
//   for (let i = 0; i < dash4.length; i++) {
//     dash4[i].style.width = "20px";
//     dash4[i].style.border = "1.5px solid rgb(214, 213, 213)";
//   }
//   dash4[currentIndex].style.width = "50px";
//   dash4[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
// }

// var container4 = document.querySelector(".video-container4");
// var sections4 = document.querySelectorAll(".balc-video");
// var currentIndex4 = 0;

// document.getElementById("rightScroll4").addEventListener("click", function () {
//   currentIndex4++;
//   if (currentIndex4 >= sections4.length) {
//     currentIndex4 = 0;
//   }
//   sections4[currentIndex4].scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
//   sections4[currentIndex4].play();
//   changeDash4(currentIndex4);
// });

// document.getElementById("leftScroll4").addEventListener("click", function () {
//   currentIndex4--;
//   if (currentIndex4 < 0) {
//     currentIndex4 = sections4.length - 1;
//   }
//   sections4[currentIndex4].scrollIntoView({ behavior: "smooth" });
//   sections4[currentIndex4].play();
//   changeDash4(currentIndex4);
// });

// window.addEventListener("load", (event) => {
//   section5[0].play();
//   section6[0].play();
//   section7[0].play();
//   section8[0].play();
// });

var video5 = document.querySelector(".mobContainer1");
function handleIntersection5(entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio >= 0.5) {
      console.log("if1", currentIndex5);
      section5[0].pause();
      section5[1].pause();
      section5[2].pause();
      section5[currentIndex5].play();
    } else {
      console.log("else1", currentIndex5);
      section5[currentIndex5].pause();
    }
  });
}
var observer5 = new IntersectionObserver(handleIntersection5);
observer5.observe(video5);

var mobContainer1 = document.querySelector(".mobContainer1");
var section5 = document.querySelectorAll(".mobVideo1");
var currentIndex5 = 0;

function scrollRight5() {
  if (currentIndex5 < section5.length - 1) {
    currentIndex5++;
  }
  let targetPosition = currentIndex5 * 280 + 30;
  mobContainer1.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash5(currentIndex5);
  playVideo5(currentIndex5);
}

function scrollLeft5() {
  if (currentIndex5 > 0) {
    currentIndex5--;
  }
  let targetPosition = currentIndex5 * 250;
  mobContainer1.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash5(currentIndex5);
  playVideo5(currentIndex5);
}

// var dash5 = document.querySelectorAll(".bottom-dash5");

// function changeDash5(currentIndex) {
//   for (let i = 0; i < dash5.length; i++) {
//     dash5[i].style.width = "20px";
//     dash5[i].style.border = "1.5px solid rgb(214, 213, 213)";
//   }
//   dash5[currentIndex].style.width = "50px";
//   dash5[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
// }

function playVideo5(index) {
  console.log("play");
  section5[0].pause();
  section5[1].pause();
  section5[2].pause();
  section5[index].play();
}

/////////////////
/////////////////
/////////////////
var video6 = document.querySelector(".mobContainer2");
function handleIntersection6(entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio >= 0.5) {
      console.log("if2", currentIndex6);
      section6[0].pause();
      section6[1].pause();
      section6[2].pause();
      section6[currentIndex6].play();
    } else {
      console.log("else2", currentIndex6);

      section6[currentIndex6].pause();
    }
  });
}
var observer6 = new IntersectionObserver(handleIntersection6);
observer6.observe(video6);

var mobContainer2 = document.querySelector(".mobContainer2");
var section6 = document.querySelectorAll(".mobVideo2");
var currentIndex6 = 0;

function scrollRight6() {
  if (currentIndex6 < section6.length - 1) {
    currentIndex6++;
  }
  let targetPosition = currentIndex6 * 280 + 30;
  mobContainer2.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash6(currentIndex6);
  playVideo6(currentIndex6);
}

function scrollLeft6() {
  if (currentIndex6 > 0) {
    currentIndex6--;
  }
  let targetPosition = currentIndex6 * 250;
  mobContainer2.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash6(currentIndex6);
  playVideo6(currentIndex6);
}

function playVideo6(index) {
  console.log("play2");
  section6[0].pause();
  section6[1].pause();
  section6[2].pause();
  section6[index].play();
}

//******************
//******************
//******************
var video7 = document.querySelector(".mobContainer3");
function handleIntersection7(entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio >= 0.5) {
      section7[0].pause();
      section7[1].pause();
      section7[currentIndex7].play();
    } else {
      section7[currentIndex7].pause();
    }
  });
}
var observer7 = new IntersectionObserver(handleIntersection7);
observer7.observe(video7);

var mobContainer3 = document.querySelector(".mobContainer3");
var section7 = document.querySelectorAll(".mobVideo3");
var currentIndex7 = 0;

function scrollRight7() {
  if (currentIndex7 < section7.length - 1) {
    currentIndex7++;
  }
  let targetPosition = currentIndex7 * 280 + 30;
  mobContainer3.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash7(currentIndex7);
  playVideo7(currentIndex7);
}

function scrollLeft7() {
  if (currentIndex7 > 0) {
    currentIndex7--;
  }
  let targetPosition = currentIndex7 * 250;
  mobContainer3.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash7(currentIndex7);
  playVideo7(currentIndex7);
}

function playVideo7(index) {
  section7[0].pause();
  section7[1].pause();
  section7[index].play();
}

///$$$$$$$$$$$$$$$$$$$$$$$
///$$$$$$$$$$$$$$$$$$$$$$$
///$$$$$$$$$$$$$$$$$$$$$$$
var video8 = document.querySelector(".mobContainer4");
function handleIntersection8(entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio >= 0.5) {
      section8[0].pause();
      section8[1].pause();
      section8[2].pause();
      section8[currentIndex8].play();
    } else {
      section8[currentIndex8].pause();
    }
  });
}
var observer8 = new IntersectionObserver(handleIntersection8);
observer8.observe(video8);

var mobContainer4 = document.querySelector(".mobContainer4");
var section8 = document.querySelectorAll(".mobVideo4");
var currentIndex8 = 0;

function scrollRight8() {
  if (currentIndex8 < section8.length - 1) {
    currentIndex8++;
  }
  let targetPosition = currentIndex8 * 280 + 30;
  mobContainer4.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash8(currentIndex8);
  playVideo8(currentIndex8);
}

function scrollLeft8() {
  if (currentIndex8 > 0) {
    currentIndex8--;
  }
  let targetPosition = currentIndex8 * 250;
  mobContainer4.scrollTo({ left: targetPosition, behavior: "smooth" });
  // changeDash8(currentIndex8);
  playVideo8(currentIndex8);
}

function playVideo8(index) {
  section8[0].pause();
  section8[1].pause();
  section8[2].pause();
  section8[index].play();
}
