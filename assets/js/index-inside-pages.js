document.addEventListener("DOMContentLoaded", function () {
  const submenuItems = document.querySelectorAll(".submenu-item");
  const submenuRight = document.getElementById("submenu-right");

  const content = {
    face: [
      { text: "DERMAL FILLERS", link: "treatment.html" },
      { text: "LIP FILLERS", link: "treatment.html" },
      {
        text: "NON-SURGICAL RHINOPLASTY",
        link: "treatment.html",
      },
      { text: "BOTOX", link: "treatment.html" },
      { text: "UNDEREYE FILLERS", link: "treatment.html" },
      {
        text: "JAWLINE & CHIN FILLERS EYEBROW LIFT",
        link: "treatment.html",
      },
      { text: "THREAD LIFT", link: "treatment.html" },
      { text: "SKIN BOOSTER", link: "treatment.html" },
      { text: "PROFHILO", link: "treatment.html" },
      { text: "SCULPTRA", link: "treatment.html" },
    ],
    body: [
      { text: "BUTT FILLERS", link: "treatment.html" },
      {
        text: "LASER HAIR REMOVAL",
        link: "treatment.html",
      },
    ],
    skin: [
      {
        text: "DEEP CLEANSING FACIAL",
        link: "treatment.html",
      },
      {
        text: "PLATELET RICH PLASMA  SECRET FRACTIONAL RF",
        link: "treatment.html",
      },
      {
        text: " HAIR LOSS TREATMENT  DERMAPEN",
        link: "treatment.html",
      },
      { text: "MICRONEEDLIN", link: "treatment.html" },
      { text: "EMATRIX", link: "treatment.html" },
    ],
    men: [{ text: "WRINKLES & LINES TREATMENT", link: "treatment.html" }],
  };

  submenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      submenuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      const target = item.getAttribute("data-target");
      const columns = content[target].reduce(
        (acc, item, index) => {
          const columnIndex = index % 2;
          acc[columnIndex].push(`<a href="${item.link}">${item.text}</a>`);
          return acc;
        },
        [[], []]
      );
      submenuRight.innerHTML = `
            <div class="submenu-right-column">${columns[0].join("")}</div>
            <div class="submenu-right-column">${columns[1].join("")}</div>
        `;
    });
  });
});

//conditions

document.addEventListener("DOMContentLoaded", function () {
  const submenuItemsCond = document.querySelectorAll(".submenu-item-cond");
  const submenuRightCond = document.getElementById("submenu-right-cond");

  const contentCond = {
    face: [
      {
        text: "ACNE",
        link: "conditions.html",
      },
      { text: " ACNE SCARS", link: "conditions.html" },
      { text: "WRINKLES", link: "conditions.html" },
      { text: "BOTOX", link: "conditions.html" },
      { text: "DARK CIRCLES UNDER EYES", link: "conditions.html" },
    ],
    body: [{ text: " UNDERARM SWEATING", link: "conditions.html" }],
    skin: [
      { text: "ACNE", link: "conditions.html" },
      { text: "ACNE SCARS", link: "conditions.html" },
    ],
  };

  submenuItemsCond.forEach((item) => {
    item.addEventListener("click", function () {
      submenuItemsCond.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      const target = item.getAttribute("data-target");
      const columns = contentCond[target].reduce(
        (acc, item, index) => {
          const columnIndex = index % 2;
          acc[columnIndex].push(`<a href="${item.link}">${item.text}</a>`);
          return acc;
        },
        [[], []]
      );
      submenuRightCond.innerHTML = `
              <div class="submenu-right-column-cond">${columns[0].join(
                ""
              )}</div>
              <div class="submenu-right-column-cond">${columns[1].join(
                ""
              )}</div>
          `;
    });
  });
});
