# DOM Assignment 08:

## Task 01:

Before DOM Manipulation:

![](./ass8.1-before.png)

Adding the new child in aside section and making overflow "auto".

## Codes:

    let asideBox = document.querySelector("aside");
    let hrLine = document.createElement("hr");
    hrLine.classList = "hr-line";
    let head2 = document.createElement("h2")
    head2.classList = "new-head";
    head2.textContent = "This is my custom heading";
    let para = document.createElement("p");
    para.classList = "new-p";
    para.textContent = "Lorem ipsum dolor sit, elit. Repellat veniam incidunt placeat modi eius voluptatibus!";

    asideBox.appendChild(hrLine);
    asideBox.appendChild(head2);
    asideBox.appendChild(para);
    asideBox.style.overflow = 'auto';

### Output after DOM Manipulation:

![](./ass8.1-after.png)

---

## Task 02:

Before DOM Manipulation:

![](./ass8.2-before.png)

Removing the background image.

## Codes:

    const bckgrndImage = document.querySelector('body');
    bckgrndImage.style.backgroundImage = 'none';

### Output after DOM Manipulation:

![](./ass8.2-after.png)

---

## Task 03:

Before DOM Manipulation:

![](./ass8.3-before.png)

## Codes:

    let showNavbar = document.querySelector('.collapse');
    showNavbar.classList.add('show');

### Output after DOM Manipulation:

![](./ass8.3-after.png)

---
