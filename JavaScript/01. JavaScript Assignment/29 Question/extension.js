
const getExtension = filename => {
    return filename.split(".").pop();
  };
  
  const filename = prompt("Enter the full name of file:");
  console.log(getExtension(filename));
  