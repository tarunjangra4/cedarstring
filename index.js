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

// Programmatically click the button
setTimeout(() => {
  $(".modal").modal("show");
}, 1000);

var lottieElement = document.getElementById("lottieAnimation");

var animation = lottie.loadAnimation({
  container: lottieElement, // Element to render the animation
  renderer: "svg", // Renderer type ('svg', 'canvas', 'html')
  loop: true, // Whether to loop the animation
  autoplay: true, // Whether to autoplay the animation
  path: "animation.json", // Path to your Lottie JSON file
});

// document.querySelector(".zoom").addEventListener("click", () => {
//   document.querySelector(".zoom").style.width = "120%";
// });

var section = document.querySelector("#zoom");

// Create a new Intersection Observer instance
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // If the section is in the viewport
      // Update the style of the section
      section.style.width = "120%";
    } else {
      // If the section is not in the viewport
      // Reset the style of the section
      section.style.width = "100%";
    }
  });
});

observer.observe(section);

window.addEventListener("load", () => {
  console.log("kadkjfakjjl");
  dash1[0].style.width = "50px";
  dash1[0].style.border = "1.5px solid black";
  dash2[0].style.width = "50px";
  dash2[0].style.border = "1.5px solid black";
  dash3[0].style.width = "50px";
  dash3[0].style.border = "1.5px solid black";
  dash4[0].style.width = "50px";
  dash4[0].style.border = "1.5px solid black";
});

var dash1 = document.querySelectorAll(".bottom-dash1");

function changeDash(currentIndex) {
  for (let i = 0; i < dash1.length; i++) {
    dash1[i].style.width = "20px";
    dash1[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash1[currentIndex].style.width = "50px";
  dash1[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

var container = document.querySelector(".video-container1");
var sections = document.querySelectorAll(".bed-video");
var currentIndex = 0;

// document.addEventListener("click", function () {
//     sections[0].play();
// });

document.getElementById("rightScroll1").addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= sections.length) {
    currentIndex = 0;
  }
  sections[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  console.log("abc");
  sections[currentIndex].play();
  changeDash(currentIndex);
});

document.getElementById("leftScroll1").addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sections.length - 1;
  }
  sections[currentIndex].scrollIntoView({ behavior: "smooth" });
  sections[currentIndex].play();
  changeDash(currentIndex);
});
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

var dash2 = document.querySelectorAll(".bottom-dash2");

