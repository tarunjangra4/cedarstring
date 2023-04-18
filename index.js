var input3 = document.querySelector("#phone3");
window.intlTelInput(input3, {
  onlyCountries: [
    "in",
    "au",
    "bt",
    "br",
    "ca",
    "cn",
    "de",
    "hk",
    "it",
    "jp",
    "kw",
    "my",
    "mv",
    "np",
    "QA",
    "sa",
    "sg",
    "lk",
    "th",
    "ae",
  ],
  preferredCountries: ["in"],
  separateDialCode: true,
});

var input1 = document.querySelector("#phone1");
window.intlTelInput(input1, {
  onlyCountries: [
    "in",
    "au",
    "bt",
    "br",
    "ca",
    "cn",
    "de",
    "hk",
    "it",
    "jp",
    "kw",
    "my",
    "mv",
    "np",
    "QA",
    "sa",
    "sg",
    "lk",
    "th",
    "ae",
  ],
  preferredCountries: ["in"],
  separateDialCode: true,
});

// function myButtonClick() {
//     console.log("Button clicked!");
//     // Perform desired action here
// }

// var lottieElement = document.getElementById("lottieAnimation");

// var animation = lottie.loadAnimation({
//   container: lottieElement, // Element to render the animation
//   renderer: "svg", // Renderer type ('svg', 'canvas', 'html')
//   loop: true, // Whether to loop the animation
//   autoplay: true, // Whether to autoplay the animation
//   path: "animation.json", // Path to your Lottie JSON file
// });

// document.querySelector(".zoom").addEventListener("click", () => {
//   document.querySelector(".zoom").style.width = "120%";
// });

var section = document.querySelector("#zoom");
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      section.style.width = "120%";
    } else {
      section.style.width = "100%";
    }
  });
});

observer.observe(section);

