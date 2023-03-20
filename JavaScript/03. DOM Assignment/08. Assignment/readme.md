# DOM Assignment 08:

## Task 01:
![](./ass8.1-before.png)
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
   
### output:
![](./ass8.1-after.png)



## Task 02:
![](./ass8.2-before.png)

## Codes:
  
    const bckgrndImage = document.querySelector('body');
    bckgrndImage.style.backgroundImage = 'none';
### output:
![](./ass8.2-after.png)


## Task 03:
![]()

## Codes:
  
### output:
![]()