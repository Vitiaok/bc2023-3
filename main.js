const fs = require('fs');

fs.readFile('data.json', (err, data) => {

  if (err === null) {
    console.log(data.toString());
    }
    else
    {
        console.error(err);
    }
    
  
  const object = JSON.parse(data);
  //let n =0;
  for(const item of object){
   if(item.id_api === "BS2_IncomeTotal")
    {
     content = (item.value);
     break;
    }
    
  }
  for(const item of object){
    if(item.id_api === "BS2_ExpensesTotal")
     {
      content1 = (item.value);
      break;
     }
     
   }
  


  
    
  
  
  let finalcontent =(`Доходи, всього:${content}\nВитрати, всього:${content1}`);
  
  fs.writeFile('output.txt', finalcontent, err => {
    if (err) {
      console.error(err);
    }
    
  });
});
