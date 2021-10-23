var columns = [];
let names = [];
let searchTerm;

const numberOfResults = document.querySelector(".num");
const input = document.querySelector('#nameField');
const removeBtn = document.querySelector(".remove-names");
const ul = document.querySelector('ul');
const p = document.querySelector('.listItem');
const results = document.querySelector('.results');


async function getData() {
  const response = await fetch("1cpiSections.csv");
  const data = await response.text();
  const rows = data.split("\n");
  let col = [];
  rows.forEach((e) => {
    let temp = e.split(",");
   //  let temp1 = temp.pop();
    columns.push(col.concat(temp));
  });
   merge();

};
getData();
function merge() {
  
   columns.forEach(e => {
      let full = e[0].concat(e[1]);
      names.push(full);
   });

};
function showList() {
   results.classList.add('border');
   p.classList.remove('hide');
   columns.filter((e)=> {
      return (e[0].trim().concat(e[1].trim()).toLowerCase().split(' ').join('').includes(searchTerm) || e[2] == parseInt(searchTerm,10));
   }).forEach(e => {
      const li = document.createElement("li");
      ul.append(li);
      var name = e[0];
      var first = e[1];
      name[0].toUpperCase();
      first[0].toUpperCase();

      
      li.innerHTML = `<span> ${name} ${first} </span> 
      ${e[2]}  `;
      
    });

  
    numberOfResults.innerHTML = `The number of results is: ${ul.querySelectorAll("li").length}`;
    
   
    
   }


 
   
   


input.addEventListener('input', (event) => {
   ul.innerHTML = "";
   searchTerm = event.target.value.toLowerCase();
    numberOfResults.classList.remove("hide");
   showList();
});


function remove() {
   ul.innerHTML = '';
   input.value ="";
   p.classList.add("hide");
   results.classList.remove('border');
   numberOfResults.classList.add('hide');
}

removeBtn.addEventListener('click', remove)
