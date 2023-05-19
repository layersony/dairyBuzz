let no_of_sheds_input = document.getElementById('noOfsheds');
let addShedBtn = document.getElementById('addShedBtn');
let shedsRight = document.getElementById('shedsright'); // get sheds Right container

let no_sheds;

addShedBtn.addEventListener("click", function(){
  // Get the number of sheds
  no_sheds = no_of_sheds_input.value
  console.log(no_sheds);

  for (let i=1; i<=parseInt(no_sheds); i++){
    addShed(i)
  }

  // Generate report Button
  let calLitreBtn = document.createElement('button');
  calLitreBtn.id='calLitreBtn';
  calLitreBtn.textContent='Generate Report'
  calLitreBtn.onclick= function(){
    generateReport();
  };
  shedsRight.appendChild(calLitreBtn) 

  // add break
  let br = document.createElement('br')
  shedsRight.appendChild(br)
})

function addShed(curr_no){
  // Will create a new <p></p> that has input number
  let newShed = document.createTextNode("Shed "+ curr_no +" litres Per Day"); // Creating a child for shed
  shedsRight.appendChild(newShed) // add it to sheds Right container

  // create input element
  let input = document.createElement("input");
  input.type='number';
  input.name='shed_'+curr_no;
  input.id='shed_'+curr_no;
  shedsRight.appendChild(input);
  
  let br = document.createElement('br')
  shedsRight.appendChild(br)
}


function generateReport(){
  let total = 0;

  for (let i = 1; i <= parseInt(no_sheds); i++){
    let shedIdvalue = document.getElementById('shed_'+i).value // input data from shed
    
    let shedReport = document.createTextNode('Your Production in Shed ' + i + ' = ' + shedIdvalue +' Litres per Day')
    shedsRight.appendChild(shedReport)

    let br = document.createElement('br')
    shedsRight.appendChild(br)

    // add litres to total

    total = total + parseInt(shedIdvalue)
  }

  // add text node for total litre production
  let ttlReport = document.createTextNode('The total litre production is '+ total +' litres per day')
  shedsRight.appendChild(ttlReport)

  let br = document.createElement('br')
  shedsRight.appendChild(br)

  // Generate Daily Income Report
  let dIncome = total * 60

  let dailyIncome = document.createTextNode('Your Daily Income is: Ksh' + dIncome)
  shedsRight.appendChild(dailyIncome)

  // Generate Monthly Income Report
  let months = {
    'Jan': 31,
    'Feb': 29,
    'Mar': 31,
    'Apr': 30,
    'May': 31,
    'Jun': 30,
    'Jul': 31,
    'Aug': 31,
    'Sep': 30,
    'Oct': 31,
    'Nov': 30,
    'Dec': 31
  }

  for (i in months) {
    let mon_name = i;
    let mon_days = months[i]
    
    let monIncome = (total * 60) * mon_days

    let monp = document.createElement('p');
    monp.innerText = `Your income for ${mon_name} is ${monIncome}`
    shedsRight.appendChild(monp);
  }

}