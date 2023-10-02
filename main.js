const fs = require('fs');

fs.readFile('/Web-Server/lab3/data.json', (err, data) => {

  if (err === null) {
    console.log(data.toString());
    }
    else
    {
        console.error(err);
    }
    
  
  const object = JSON.parse(data);
  let content = object[4].value;
  let content1 = object[14].value;
  let finalcontent =(`Доходи, всього:${content}\nВитрати, всього:${content1}`);
  
  fs.writeFile('/Web-Server/lab3/output.txt', finalcontent, err => {
    if (err) {
      console.error(err);
    }
    
  });
});