function changeDash2(currentIndex) {
  for (let i = 0; i < dash2.length; i++) {
    dash2[i].style.width = "20px";
    dash2[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash2[currentIndex].style.width = "50px";
  dash2[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

var container2 = document.querySelector(".video-container2");
var sections2 = document.querySelectorAll(".living-video");
var currentIndex2 = 0;

document.addEventListener("click", function () {
  //   sections2[0].play();
});

document.getElementById("rightScroll2").addEventListener("click", function () {
  currentIndex2++;
  if (currentIndex2 >= sections2.length) {
    currentIndex2 = 0;
  }
  sections2[currentIndex2].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  console.log("abc");
  sections2[currentIndex2].play();
  changeDash2(currentIndex2);
});

document.getElementById("leftScroll2").addEventListener("click", function () {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = sections2.length - 1;
  }
  sections2[currentIndex2].scrollIntoView({ behavior: "smooth" });
  sections2[currentIndex2].play();
  changeDash2(currentIndex2);
});

////////////////////////////////
///////////////////////////////
/////////////////////////////////section3
var dash3 = document.querySelectorAll(".bottom-dash3");

function changeDash3(currentIndex) {
  for (let i = 0; i < dash3.length; i++) {
    dash3[i].style.width = "20px";
    dash3[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash3[currentIndex].style.width = "50px";
  dash3[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

var container3 = document.querySelector(".video-container3");
var sections3 = document.querySelectorAll(".bath-video");
var currentIndex3 = 0;

document.addEventListener("click", function () {
  //   sections3[0].play();
});

document.getElementById("rightScroll3").addEventListener("click", function () {
  currentIndex3++;
  if (currentIndex3 >= sections3.length) {
    currentIndex3 = 0;
  }
  sections3[currentIndex3].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  sections3[currentIndex3].play();
  changeDash3(currentIndex3);
});

document.getElementById("leftScroll3").addEventListener("click", function () {
  currentIndex3--;
  if (currentIndex3 < 0) {
    currentIndex3 = sections3.length - 1;
  }
  sections3[currentIndex3].scrollIntoView({ behavior: "smooth" });
  sections3[currentIndex3].play();
  changeDash3(currentIndex3);
});

////////////////////////////////
///////////////////////////////
/////////////////////////////////section3
var dash4 = document.querySelectorAll(".bottom-dash4");

function changeDash4(currentIndex) {
  for (let i = 0; i < dash4.length; i++) {
    dash4[i].style.width = "20px";
    dash4[i].style.border = "1.5px solid rgb(214, 213, 213)";
  }
  dash4[currentIndex].style.width = "50px";
  dash4[currentIndex].style.border = "1.5px solid rgb(113, 112, 112)";
}

var container4 = document.querySelector(".video-container4");
var sections4 = document.querySelectorAll(".balc-video");
var currentIndex4 = 0;

document.addEventListener("click", function () {
  //   sections3[0].play();
});

document.getElementById("rightScroll4").addEventListener("click", function () {
  currentIndex4++;
  if (currentIndex4 >= sections4.length) {
    currentIndex4 = 0;
  }
  sections4[currentIndex4].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
  sections4[currentIndex4].play();
  changeDash4(currentIndex4);
});

document.getElementById("leftScroll4").addEventListener("click", function () {
  currentIndex4--;
  if (currentIndex4 < 0) {
    currentIndex4 = sections4.length - 1;
  }
  sections4[currentIndex4].scrollIntoView({ behavior: "smooth" });
  sections4[currentIndex4].play();
  changeDash4(currentIndex4);
});

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
  console.log("get info", name, phone, email);
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
    // projectId: 24,
    projectId: 103,
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
    .post("http://api-dcrm-dev.fincity.in/open/opportunity", body)
    .then((res) => {
      //   if (isOtp) {
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
      //   } else {
      //     setTimeout(() => {
      //         window.location.href = "thankyou.html";
      //     }, 1000);
      //   }
    })
    .catch((error) => {});
}

function sendOtp() {
  document.querySelector(".verfication-no1").innerHTML = phoneNo;
  // document.querySelector(".verfication-no2").innerHTML = phoneNo;
  document.querySelector(".verfication-no3").innerHTML = phoneNo;
  console.log(document.querySelector(".verfication-no3").innerHTML);
  axios
    .post(
      `http://api-dcrm-dev.fincity.in/open/opportunity/send-otp?token=${token}`
    )
    .then((res) => {
      data = res?.data;
    })
    .catch((err) => {});
}

function resendOtp(count) {
  //   document.querySelector(".verfication-no1").innerHTML = phoneNo;
  //   document.querySelector(".verfication-no2").innerHTML = phoneNo;
  document.querySelector(".verfication-no3").innerHTML = phoneNo;
  console.log(document.querySelector(".verfication-no3").innerHTML);
  axios
    .post(
      `http://api-dcrm-dev.fincity.in/open/opportunity/send-otp?token=${token}`
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
    .post(`http://api-dcrm-dev.fincity.in/open/opportunity/verify`, body)
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
        // window.location.href = "https://dcrm.fincity.com/?&user=consumer";
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
          .post(`http://api-dcrm-dev.fincity.in/open/opportunity/verify`, body)
          .then((res) => {
            document.querySelector(
              check == 1
                ? ".locationButton1"
                : check == 2
                ? ".locationButton2"
                : ".locationButton3"
            ).disabled = true;
            console.log(
              document.querySelector(
                check == 1
                  ? ".locationButton1"
                  : check == 2
                  ? ".locationButton2"
                  : ".locationButton3"
              ).disabled
            );
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
  console.log("count ", count);
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
    console.log("if");
    btn.disabled = false;
  } else {
    console.log("else");
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

function showMobileMenu() {
  //   document.querySelector(".mobilemenu").style.display = "block";
  document.querySelector(".mobileMenuContainer").style.width = "100%";
}

function hideMobileMenu(event) {
  console.log(event.target);
  if (event.target != document.querySelector(".mobilemenu")) {
    document.querySelector(".mobileMenuContainer").style.display = "none";
    document.querySelector(".mobileMenuContainer").style.width = "0";
    setTimeout(() => {
      document.querySelector(".mobileMenuContainer").style.display = "flex";
    }, 10);
  }
}
