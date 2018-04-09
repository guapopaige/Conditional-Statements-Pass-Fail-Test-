var x = prompt("Please enter a number");
if(x==10){
  console.log("x:"+x);
}else{
  console.log("Does not equal 10");
}

//if x is 10 log it to the console if not don't run the script

var javaScriptMarks = parseInt(prompt("please enter the JS Marks"));
var javaMarks = parseInt(prompt("Please enter the Java Marks"));
var dotNetMarks = parseInt(prompt("Please enter .Net Marks"));

var total = javaScriptMarks + javaMarks + dotNetMarks;
console.log("Total Marks: "+ total);

var average = total/3;
console.log("average: " + average);

if(javaScriptMarks >= 35 && javaMarks >= 35 && dotNetMarks >= 35){
  
  console.log("Results: Passed")
  if(average >= 35 && average < 60){
    console.log("Grade: C");
  } else if(average >= 6 && average < 70){
    console.log("Grade: B");
  } else{
  console.log("Grade: A");
}

}else {
  console.log("results: failed");
}