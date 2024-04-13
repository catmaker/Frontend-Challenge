const userInput = document.getElementById("userEmail");
const submitButton = document.querySelector(".userEmail-button");
const inputLabel = document.querySelector(".userEmail-label");
const topicBox = document.querySelector(".topicBox");

const topics = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

topics.forEach((topic) => {
  const div = document.createElement("div");
  div.className = "topic";

  const img = document.createElement("img");
  img.src = "assets/images/icon-success.svg";
  img.alt = "success";

  div.appendChild(img);
  div.appendChild(document.createTextNode(topic));

  topicBox.appendChild(div);
});

userInput.addEventListener("input", () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let span = inputLabel.querySelector("span");

  if (!emailRegex.test(userInput.value)) {
    // <span> 요소가 없으면 새로 생성합니다.
    if (!span) {
      span = document.createElement("span");
      inputLabel.appendChild(span);
    }

    span.textContent = "Vaild email required";
    span.style.color = "hsl(4, 100%, 67%)";
    inputLabel.style.display = "flex";
    inputLabel.style.justifyContent = "space-between";
    userInput.style.backgroundColor = "hsl(4, 100%, 87%)";
    userInput.style.borderColor = "red";
  } else {
    // 이메일 주소가 유효하면 <span> 요소를 제거합니다.
    if (span) {
      inputLabel.removeChild(span);
      userInput.style.backgroundColor = "";
      userInput.style.borderColor = "";
    }
  }
});
