const header = document.getElementById("header");
const hero = document.getElementById("hero");
const learn = document.getElementById("learn");
const faq = document.getElementById("faq");
const footer = document.getElementById("footer");

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

const bannerButton = document.getElementById("get-started");
const inputName = document.getElementById("name");
const password = document.getElementById("password");
const logOut = document.getElementById("logOut");
const buttons = document.querySelectorAll(".button-sp");
const login = document.getElementById("login_model");

bannerButton.addEventListener("click", function () {
  if (password.value === "123456" && inputName.value === "test") {
    hero.classList.add("hidden");
    learn.classList.remove("hidden");
    faq.classList.remove("hidden");
    header.classList.remove("hidden");
    footer.classList.remove("hidden");
    Swal.fire({
      title: "অভিনন্দন! ",
      text: "আপনার লগ ইন সম্পূর্ণ হয়েছে!",
      icon: "success",
      draggable: true,
    });
  } else {
    Swal.fire({
      title: "Invalid Input",
      text: "Please try again!",
      icon: "error",
    });
  }
});

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

function loadAllButton() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => {
      displayAllButton(data.data);
    });
}

function displayAllButton(display) {
  const VocabulariesBtnContainer = document.getElementById(
    "vocabularies-btn-container"
  );

  for (let btn of display) {
    const createButton = document.createElement("button");
    createButton.innerHTML = `
     <button id="btn-${btn.id}" onclick="loadCategoryCard(${btn.level_no})" 
     class="mt-2 btn mr-3 text-blue-700 hover:bg-blue-700 hover:text-white button-sp focus:bg-blue-700 focus:text-white">
     <i  class="fa-solid fa-book-open"></i>${btn.lessonName}
     </button>`;
    VocabulariesBtnContainer.append(createButton);
  }
}
loadAllButton();

// Load & Display card
function lodeAllCard() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => displayCard(data.data));
}

function displayCard(displayCard) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  if (displayCard.length == 0) {
    cardContainer.innerHTML = `
      <div class="w-10/12 mx-auto bg-[#F8F8F8] p-4 rounded-xl mt-10 col-span-full">
        <div class=" p-6 text-center space-y-5">
          <img class="mx-auto" src="./assets/alert-error.png" alt="">
          <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <p class="text-4xl font-semibold">নেক্সট Lesson এ যান</p>
        </div>
      </div>
    `;
  }

  for (let card of displayCard) {
    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
      <div class="bg-white hover:bg-blue-50 shadow-xl p-6 text-center space-y-2 font-bold rounded-xl">
        <h4 class="text-2xl">${card.word}</h4>
        <p>Meaning / Pronunciation</p>
        <p>${card.meaning ?? "অর্থ পাওয়া যায়নি"} / ${card.pronunciation}</p>
  
        <div class="flex justify-around mt-10 text-xl">
          <!-- Info Icon -->
          <i onclick="loadCardDetails('${card.id}')" 
             class="p-3 bg-[#1A91FF10] rounded-xl cursor-pointer fa-solid fa-circle-info">
          </i>
  
          <!-- Volume Icon -->
          <i class="p-3 bg-[#1A91FF10] rounded-xl cursor-pointer fa-solid fa-volume-high">
          </i>
        </div>
      </div>
    `;
    cardContainer.append(createDiv);
  }
}

const loadCardDetails = (videoID) => {
  const url = `
  https://openapi.programming-hero.com/api/word/${videoID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCardDetails(data.data));
};

const displayCardDetails = (cardDetails) => {
  document.getElementById("card_details").showModal();
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
   <h2 class="text-2xl font-semibold">${
     cardDetails.word
   } (<i class="fa-solid fa-microphone"></i> : ${
    cardDetails.pronunciation
  })</h2>
    <p class="mt-5">Meaning</p>
    <span>${cardDetails.meaning ?? "অর্থ পাওয়া যায়নি"}</span>
    <p class="mt-5">Example</p>
    <span class="mb-8">${cardDetails.sentence}</span>
    <div class="mt-5" >
    <p class="">সমার্থক শব্দ গুলো</p>
    <div " id="word-container"> 
     
    </div>
    </div>
  `;
  const getWordButton = cardDetails.synonyms;
  const wordButtonContainer = document.getElementById("word-container");
  for (let wordButton of getWordButton) {
    const createWordButton = document.createElement("button");
    createWordButton.innerHTML = `
    <button class="mr-5 mt-2 btn hover:bg-blue-400 hover:text-white bg-blue-100">${wordButton}</button> 
    `;
    wordButtonContainer.append(createWordButton);
  }
};

// Load Category Card
const loadCategoryCard = (cardID) => {
  const url = `https://openapi.programming-hero.com/api/level/${cardID}`;
  const cardContainer = document.getElementById("card-container");

  // Loading Spinner
  cardContainer.innerHTML = `
  <div class="flex flex-col col-span-3 justify-center items-center w-full">
  <span class="loading loading-spinner loading-md loader"></span>
  </div>
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCard(data.data);
    });
};

// Scroll to section
function scrollToFAQ() {
  const faqSection = document.getElementById("faq");
  window.scrollTo({
    top: faqSection.offsetTop,
    behavior: "smooth",
  });
}
function scrollToLearn() {
  const learnSection = document.getElementById("learn");
  window.scrollTo({
    top: learnSection.offsetTop,
    behavior: "smooth",
  });
}

// Logout
logOut.addEventListener("click", function () {
  window.location.reload();
});