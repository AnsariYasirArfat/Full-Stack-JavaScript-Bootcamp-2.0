# DOM Assignment 02:

## Task 01:
![](./ass7.1-before.png)
## Codes:
    let languages = document.querySelectorAll(".main__languages a");
    let removed = [1,3,5,7,9].map(index => languages[index]);
    removed.forEach(element => {
    element.remove();
    });
   
### output:
![](./ass7.1-after.png)



