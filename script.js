function LoadFunction(){
  var buttonClick = document.getElementById('button');
  buttonClick.addEventListener('click',buttonClickFunction);
}
function calculateFunction(grade){
  var letterGrade = grade;
  var numberGrade;
  switch(letterGrade){
      case 'A+':
          numberGrade = 25;
      break;
      case 'A':
          numberGrade = 23;
      break;
      case 'A-':
          numberGrade = 21;
      break;
      case 'B+':
          numberGrade = 20;
      break;
      case 'B':
          numberGrade = 19;
      break;
      case 'B-':
          numberGrade = 18;
      break;
      case 'C+':
          numberGrade = 17;
      break;
      case 'C':
          numberGrade = 16;
      break;
      case 'C-':
          numberGrade = 15;
      break;
      case 'D+':
          numberGrade = 14;
      break;
      case 'D':
          numberGrade = 13;
      break;
      case 'D-':
          numberGrade = 12;
      break;
      case 'F+':
          numberGrade = 11;
      break;
      case 'F':
          numberGrade = 8;
      break;
      case 'F-':
          numberGrade = 4;
      break;
      case 'G':
          numberGrade = 0;
      break;
  }
  return numberGrade;
}

function sortGrades(grades){
  var n = grades.length;
  var temp = 0;
  for (var i = 0; i<n; i++){
    for (var j = 1; j < (n - 1); j++){
      if(grades[j - 1] > grades[j]){
        temp = grades[j - 1];
        grades[j - 1] = grades[j];
        grades[j] = temp;
      }
    }
  }
  return(grades);
}

function dropGrades(sortedSecond, third, dissertation){
  var grades = [];
  var second = [];
  second = sortedSecond;
//
  var position = 0;
  second[0] = -1;
  if(second[1] < third[1]){
    second[1] = -1;
    second[2] = -1;
  } else {
    third[0] = -1;
  }
  // console.log('sorted second array');
  // console.log(second);
  // console.log('sorted third array');
  // console.log(third);
  // console.log('dissrtation');
  // console.log(dissertation);
  for(var i=0; i<6; i++){
    if (second[i] != -1){
      grades[position] = second[i]
      position++;
    }
  }
  for(var i=0; i<4; i++){
    if (third[i] != -1){
      grades[position] = third[i];
      position++;
      grades[position] = third[i];
      position++;
    }

  }

  grades[position] = dissertation;
  grades[position+1] = dissertation;
  grades[position+2] = dissertation;
  grades[position+3] = dissertation;

  return grades;
}

function calculateMean(grades){
  var tally = 0;
  for(var i=0; i<15;i++){
    // console.log(grades[i]);
    tally = tally + grades[i];
  }
  // console.log(tally);
  return (tally / 15);
}

function calculateMedian(grades){
  return grades[7];
}

function finalGrade(average){
  var finalAwardGrade = document.getElementById('resultdiv');
  if (average >= 20.50) {
    finalAwardGrade.firstChild.nodeValue = "First Class Degree";
  }else if (average >= 17.50) {
    finalAwardGrade.firstChild.nodeValue = "Upper Second Class Degree";
  }else if (average >= 14.50) {
    finalAwardGrade.firstChild.nodeValue = "Lower Second Class Degree";
  }else if (average >= 11.50) {
    finalAwardGrade.firstChild.nodeValue = "Third Class Degree";
  }else {
    finalAwardGrade.firstChild.nodeValue = "Fail";
  }
}

function generateResult(second, third, dissertation){
  // console.log('generate results dissertation');
  // console.log(dissertation);
  sortedSecond = sortGrades(second);
  sortedThird = sortGrades(third);
  
  // console.log(sortedSecond);
  // console.log(sortedThird);

  resultsArray = dropGrades(sortedSecond, sortedThird, dissertation);

  sortedResultArray = sortGrades(resultsArray);

  // console.log(sortedResultArray);
  mean = calculateMean(sortedResultArray);
  // console.log(mean);
  median = calculateMedian(sortedResultArray);
  // console.log(median);

  if (mean >= median){
    finalGrade(mean);
  } else {
    finalGrade(median);
  }
}

function buttonClickFunction(){
  var secondelement = [];
  var thirdelement = [];
  var dissertationelement = document.getElementById('dissertation');
  secondelement[0] = document.getElementById('second1');
  secondelement[1] = document.getElementById('second2');
  secondelement[2] = document.getElementById('second3');
  secondelement[3] = document.getElementById('second4');
  secondelement[4] = document.getElementById('second5');
  secondelement[5] = document.getElementById('second6');
  thirdelement[0] = document.getElementById('third1');
  thirdelement[1] = document.getElementById('third2');
  thirdelement[2] = document.getElementById('third3');
  thirdelement[3] = document.getElementById('third4');

  var second = [];
  var third = [];
  var dissertation = calculateFunction(dissertationelement.value);
  for(var i=0; i<6; i++){
    second[i] = calculateFunction(secondelement[i].value);
    if(i<4){
      third[i] = calculateFunction(thirdelement[i].value);
    }
  }
  // console.log(dissertation);
  // console.log(second);
  // console.log(third);
  generateResult(second,third,dissertation);
}
document.addEventListener('DOMContentLoaded', LoadFunction);