# DOM Assignment 06:

## Task 01:

Changing the main logo of the website

## Codes:

    let newImage = document.querySelector(".logo");
    newImage.src="./assets/ineuron-logo.png";

### Output:

![output](./task1Output.png)

---

## Task 02:

Changing the price tag from $4 to $10:

## Codes:

    let newPrice = document.querySelector(".app_price span");
    newPrice.textContent="$10";

---

## Task 03:

Adding the linkedin icon footer section:

## Codes:

    let icons = document.querySelector(".footer_social");
    let newSocialDiv = document.createElement("div");
    newSocialDiv.classList = "footer_social_ico";
    let newIcon = `<i class="fa-brands fa-linkedin"></i>`;
    newSocialDiv.innerHTML = newIcon;
    icons.appendChild(newSocialDiv);

---

### Output of both task 02 & 03:

![output](./task2Output.png)

---
