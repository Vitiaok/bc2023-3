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
  for(let i=0; i<1000; i++){
   if(object[i].id_api == "BS2_IncomeTotal")
    {
    content = (object[i].value).toString() ;
     break;
    }
    
  }
  for(let k=0; k<1000; k++){
    if(object[k].id_api == "BS2_ExpensesTotal")
     {
      content1 = (object[k].value).toString() ;
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
