# DOM Assignment 05:

## Websit befor DOM Manipulation:

![original website](./OriginalWebsite.png)

## Codes:

### task 1:

Adding another button in navbar:

    let newDiv = document.querySelector(".nav-links");
    let newButton = document.createElement("a")
    newButton.classList = "btn";
    newButton.textContent = "Pro Subscription";
    newDiv.nextElementSibling.appendChild(newButton);

---

### task 2:

Adding new Recipe item in the recipes section:

    let tags = document.querySelector(".tags-container div");
    let newtag = document.createElement("a")
    newtag.textContent = "Chinese (7)";
    tags.appendChild(newtag);

---

### task 3:

Changing the color of the text of all cards to purple:

    let cardText = document.querySelectorAll(".recipe-text");
    cardText.forEach(element => element.style.color = "#49078B");

---

### task 4:

Adding an empty card in empty space:

    let cards = document.querySelector(".recipe-gallery");
    let newCard = document.createElement("div");
    newCard.classList = "card";
    cards.append(newCard);

---

## Final Website after DOM Manipulation:

![output](./taskOutput.png)

---
