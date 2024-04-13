const side = document.querySelector(".side");
const side_ul = document.querySelector(".side_ul");
const main = document.querySelector(".main");
const back_btn = document.querySelector(".back_btn");
const nextButton = document.querySelector(".next_btn");
let currentStep = 0;
const sideContent = [
  { step: "STEP 1", info: "YOUR INFO", Number: 1 },
  { step: "STEP 2", info: "SELECT PLAN", Number: 2 },
  { step: "STEP 3", info: "ADD-ONS", Number: 3 },
  { step: "STEP 4", info: "SUMMARY", Number: 4 },
];

function createListItems() {
  sideContent.forEach(({ step, info, Number }) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="side_num">${Number}</div>
    <div><p>${step}</p><p>${info}</p></div>`;
    li.classList.add("side_li");
    side_ul.appendChild(li);
  });
}

createListItems();

const side_nums = document.querySelectorAll(".side_num");
const side_num0 = side_nums[0];
const side_num1 = side_nums[1];
const side_num2 = side_nums[2];
const side_num3 = side_nums[3];

function updateStyles() {
  side_nums.forEach((side_num, index) => {
    if (currentStep === index) {
      side_num.style.backgroundColor = "skyblue";
      side_num.style.color = "black";
    } else {
      side_num.style.backgroundColor = "";
      side_num.style.color = "";
      side_num.style.border = "";
    }
  });
  const monthlyText = document.querySelector(".month");
  const yearlyText = document.querySelector(".year");

  if (toggleState) {
    monthlyText.style.color = "#cacbce";
    yearlyText.style.color = "#1c1866";
  } else {
    monthlyText.style.color = "#1c1866";
    yearlyText.style.color = "#cacbce";
  }
}

const mainContent = [
  {
    title: "Personal info",
    description: " Please provide your name, email address, and phone number.",
    content: `
      <div class="personal_info_form">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="e.g.Stephen King">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="e.g.stephenking@lorem.com">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="e.g.+1 234 567 890">
      </div>
    `,
  },
  {
    title: "Select your plan",
    description: "You have option of monthly or yearly billing",
    content: `
      <div class="select_box">
        <div class="select"><img class="select_img" src="./assets/images/icon-arcade.svg" alt="Arcade"><p >Arcade</p><p class="price">$9/mo</p></div>
        <div class="select"><img class="select_img" src="./assets/images/icon-advanced.svg" alt="Advanced"><p>Advanced</p><p class="price">$12/mo</p></div>
        <div class="select"><img class="select_img" src="./assets/images/icon-pro.svg" alt="Pro"><p>Pro</p><p class="price">$15/mo</p></div>
      </div>
      <div class="toggle_box">
        <div>
          <span class="month">Monthly</span>
          <label class="toggle">
            <input type="checkbox">
           <span class="toggle_slider round">
           </span>
          </label>
          <span class="year">Yearly</span>
        </div>
      </div>  
    `,
  },
  {
    title: "Pick add-ons",
    description: "Add-ons enhance your gaming experience.",
    content: `
      <div class="service_select_box">
        <div class="service_select">
          <input type="checkbox"/>
          <div>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          <span class="service_price">+$1/mo</span>
        </div>
        <div class="service_select">
          <input type="checkbox"/>
          <div>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span class="service_price">+$2/mo</span>
        </div>
        <div class="service_select">
          <input type="checkbox"/>
          <div>
            <p>Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </div>
          <span class="service_price">+$2/mo</span>
        </div>           
      </div>
    `,
  },
  {
    title: "Finishing up",
    description: "Double-check everthing looks OK before confirming.",
    content: () => `
    <div>
      <div>
        <div>
          <p>
            ${selectedPlan.name}
          </p>
          <p>
            Change
          </p>
        </div>
        <p>${selectedPlan.price}</p>
      </div>
      <div>
        ${selectedServices
          .map(
            (service) => `
          <div>
            <p>${service.name}</p>
            <p>${service.price}/mo</p>
          </div>
        `
          )
          .join("")}</div>
        <div></div>
      </div>
    </div>
  `,
  },
];

let selectedPlan = {
  name: "Arcade",
  price: "$9/mo",
};
let selectedServices = [];

let activePlanIndex = 0; // 추가된 코드
let toggleState = false;
let serviceCheckState = false;
const updateContent = () => {
  const { title, description, content } = mainContent[currentStep];
  main.innerHTML = `
    <div>
      <h2>${title}</h2>
      <p>${description}</p>
      <div>${typeof content === "function" ? content() : content}</div>
    </div>
  `;

  if (currentStep === 1) {
    const plans = document.querySelectorAll(".select");
    const toggleSwitch = document.querySelector(
      '.toggle input[type="checkbox"]'
    );
    const monthlyText = document.querySelector(".month");
    const yearlyText = document.querySelector(".year");
    const price = document.querySelectorAll(".price");
    const monthlyPrice = [
      parseFloat(price[0].innerText.replace(/[^0-9.-]+/g, "")),
      parseFloat(price[1].innerText.replace(/[^0-9.-]+/g, "")),
      parseFloat(price[2].innerText.replace(/[^0-9.-]+/g, "")),
    ];
    const yearlyPrice = [
      monthlyPrice[0] * 10,
      monthlyPrice[1] * 10,
      monthlyPrice[2] * 10,
    ];
    const selectAll = document.querySelectorAll(".select");
    toggleSwitch.checked = toggleState;
    if (toggleSwitch.checked) {
      price[0].innerText = `$${yearlyPrice[0]}/yr`;
      price[1].innerText = `$${yearlyPrice[1]}/yr`;
      price[2].innerText = `$${yearlyPrice[2]}/yr`;

      const Free = document.createElement("span");
      Free.classList.add("free");
      Free.innerText = "2 months free";

      selectAll.forEach((select) => {
        select.appendChild(Free.cloneNode(true));
      });
      yearlyText.style.color = "#1c1866";
      monthlyText.style.color = "#cacbce";
    } else {
      price[0].innerText = `$${monthlyPrice[0]}/mo`;
      price[1].innerText = `$${monthlyPrice[1]}/mo`;
      price[2].innerText = `$${monthlyPrice[2]}/mo`;

      selectAll.forEach((select) => {
        const Free = select.querySelector(".free");
        if (Free) {
          select.removeChild(Free);
        }
      });
    }
    toggleSwitch.addEventListener("change", () => {
      toggleState = toggleSwitch.checked;
      if (toggleState === true) {
        const Free = document.createElement("span");
        Free.classList.add("free");
        Free.innerText = "2 months free";
        monthlyText.style.color = "#cacbce";
        yearlyText.style.color = "#1c1866";
        selectAll.forEach((select) => {
          select.appendChild(Free.cloneNode(true));
        });

        price[0].innerText = `$${yearlyPrice[0]}/yr`;
        price[1].innerText = `$${yearlyPrice[1]}/yr`;
        price[2].innerText = `$${yearlyPrice[2]}/yr`;

        selectedPlan.price = `$${yearlyPrice[activePlanIndex]}/yr`;
        selectedPlan.type = "yearly";
      } else {
        monthlyText.style.color = "#1c1866";
        yearlyText.style.color = "#cacbce";

        price[0].innerText = `$${monthlyPrice[0]}/mo`;
        price[1].innerText = `$${monthlyPrice[1]}/mo`;
        price[2].innerText = `$${monthlyPrice[2]}/mo`;

        selectedPlan.price = `$${monthlyPrice[activePlanIndex]}/mo`;
        selectedPlan.type = "monthly";

        selectAll.forEach((select) => {
          const Free = select.querySelector(".free");
          if (Free) {
            select.removeChild(Free);
          }
        });
      }
    });

    monthlyText.style.color = "#1c1866";
    yearlyText.style.color = "#cacbce";

    plans.forEach((plan, index) => {
      if (index === activePlanIndex) {
        plan.classList.add("active");
      }

      plan.addEventListener("click", () => {
        plans.forEach((plan) => {
          plan.classList.remove("active");
        });

        plan.classList.add("active");

        activePlanIndex = index;

        const planPrice = plan.querySelector(".price").innerText;

        if (!toggleSwitch.checked) {
          selectedPlan = {
            name: plan.querySelector("p").innerText,
            price: planPrice,
            type: "monthly",
          };
        } else {
          selectedPlan = {
            name: plan.querySelector("p").innerText,
            price: planPrice,
            type: "yearly",
          };
        }
      });
    });
  }
  const monthlyPrices = {
    "Online service": 1,
    "Larger storage": 2,
    "Customizable Profile": 2,
  };
  if (currentStep === 2) {
    if (selectedPlan.type === "monthly") {
      selectedServices.forEach((service) => {
        const monthlyPrice = monthlyPrices[service.name];

        service.price = monthlyPrice;
      });
    } else {
      selectedServices.forEach((service) => {
        const monthlyPrice = monthlyPrices[service.name];

        service.price = monthlyPrice * 10;
      });
    }

    const serviceSelects = document.querySelectorAll(
      '.service_select input[type="checkbox"]'
    );
    const servicePrices = document.querySelectorAll(".service_price");
    if (selectedPlan.type === "yearly") {
      servicePrices.forEach((price) => {
        const currentPrice = parseFloat(price.innerText.replace(`+$`, ""));
        price.innerText = `+$${currentPrice * 10}/yr`;
      });
    }
    serviceSelects.forEach((checkbox) => {
      if (selectedServices.length > 0) {
        selectedServices.forEach((service) => {
          const serviceName =
            checkbox.parentElement.querySelector("p").innerText;
          if (service.name === serviceName) {
            checkbox.checked = true;
          }
        });
      }
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          const serviceName =
            checkbox.parentElement.querySelector("p").innerText;
          let servicePrice = parseFloat(
            checkbox.parentElement
              .querySelector("span")
              .innerText.replace(`+$`, "")
          );
          selectedServices.push({ name: serviceName, price: servicePrice });
        } else {
          const serviceName =
            checkbox.parentElement.querySelector("p").innerText;
          const index = selectedServices.findIndex(
            (service) => service.name === serviceName
          );
          if (index > -1) {
            selectedServices.splice(index, 1);
          }
        }
      });
    });
  }
  if (currentStep > 0) {
    const back_btn = document.createElement("button");
    back_btn.innerText = "Go Back";
    back_btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateContent();
        updateStyles();
      }
    });

    main.appendChild(back_btn);
  }

  const nextButton = document.createElement("button");
  nextButton.innerText = "Next Step";
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      currentStep++;
      updateContent();
      updateStyles();
    }
  });

  main.appendChild(nextButton);
};

const init = () => {
  updateContent();
  updateStyles();
};

init();
