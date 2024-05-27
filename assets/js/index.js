document.addEventListener("DOMContentLoaded", function () {
  const submenuItems = document.querySelectorAll(".submenu-item");
  const submenuRight = document.getElementById("submenu-right");

  const content = {
    face: [
      { text: "DERMAL FILLERS", link: "/pages/treatment.html" },
      { text: "LIP FILLERS", link: "pages/treatment.html" },
      {
        text: "NON-SURGICAL RHINOPLASTY",
        link: "pages/treatment.html",
      },
      { text: "BOTOX", link: "pages/treatment.html" },
      { text: "UNDEREYE FILLERS", link: "pages/treatment.html" },
      {
        text: "JAWLINE & CHIN FILLERS EYEBROW LIFT",
        link: "pages/treatment.html",
      },
      { text: "THREAD LIFT", link: "pages/treatment.html" },
      { text: "SKIN BOOSTER", link: "pages/treatment.html" },
      { text: "PROFHILO", link: "pages/treatment.html" },
      { text: "SCULPTRA", link: "pages/treatment.html" },
    ],
    body: [
      { text: "BUTT FILLERS", link: "pages/treatment.html" },
      {
        text: "LASER HAIR REMOVAL",
        link: "pages/treatment.html",
      },
    ],
    skin: [
      {
        text: "DEEP CLEANSING FACIAL",
        link: "pages/treatment.html",
      },
      {
        text: "PLATELET RICH PLASMA  SECRET FRACTIONAL RF",
        link: "pages/treatment.html",
      },
      {
        text: " HAIR LOSS TREATMENT  DERMAPEN",
        link: "pages/treatment.html",
      },
      { text: "MICRONEEDLIN", link: "pages/treatment.html" },
      { text: "EMATRIX", link: "pages/treatment.html" },
    ],
    men: [{ text: "WRINKLES & LINES TREATMENT", link: "pages/treatment.html" }],
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
        link: "pages/conditions.html",
      },
      { text: " ACNE SCARS", link: "pages/conditions.html" },
      { text: "WRINKLES", link: "pages/conditions.html" },
      { text: "BOTOX", link: "pages/conditions.html" },
      { text: "DARK CIRCLES UNDER EYES", link: "pages/conditions.html" },
    ],
    body: [{ text: " UNDERARM SWEATING", link: "pages/conditions.html" }],
    skin: [
      { text: "ACNE", link: "pages/conditions.html" },
      { text: "ACNE SCARS", link: "pages/conditions.html" },
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
