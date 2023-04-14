var input3 = document.querySelector("#phone3");
var iti3 = window.intlTelInput(input3, {
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

console.log(iti3, "yay");

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

function test(e) {}

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

document.addEventListener("click", function () {
  sections[0].play();
});

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
    count == 1 ? "#name1" : count == 2 ? "#name2" : "#name"
  )?.value;
  let phone = document.querySelector(
    count == 1 ? "#phone1" : count == 2 ? "#phone2" : "#phone"
  )?.value;
  let email = document.querySelector(
    count == 1 ? "#email1" : count == 2 ? "#email2" : "#email"
  )?.value;
  openApi(name, phone, email, count);
}

function openApi(name, phone, email, count) {
  //   phoneNo = phone;
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
        // token = res?.data?.token;
        sendOtp();
      } else {
        setTimeout(() => {
          window.location.href = "thankyou.html";
        }, 1000);
      }
    })
    .catch((error) => {});
}

function checkNew(e, count) {
  console.log("on change");
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
  console.log("input change");
  checkNew(e, 3);
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
