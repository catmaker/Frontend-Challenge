/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./validation.js\");\n\r\n\r\nconst side = document.querySelector(\".side\");\r\nconst side_ul = document.querySelector(\".side_ul\");\r\nconst main = document.querySelector(\".main\");\r\n\r\nlet currentStep = 0;\r\nconst sideContent = [\r\n  { step: \"STEP 1\", info: \"YOUR INFO\", Number: 1 },\r\n  { step: \"STEP 2\", info: \"SELECT PLAN\", Number: 2 },\r\n  { step: \"STEP 3\", info: \"ADD-ONS\", Number: 3 },\r\n  { step: \"STEP 4\", info: \"SUMMARY\", Number: 4 },\r\n];\r\n\r\nfunction createListItems() {\r\n  sideContent.forEach(({ step, info, Number }) => {\r\n    const li = document.createElement(\"li\");\r\n    li.innerHTML = `<div class=\"side_num\">${Number}</div>\r\n    <div><p>${step}</p><p>${info}</p></div>`;\r\n    li.classList.add(\"side_li\");\r\n    side_ul.appendChild(li);\r\n  });\r\n}\r\n\r\ncreateListItems();\r\n\r\nconst side_nums = document.querySelectorAll(\".side_num\");\r\n\r\nfunction updateStyles() {\r\n  side_nums.forEach((side_num, index) => {\r\n    if (currentStep === index) {\r\n      side_num.style.backgroundColor = \"skyblue\";\r\n      side_num.style.color = \"black\";\r\n    } else {\r\n      side_num.style.backgroundColor = \"\";\r\n      side_num.style.color = \"\";\r\n      side_num.style.border = \"\";\r\n    }\r\n  });\r\n  const monthlyText = document.querySelector(\".month\");\r\n  const yearlyText = document.querySelector(\".year\");\r\n\r\n  if (toggleState) {\r\n    monthlyText.style.color = \"#cacbce\";\r\n    yearlyText.style.color = \"#1c1866\";\r\n  } else {\r\n    monthlyText.style.color = \"#1c1866\";\r\n    yearlyText.style.color = \"#cacbce\";\r\n  }\r\n}\r\n\r\nconst mainContent = [\r\n  {\r\n    title: \"Personal info\",\r\n    description: \" Please provide your name, email address, and phone number.\",\r\n    content: `\r\n      <div class=\"personal_info_form\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"e.g.Stephen King\">\r\n        <label for=\"email\">Email Address</label>\r\n        <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"e.g.stephenking@lorem.com\">\r\n        <label for=\"phone\">Phone Number</label>\r\n        <input type=\"tel\" id=\"phone\" name=\"phone\" placeholder=\"e.g.+1 234 567 890\">\r\n      </div>\r\n    `,\r\n  },\r\n  {\r\n    title: \"Select your plan\",\r\n    description: \"You have option of monthly or yearly billing\",\r\n    content: `\r\n      <div class=\"select_box\">\r\n        <div class=\"select\"><img class=\"select_img\" src=\"./assets/images/icon-arcade.svg\" alt=\"Arcade\"><p >Arcade</p><p class=\"price\">$9/mo</p></div>\r\n        <div class=\"select\"><img class=\"select_img\" src=\"./assets/images/icon-advanced.svg\" alt=\"Advanced\"><p>Advanced</p><p class=\"price\">$12/mo</p></div>\r\n        <div class=\"select\"><img class=\"select_img\" src=\"./assets/images/icon-pro.svg\" alt=\"Pro\"><p>Pro</p><p class=\"price\">$15/mo</p></div>\r\n      </div>\r\n      <div class=\"toggle_box\">\r\n        <div>\r\n          <span class=\"month\">Monthly</span>\r\n          <label class=\"toggle\">\r\n            <input type=\"checkbox\">\r\n           <span class=\"toggle_slider round\">\r\n           </span>\r\n          </label>\r\n          <span class=\"year\">Yearly</span>\r\n        </div>\r\n      </div>  \r\n    `,\r\n  },\r\n  {\r\n    title: \"Pick add-ons\",\r\n    description: \"Add-ons enhance your gaming experience.\",\r\n    content: `\r\n      <div class=\"service_select_box\">\r\n        <div class=\"service_select\">\r\n          <input type=\"checkbox\"/>\r\n          <div>\r\n            <p>Online service</p>\r\n            <p>Access to multiplayer games</p>\r\n          </div>\r\n          <span class=\"service_price\">+$1/mo</span>\r\n        </div>\r\n        <div class=\"service_select\">\r\n          <input type=\"checkbox\"/>\r\n          <div>\r\n            <p>Larger storage</p>\r\n            <p>Extra 1TB of cloud save</p>\r\n          </div>\r\n          <span class=\"service_price\">+$2/mo</span>\r\n        </div>\r\n        <div class=\"service_select\">\r\n          <input type=\"checkbox\"/>\r\n          <div>\r\n            <p>Customizable Profile</p>\r\n            <p>Custom theme on your profile</p>\r\n          </div>\r\n          <span class=\"service_price\">+$2/mo</span>\r\n        </div>           \r\n      </div>\r\n    `,\r\n  },\r\n  {\r\n    title: \"Finishing up\",\r\n    description: \"Double-check everthing looks OK before confirming.\",\r\n    content: () => `\r\n    <div class=\"payment_form\">\r\n      <div class=\"service_plan_form\">\r\n        <div>\r\n          <p>\r\n            ${selectedPlan.name} (${selectedPlan.type})\r\n          </p>\r\n          <p>\r\n            Change\r\n          </p>\r\n        </div>\r\n        <p>${selectedPlan.price}</p>\r\n      </div>\r\n      <div class=\"selected_services_form\">\r\n        ${selectedServices\r\n          .map(\r\n            (service) => `\r\n          <div>\r\n            <p>${service.name}</p>\r\n            <p>$${service.price}</p>\r\n          </div>\r\n        `\r\n          )\r\n          .join(\"\")}</div>\r\n\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"total_form\">\r\n    Total <span>${selectedServices.reduce((acc, service) => {\r\n      const price = parseFloat(service.price.replace(/[^0-9.-]+/g, \"\"));\r\n      return acc + price;\r\n    }, parseFloat(selectedPlan.price.replace(/[^0-9.-]+/g, \"\")))}/${\r\n      selectedPlan.type\r\n    }</span>\r\n  </div>\r\n  `,\r\n  },\r\n];\r\n\r\nlet selectedPlan = {\r\n  name: \"Arcade\",\r\n  price: \"$9/mo\",\r\n  type: \"Monthly\",\r\n};\r\nlet selectedServices = [];\r\n\r\nlet activePlanIndex = 0; // 추가된 코드\r\nlet toggleState = false;\r\nlet serviceCheckState = false;\r\nconst updateContent = () => {\r\n  const { title, description, content } = mainContent[currentStep];\r\n  main.innerHTML = `\r\n    <div>\r\n      <h2>${title}</h2>\r\n      <p>${description}</p>\r\n      <div>${typeof content === \"function\" ? content() : content}</div>\r\n    </div>\r\n  `;\r\n\r\n  if (currentStep === 0) {\r\n    const name = document.querySelector(\"#name\");\r\n    const email = document.querySelector(\"#email\");\r\n    const phone = document.querySelector(\"#phone\");\r\n    const addBlurListener = (input, validator) => {\r\n      input.addEventListener(\"blur\", () => {\r\n        if (!validator(input.value)) {\r\n          input.style.border = \"1px solid red\";\r\n        } else {\r\n          input.style.border = \"\";\r\n        }\r\n        checkValidation();\r\n      });\r\n    };\r\n    const checkValidation = () => {\r\n      if (\r\n        name.value.length > 3 &&\r\n        (0,_validation__WEBPACK_IMPORTED_MODULE_0__.validateEmail)(email.value) &&\r\n        (0,_validation__WEBPACK_IMPORTED_MODULE_0__.validatePhoneNumber)(phone.value)\r\n      ) {\r\n        nextButton.disabled = false;\r\n        nextButton.style.backgroundColor = \"#1c1866\";\r\n      } else {\r\n        nextButton.disabled = true;\r\n        nextButton.style.backgroundColor = \"#cacbce\";\r\n      }\r\n    };\r\n\r\n    addBlurListener(name, (value) => value.length > 3);\r\n    addBlurListener(email, _validation__WEBPACK_IMPORTED_MODULE_0__.validateEmail);\r\n    addBlurListener(phone, _validation__WEBPACK_IMPORTED_MODULE_0__.validatePhoneNumber);\r\n  }\r\n  nextButton.disabled = true;\r\n  nextButton.style.backgroundColor = \"#cacbce\";\r\n\r\n  if (currentStep === 1) {\r\n    nextButton.disabled = false;\r\n    nextButton.style.backgroundColor = \"#1c1866\";\r\n    const plans = document.querySelectorAll(\".select\");\r\n    const toggleSwitch = document.querySelector(\r\n      '.toggle input[type=\"checkbox\"]'\r\n    );\r\n    const monthlyText = document.querySelector(\".month\");\r\n    const yearlyText = document.querySelector(\".year\");\r\n    const price = document.querySelectorAll(\".price\");\r\n    const monthlyPrice = [\r\n      parseFloat(price[0].innerText.replace(/[^0-9.-]+/g, \"\")),\r\n      parseFloat(price[1].innerText.replace(/[^0-9.-]+/g, \"\")),\r\n      parseFloat(price[2].innerText.replace(/[^0-9.-]+/g, \"\")),\r\n    ];\r\n    const yearlyPrice = [\r\n      monthlyPrice[0] * 10,\r\n      monthlyPrice[1] * 10,\r\n      monthlyPrice[2] * 10,\r\n    ];\r\n    const selectAll = document.querySelectorAll(\".select\");\r\n    toggleSwitch.checked = toggleState;\r\n    if (toggleSwitch.checked) {\r\n      price[0].innerText = `$${yearlyPrice[0]}/yr`;\r\n      price[1].innerText = `$${yearlyPrice[1]}/yr`;\r\n      price[2].innerText = `$${yearlyPrice[2]}/yr`;\r\n\r\n      const Free = document.createElement(\"span\");\r\n      Free.classList.add(\"free\");\r\n      Free.innerText = \"2 months free\";\r\n\r\n      selectAll.forEach((select) => {\r\n        select.appendChild(Free.cloneNode(true));\r\n      });\r\n      yearlyText.style.color = \"#1c1866\";\r\n      monthlyText.style.color = \"#cacbce\";\r\n    } else {\r\n      price[0].innerText = `$${monthlyPrice[0]}/mo`;\r\n      price[1].innerText = `$${monthlyPrice[1]}/mo`;\r\n      price[2].innerText = `$${monthlyPrice[2]}/mo`;\r\n\r\n      selectAll.forEach((select) => {\r\n        const Free = select.querySelector(\".free\");\r\n        if (Free) {\r\n          select.removeChild(Free);\r\n        }\r\n      });\r\n    }\r\n    toggleSwitch.addEventListener(\"change\", () => {\r\n      toggleState = toggleSwitch.checked;\r\n      if (toggleState === true) {\r\n        const Free = document.createElement(\"span\");\r\n        Free.classList.add(\"free\");\r\n        Free.innerText = \"2 months free\";\r\n        monthlyText.style.color = \"#cacbce\";\r\n        yearlyText.style.color = \"#1c1866\";\r\n        selectAll.forEach((select) => {\r\n          select.appendChild(Free.cloneNode(true));\r\n        });\r\n\r\n        price[0].innerText = `$${yearlyPrice[0]}/yr`;\r\n        price[1].innerText = `$${yearlyPrice[1]}/yr`;\r\n        price[2].innerText = `$${yearlyPrice[2]}/yr`;\r\n\r\n        selectedPlan.price = `$${yearlyPrice[activePlanIndex]}/yr`;\r\n        selectedPlan.type = \"Yearly\";\r\n      } else {\r\n        monthlyText.style.color = \"#1c1866\";\r\n        yearlyText.style.color = \"#cacbce\";\r\n\r\n        price[0].innerText = `$${monthlyPrice[0]}/mo`;\r\n        price[1].innerText = `$${monthlyPrice[1]}/mo`;\r\n        price[2].innerText = `$${monthlyPrice[2]}/mo`;\r\n\r\n        selectedPlan.price = `$${monthlyPrice[activePlanIndex]}/mo`;\r\n        selectedPlan.type = \"Monthly\";\r\n\r\n        selectAll.forEach((select) => {\r\n          const Free = select.querySelector(\".free\");\r\n          if (Free) {\r\n            select.removeChild(Free);\r\n          }\r\n        });\r\n      }\r\n    });\r\n\r\n    monthlyText.style.color = \"#1c1866\";\r\n    yearlyText.style.color = \"#cacbce\";\r\n\r\n    plans.forEach((plan, index) => {\r\n      if (index === activePlanIndex) {\r\n        plan.classList.add(\"active\");\r\n      }\r\n\r\n      plan.addEventListener(\"click\", () => {\r\n        plans.forEach((plan) => {\r\n          plan.classList.remove(\"active\");\r\n        });\r\n\r\n        plan.classList.add(\"active\");\r\n\r\n        activePlanIndex = index;\r\n\r\n        const planPrice = plan.querySelector(\".price\").innerText;\r\n\r\n        if (!toggleSwitch.checked) {\r\n          selectedPlan = {\r\n            name: plan.querySelector(\"p\").innerText,\r\n            price: planPrice,\r\n            type: \"Monthly\",\r\n          };\r\n        } else {\r\n          selectedPlan = {\r\n            name: plan.querySelector(\"p\").innerText,\r\n            price: planPrice,\r\n            type: \"Yearly\",\r\n          };\r\n        }\r\n      });\r\n    });\r\n  }\r\n  if (currentStep === 2) {\r\n    nextButton.disabled = false;\r\n    nextButton.style.backgroundColor = \"#1c1866\";\r\n    const serviceSelects = document.querySelectorAll(\r\n      '.service_select input[type=\"checkbox\"]'\r\n    );\r\n    const servicePrices = document.querySelectorAll(\".service_price\");\r\n    if (selectedPlan.type === \"Yearly\") {\r\n      servicePrices.forEach((price) => {\r\n        const currentPrice = parseFloat(price.innerText.replace(`+$`, \"\"));\r\n        price.innerText = `+$${currentPrice * 10}/yr`;\r\n      });\r\n    }\r\n    serviceSelects.forEach((checkbox) => {\r\n      const service_checked_div = checkbox.parentElement;\r\n      if (selectedServices.length > 0) {\r\n        selectedServices.forEach((service) => {\r\n          const serviceName =\r\n            checkbox.parentElement.querySelector(\"p\").innerText;\r\n          if (service.name === serviceName) {\r\n            checkbox.checked = true;\r\n            service_checked_div.classList.add(\"active\");\r\n          }\r\n        });\r\n      }\r\n\r\n      checkbox.addEventListener(\"change\", () => {\r\n        if (checkbox.checked) {\r\n          service_checked_div.classList.add(\"active\");\r\n          const serviceName =\r\n            checkbox.parentElement.querySelector(\"p\").innerText;\r\n          let servicePrice = parseFloat(\r\n            checkbox.parentElement\r\n              .querySelector(\"span\")\r\n              .innerText.replace(`+$`, \"\")\r\n          );\r\n          if (selectedPlan.type === \"Yearly\") {\r\n            const yearlyPrice = `${servicePrice}/yr`; // 수정된 코드\r\n            selectedServices.push({\r\n              name: serviceName,\r\n              price: yearlyPrice,\r\n              type: \"Yearly\",\r\n            });\r\n          } else {\r\n            const monthlyPrice = `${servicePrice}/mo`; // 수정된 코드\r\n            selectedServices.push({\r\n              name: serviceName,\r\n              price: monthlyPrice,\r\n              type: \"Monthly\",\r\n            });\r\n          }\r\n        } else {\r\n          service_checked_div.classList.remove(\"active\");\r\n          const serviceName =\r\n            checkbox.parentElement.querySelector(\"p\").innerText;\r\n          const index = selectedServices.findIndex(\r\n            (service) => service.name === serviceName\r\n          );\r\n          if (index > -1) {\r\n            selectedServices.splice(index, 1);\r\n          }\r\n        }\r\n      });\r\n    });\r\n  }\r\n  if (currentStep === 3) {\r\n    nextButton.disabled = false;\r\n    nextButton.style.backgroundColor = \"#1c1866\";\r\n  }\r\n  if (currentStep > 0) {\r\n    const back_btn = document.createElement(\"button\");\r\n    back_btn.classList.add(\"back_btn\");\r\n    back_btn.innerText = \"Go Back\";\r\n    back_btn.addEventListener(\"click\", () => {\r\n      if (currentStep > 0) {\r\n        currentStep--;\r\n        updateContent();\r\n        updateStyles();\r\n      }\r\n    });\r\n\r\n    main.appendChild(back_btn);\r\n  }\r\n  main.appendChild(nextButton);\r\n};\r\n\r\nconst nextButton = document.createElement(\"button\");\r\nnextButton.classList.add(\"next_btn\");\r\nnextButton.innerText = \"Next Step\";\r\nnextButton.disabled = true;\r\n\r\nnextButton.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  if (currentStep < 3) {\r\n    currentStep++;\r\n    updateContent();\r\n    updateStyles();\r\n  }\r\n});\r\n\r\nconst init = () => {\r\n  updateContent();\r\n  updateStyles();\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://multi-step-form-main/./index.js?");

/***/ }),

/***/ "./validation.js":
/*!***********************!*\
  !*** ./validation.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateEmail: () => (/* binding */ validateEmail),\n/* harmony export */   validatePhoneNumber: () => (/* binding */ validatePhoneNumber)\n/* harmony export */ });\nconst validateEmail = (email) => {\r\n  const re =\r\n    /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n  return re.test(String(email).toLowerCase());\r\n};\r\n\r\nconst validatePhoneNumber = (phoneNumber) => {\r\n  const re = /^\\+?[1-9]\\d{1,14}$/;\r\n  return re.test(phoneNumber);\r\n};\r\n\n\n//# sourceURL=webpack://multi-step-form-main/./validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;