# DOM Assignment 06:

## Task 01:
![output](./task1Output.png)
## Codes:

    let newImage = document.querySelector(".logo");
    newImage.src="./assets/ineuron-logo.png";
   




## Task 02 & 03:
![output](./task2Output.png)

## Codes:
    let newPrice = document.querySelector(".app_price span");
    newPrice.textContent="$10";



    let icons = document.querySelector(".footer_social");
    let newSocialDiv = document.createElement("div");
    newSocialDiv.classList = "footer_social_ico";
    let newIcon = `<i class="fa-brands fa-linkedin"></i>`;
    newSocialDiv.innerHTML = newIcon;
    icons.appendChild(newSocialDiv);    