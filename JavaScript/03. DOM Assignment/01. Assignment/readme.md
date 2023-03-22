# DOM Assignment 01:

## Task 01:

To add another "Hire Me" hyperlink in navbar.

## Codes:

    let lastLi = document.createElement("li");
    lastLi.innerHTML="<a>Hire Me</a>";
    document.querySelector("header nav ul").append(lastLi);

### Output:

![output](./task1Output.png)

---

## Task 02:

To update the placeholder of search input to "Search My Project".

## Codes:

    let placeHolder = document.querySelector(".search-field input");
    placeHolder.placeholder = "Search My Project";

### Output:

![output](./task2Output.png)

---

## Task 03:

Changing the highlighted text of left section.

## Codes:

    let spanElement = document.querySelector(".hero-left-section p");
    spanElement.children[2].innerText = "an Employee";
    spanElement.children[4].innerText = "iNeuron Intelligence Pvt Ltd.";

### Output:

![output](./task3Output.png)

---

## Task 04:

Adding the user profile picture in right section

## Codes:

    let avtar = document.querySelector(".hero-right-section img");
    avtar.src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

### Output:

![output](./task4Output.png)

---

## Task 05:

Adding another button below the user profile image.

## Codes:

    let newButton = document.createElement("button");
    newButton.innerText="Support Me";
    let button = document.querySelector(".hero-right-section-btns");
    button.append(newButton);

### Output:

![output](./task5Output.png)

---

## Task 06:

Addink links to social media logo.

## Codes:

    let socialMedia = document.querySelectorAll('footer ul li a');
    socialMedia[0].href = "https://github.com/AnsariYasirArfat"
    socialMedia[1].href = "https://www.linkedin.com/in/yaseer-ansari-364a25262/"
    socialMedia[2].href = "https://www.instagram.com/ansariyaseerarfat/"

---
