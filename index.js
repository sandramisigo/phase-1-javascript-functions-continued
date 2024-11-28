// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
console.log(saturdayFun())
  
function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  console.log(mondayWork())

  function wrapAdjective(flair = "*") {
    return function describe(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  

