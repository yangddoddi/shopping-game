"use strict";

const btnList = document.querySelector(".buttonList");
const btnListItem = document.querySelectorAll(".buttonList__btn");

const clothesList = document.querySelector(".clothesList");
const clothesItemHTML = `<li class="clothesList_item" data-color="blue" data-type="tshirts">
<img class="clothesList_item_img" src="./img/blue_p.png" alt="">
<p class="clothesList_item_sex" data-sex="male">female</p>
<p class="clothesList_item_size" data-size="large">Lagrge size</p>
</li>`;

function creatClothesItems(data) {
  clothesList.insertAdjacentHTML("beforeend", clothesItemHTML);
  const clothesImg = document.querySelectorAll(".clothesList_item_img");
  const clothesSex = document.querySelectorAll(".clothesList_item_sex");
  const clothesSize = document.querySelectorAll(".clothesList_item_size");

  clothesImg[i].src = data.image;
  clothesSex[i].innerHTML = data.gender;
  clothesSize[i].innerHTML = data.size;
  i++;
}

fetch("data/data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data.items;
  })
  .then((items) => {
    let i = 0;
    items.forEach((e) => {
      //   creatClothesItems(e);
      clothesList.insertAdjacentHTML("beforeend", clothesItemHTML);
      const clothesListItem = document.querySelectorAll(".clothesList_item");
      const clothesImg = document.querySelectorAll(".clothesList_item_img");
      const clothesSex = document.querySelectorAll(".clothesList_item_sex");
      const clothesSize = document.querySelectorAll(".clothesList_item_size");

      clothesImg[i].src = e.image;
      clothesSex[i].innerHTML = `${e.gender},`;
      clothesSize[i].innerHTML = `${e.size} Size`;
      clothesListItem[i].dataset.type = e.type;
      clothesListItem[i].dataset.color = e.color;
      i++;
    });
  })
  .then(() => {
    btnListItem.forEach((btn) => {
      const clothesListItem = document.querySelectorAll(".clothesList_item");
      btn.addEventListener("click", () => {
        clothesListItem.forEach((target) => {
          if (
            btn.dataset.type !== target.dataset.type &&
            btn.dataset.color !== target.dataset.color
          ) {
            target.classList.add("hide");
          } else {
            target.classList.remove("hide");
          }
        });
      });
    });
  });

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  const clothesListItem = document.querySelectorAll(".clothesList_item");
  clothesListItem.forEach((item) => {
    item.classList.remove("hide");
  });
});
