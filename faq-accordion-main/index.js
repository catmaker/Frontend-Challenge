document.addEventListener("DOMContentLoaded", function () {
  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      imageId: "toggleImage1",
      textClass: "faq-text-1",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      imageId: "toggleImage2",
      textClass: "faq-text-2",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      imageId: "toggleImage3",
      textClass: "faq-text-3",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      imageId: "toggleImage4",
      textClass: "faq-text-4",
    },
  ];

  const card = document.querySelector(".card");

  faqs.forEach((faq, index) => {
    const content = document.createElement("section");
    content.classList.add("content");

    const title = document.createElement("div");
    title.classList.add("content-title");

    const h2 = document.createElement("h2");
    h2.textContent = faq.question;

    const img = document.createElement("img");
    img.id = faq.imageId;
    img.src = "assets/images/icon-plus.svg";

    const p = document.createElement("p");
    p.className = faq.textClass;

    title.appendChild(h2);
    title.appendChild(img);
    content.appendChild(title);
    content.appendChild(p);

    card.appendChild(content);

    img.addEventListener("click", (e) => {
      if (e.target.src.match("icon-plus")) {
        e.target.src = "assets/images/icon-minus.svg";
        p.textContent = faq.answer;
        p.style.paddingTop = "10px";
      } else {
        e.target.src = "assets/images/icon-plus.svg";
        p.textContent = "";
        p.style.paddingTop = "";
      }
    });
  });
});