var video1 = document.querySelector(".video-container1");
function handleIntersection1(entries) {
  entries.forEach(function (entry) {
    console.log(entry.intersectionRatio, "1");
    if (entry.intersectionRatio >= 0.5) {
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
    console.log(entry.intersectionRatio, "2");
    if (entry.intersectionRatio >= 0.5) {
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
    if (entry.intersectionRatio >= 0.5) {
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
    if (entry.intersectionRatio >= 0.5) {
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
  // console.log(currentIndex1, targetPosition);
  container1.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash1(currentIndex1);
  playVideo1(currentIndex1);
}

function scrollLeft1() {
  if (currentIndex1 > 0) {
    currentIndex1--;
  }
  let targetPosition = currentIndex1 * (550 + 50);
  // console.log(currentIndex1, targetPosition);
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
  // console.log(currentIndex2, targetPosition);
  container2.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash2(currentIndex2);
  playVideo2(currentIndex2);
}

function scrollLeft2() {
  if (currentIndex2 > 0) {
    currentIndex2--;
  }
  let targetPosition = currentIndex2 * (550 + 50);
  // console.log(currentIndex2, targetPosition);
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
  // console.log(currentIndex3, targetPosition);
  container3.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash3(currentIndex3);
  playVideo3(currentIndex3);
}

function scrollLeft3() {
  if (currentIndex3 > 0) {
    currentIndex3--;
  }
  let targetPosition = currentIndex3 * (550 + 50);
  // console.log(currentIndex3, targetPosition);
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
  // console.log(currentIndex4, targetPosition);
  container4.scrollTo({ left: targetPosition, behavior: "smooth" });
  changeDash4(currentIndex4);
  playVideo4(currentIndex4);
}

function scrollLeft4() {
  if (currentIndex4 > 0) {
    currentIndex4--;
  }
  let targetPosition = currentIndex4 * (550 + 50);
  // console.log(currentIndex4, targetPosition);
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

/////////////////////////    form    ////////////////////////
////////////////////////////////////////////////////////////

function getInfo1(e, count) {
  e.stopPropagation();
  let name = document.querySelector(
    count == 1 ? "#name1" : count == 2 ? "#name2" : "#name3"
  )?.value;
  let phone = document.querySelector(
    count == 1 ? "#phone1" : count == 2 ? "#phone2" : "#phone3"
  )?.value;
  let email = document.querySelector(
    count == 1 ? "#email1" : count == 2 ? "#email2" : "#email3"
  )?.value;
  openApi(name, phone, email, count);
}

let phoneNo;
let token;

function openApi(name, phone, email, count) {
  phoneNo = phone;
  let url = window.location.href;
  let searchParams = new URLSearchParams(new URL(url).search);
  utm_source = searchParams.get("utm_source");
  utm_campaign = searchParams.get("utm_campaign");
  utm_medium = searchParams.get("utm_medium");
  utm_content = searchParams.get("utm_content");
  utm_terms = searchParams.get("utm_terms");
  const isOtp = new URLSearchParams(new URL(url).search).get("isOTP");

  let body = {
    phone: phone,
    name: name,
    // projectId: 21,
    projectId: 21,
    email: email,
    ...(utm_campaign != null && { campaignCode: utm_campaign }),
    ...(searchParams?.entries?.length > 0 && {
      metadata: {
        utm_campaign: utm_campaign,
        utm_content: utm_content,
        utm_medium: utm_medium,
        utm_source: utm_source,
        utm_terms: utm_terms,
      },
    }),
    fromPortal: false,
    requireOtp: true,
  };
  axios
    .post("https://api-dcrm.fincity.com/open/opportunity", body)
    .then((res) => {
      if (isOtp) {
        let enquiryForm = document.querySelector(
          count == 1
            ? ".enquiryMain1"
            : count == 2
            ? ".enquiryMain2"
            : ".enquiryMain3"
        );
        let verifyOtp = document.querySelector(
          count == 1
            ? ".otpVerification1"
            : count == 2
            ? ".otpVerification2"
            : ".otpVerification3"
        );
        enquiryForm.style.display = "none";
        verifyOtp.style.display = "flex";
        token = res?.data?.token;
        sendOtp();
      } else {
        setTimeout(() => {
          window.location.href = "thankyou.html";
        }, 1000);
      }
    })
    .catch((error) => {});
}

function sendOtp() {
  document.querySelector(".verfication-no1").innerHTML = phoneNo;
  // document.querySelector(".verfication-no2").innerHTML = phoneNo;
  document.querySelector(".verfication-no3").innerHTML = phoneNo;
  axios
    .post(
      `https://api-dcrm.fincity.com/open/opportunity/send-otp?token=${token}`
    )
    .then((res) => {
      data = res?.data;
    })
    .catch((err) => {});
}

function resendOtp(count) {
  document.querySelector(".verfication-no1").innerHTML = phoneNo;
  //   document.querySelector(".verfication-no2").innerHTML = phoneNo;
  document.querySelector(".verfication-no3").innerHTML = phoneNo;
  axios
    .post(
      `https://api-dcrm.fincity.com/open/opportunity/send-otp?token=${token}`
    )
    .then((res) => {
      data = res?.data;
      document.querySelector(
        count == 1 ? ".resendOtp1" : count == 2 ? ".resendOtp2" : ".resendOtp3"
      ).innerHTML = "OTP sent!";
    })
    .catch((err) => {});
}

function verifyOtp(e, check) {
  e.stopPropagation();
  let otp =
    document.querySelector(
      check == 1 ? "#_1st" : check == 2 ? "#_1st_" : "#__1st"
    )?.value +
    document.querySelector(
      check == 1 ? "#_2nd" : check == 2 ? "#_2nd_" : "#__2nd"
    )?.value +
    document.querySelector(
      check == 1 ? "#_3rd" : check == 2 ? "#_3rd_" : "#__3rd"
    )?.value +
    document.querySelector(
      check == 1 ? "#_4th" : check == 2 ? "#_4th_" : "#__4th"
    )?.value;
  let body = {
    token: data?.token,
    otp: otp,
  };

  axios
    .post(`https://api-dcrm.fincity.com/open/opportunity/verify`, body)
    .then((res) => {
      document.querySelector(
        check == 1
          ? ".otpVerification1"
          : check == 2
          ? ".otpVerification2"
          : ".otpVerification3"
      ).style.display = "none";
      document.querySelector(
        check == 1 ? ".location1" : check == 2 ? ".location2" : ".location3"
      ).style.display = "flex";
      setTimeout(() => {
        window.location.href = "https://dcrm.fincity.com/?&user=consumer";
      }, 5000);
    })
    .catch((err) => {});
}

const optionLocation = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
};

let data;

function detectLocation(e, check) {
  document.querySelector(
    check == 1 ? ".detected1" : check == 2 ? ".detected2" : ".detected3"
  ).innerHTML = "";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // delete data?.otp;
        let body = {
          token: data?.token,
          locationDto: {
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude,
          },
        };

        axios
          .post(`https://api-dcrm.fincity.com/open/opportunity/verify`, body)
          .then((res) => {
            document.querySelector(
              check == 1
                ? ".locationButton1"
                : check == 2
                ? ".locationButton2"
                : ".locationButton3"
            ).disabled = true;
            document.querySelector(
              check == 1
                ? ".detected1"
                : check == 2
                ? ".detected2"
                : ".detected3"
            ).innerHTML = "Location Detected";
          })
          .catch((err) => {});
      },
      (error) => {
        // There was an error retrieving the location
        document.getElementById(
          check == 1 ? ".detected1" : check == 2 ? ".detected2" : ".detected3"
        ).innerText = "Failed to fetch Location!";
      },
      optionLocation
    );
  } else {
    document.querySelector(
      check == 1 ? ".detectText1" : check == 2 ? ".detectText2" : ".detectText3"
    ).innerText = "Failed to fetch Location!";
  }
}

function checkNew(e, count) {
  let name = document.querySelector(
    count == 1 ? "#name1" : count == 2 ? "#name2" : "#name3"
  ).value;
  let phone = document.querySelector(
    count == 1 ? "#phone1" : count == 2 ? "#phone2" : "#phone3"
  ).value;
  let email = document.querySelector(
    count == 1 ? "#email1" : count == 2 ? "#email2" : "#email3"
  ).value;
  let checkboxValue = document.querySelector(
    count == 1 ? ".checkbox1" : count == 2 ? ".checkbox2" : ".checkbox3"
  ).checked;
  let btn = document.querySelector(
    count == 1 ? ".getInfoBtn1" : count == 2 ? ".getInfoBtn2" : ".getInfoBtn3"
  );
  if (name !== "" && phone !== "" && email !== "" && checkboxValue) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

function inputChange(e, count) {
  checkNew(e, count);
}

function readMore(e, count) {
  e.stopPropagation();
  let lessText1 = document.querySelector(
    count == 1 ? ".lessText1" : count == 2 ? ".lessText2" : ".lessText3"
  );
  let moreText1 = document.querySelector(
    count == 1 ? ".moreText1" : count == 2 ? ".moreText2" : ".moreText3"
  );
  lessText1.style.display = "none";
  moreText1.style.display = "block";
}

function readLess(e, count) {
  e.stopPropagation();
  let lessText1 = document.querySelector(
    count == 1 ? ".lessText1" : count == 2 ? ".lessText2" : ".lessText3"
  );
  let moreText1 = document.querySelector(
    count == 1 ? ".moreText1" : count == 2 ? ".moreText2" : ".moreText3"
  );
  lessText1.style.display = "block";
  moreText1.style.display = "none";
}

function changePhoneNo1(e, count) {
  let enquiryForm = document.querySelector(
    count == 1
      ? ".enquiryMain1"
      : count == 2
      ? ".enquiryMain2"
      : ".enquiryMain3"
  );
  let verifyOtp = document.querySelector(
    count == 1
      ? ".otpVerification1"
      : count == 2
      ? ".otpVerification2"
      : ".otpVerification3"
  );
  verifyOtp.style.display = "none";
  enquiryForm.style.display = "flex";
}

function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function moveFocusBack(e) {
  var prevInput = e.target.previousElementSibling;

  if (e.key === "Backspace" && e.target.value === "" && prevInput != null) {
    prevInput.focus();
  }
}

// Programmatically click the button
setTimeout(() => {
  $(".modal").modal("show");
}, 1000);

function showMobileMenu() {
  //   document.querySelector(".mobilemenu").style.display = "block";
  document.querySelector(".mobileMenuContainer").style.width = "100%";
}

function hideMobileMenu(event) {
  if (event.target != document.querySelector(".mobilemenu")) {
    document.querySelector(".mobileMenuContainer").style.display = "none";
    document.querySelector(".mobileMenuContainer").style.width = "0";
    setTimeout(() => {
      document.querySelector(".mobileMenuContainer").style.display = "flex";
    }, 10);
  }
}

// //////////////mobile player
// var video2 = document.querySelector(".video-container2");
// function handleIntersection2(entries) {
//   entries.forEach(function (entry) {
//     if (entry.isIntersecting) {
//       section2[0].pause();
//       section2[1].pause();
//       section2[2].pause();
//       section2[currentIndex2].play();
//     } else {
//       section2[currentIndex2].pause();
//     }
//   });
// }
// var observer2 = new IntersectionObserver(handleIntersection2);
// observer2.observe(video2);
