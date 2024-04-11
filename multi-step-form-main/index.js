const side = document.querySelector(".side");
const side_ul = document.querySelector(".side_ul");
const main = document.querySelector(".main");
const back_btn = document.querySelector(".back_btn");
const nextButton = document.querySelector(".next_btn");

let currentStep = 0;
const sideContent = [
  { step: "STEP 1", info: "Your info" },
  { step: "STEP 2", info: "Select plan" },
  { step: "STEP 3", info: "Add-ons" },
  { step: "STEP 4", info: "Summary" },
];

sideContent.forEach(({ step, info }) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${step}</p><p>${info}</p>`;
  li.classList.add("side_li");
  side_ul.appendChild(li);
});

const mainContent = [
  {
    title: "Personal info",
    description: " Please provide your name, email address, and phone number.",
    content: `
      <label for="name">Name</label>
      <input type="text" id="name" name="name">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email">
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone">
    `,
  },
  {
    title: "Select your plan",
    description: "You have option of monthly or yearly billing",
    content: `
      <div class="select_box">
        <div class="select"><p>Arcade</p><p>$9/mo</p></div>
        <div class="select"><p>Advanced</p><p>$12/mo</p></div>
        <div class="select"><p>Pro</p><p>$15/mo</p></div>
      </div>
      <div>
        <span>Monthly</span>
        <label class="toggle">
          <input type="checkbox">
          <span class="toggle_slider round">
          </span>
        </label>
        <span>Yearly</span>
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
          <span>+$1/mo</span>
        </div>
        <div class="service_select">
          <input type="checkbox"/>
          <div>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$2/mo</span>
        </div>
        <div class="service_select">
          <input type="checkbox"/>
          <div>
            <p>Customizable Profile</p>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$2/mo</span>
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

const updateContent = () => {
  const { title, description, content } = mainContent[currentStep];
  main.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <div>${typeof content === "function" ? content() : content}</div>
  `;

  if (currentStep === 1) {
    const plans = document.querySelectorAll(".select");
    plans.forEach((plan) => {
      plan.addEventListener("click", () => {
        selectedPlan = {
          name: plan.querySelector("p").innerText,
          price: plan.querySelector("p + p").innerText,
        };
        updateContent();
      });
    });
  }
  if (currentStep === 2) {
    const serviceSelects = document.querySelectorAll(
      '.service_select input[type="checkbox"]'
    );
    serviceSelects.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          const serviceName =
            checkbox.parentElement.querySelector("p").innerText;
          const servicePrice = parseFloat(
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
        selectedServices = [];
        selectedPlan = { name: "Arcade", price: "$9/mo" };
        updateContent();
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
    }
  });

  main.appendChild(nextButton);
};
const init = () => {
  updateContent();
};

init();