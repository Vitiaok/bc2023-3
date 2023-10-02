const fs = require('fs');

fs.readFile('/Web-Server/lab3/bc2023-3/data.json', (err, data) => {

  if (err === null) {
    console.log(data.toString());
    }
    else
    {
        console.error(err);
    }
    
  
  const object = JSON.parse(data);
  let n =0;
  while(object[n].id_api != "BS2_IncomeTotal")
  {
    n++;
    
  }
  let content = (object[n].value).toString() ;
  let k=0;
  while(object[k].id_api != "BS2_ExpensesTotal")
  {
    k++;
  }
  let content1 = (object[k].value).toString();
  //let content1 = object[14].value;
  //const content of object;
  let finalcontent =(`Доходи, всього:${content}\nВитрати, всього:${content1}`);
  
  fs.writeFile('/Web-Server/lab3/bc2023-3/output.txt', finalcontent, err => {
    if (err) {
      console.error(err);
    }
    
  });
});
