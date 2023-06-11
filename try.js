let myAdmins = ["Ahmad", "Osama", "Sayed"];
let myElmpoyment=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Ali"];


document.write(`<div>We Have ${myAdmins.length} Admins : </div>`);

for(let i=0;i<myAdmins.length;i++){
  document.write(`<div><hr>The admint for team ${i+1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members : </h3>`);
  if(myAdmins[i][0]==="A"){  
    for(let j=0;j<myElmpoyment.length;j++){
      if(myElmpoyment[j][0]==="A"){
        document.write(`<div> ${j+1}  -  ${myElmpoyment[j]}`);
      }
    }
}
  if(myAdmins[i][0]==="S"){  
    for(let k=0;k<myElmpoyment.length;k++){
      if(myElmpoyment[k][0]==="S"){
        document.write(`<div> ${k+1}  -  ${myElmpoyment[k]}`);
      }
    }
}
  if(myAdmins[i][0]==="O"){  
    for(let m=0;m<myElmpoyment.length;m++){
      if(myElmpoyment[m][0]==="O"){
        document.write(`<div> ${m+1}  -  ${myElmpoyment[m]}`);
      }
    }
  }
}