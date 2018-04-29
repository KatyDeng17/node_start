const questions =[
  'what is your name?',
  'what to do like to do?',
  'what is your favor coding language?'
]

let answers =[];
//diplay the question; 
function ask(indexNum){

process.stdout.write(`\n\n ${questions[indexNum]} `);
process.stdout.write('> ');

}
// display questions one by one; get user input
process.stdin.on('data', (data)=>{
  console.log( `this is the data input: ${data}`);
  //store the user answer into answers array; 
  answers.push(data.toString().trim());
  console.log(answers);
  if(answers.length < questions.length){
      ask(answers.length); // call the ask() function; 
  }else{
    process.exit();
  }
  //  process.stdout.write(`\n ${data.toString().trim()} \n`)

});

process.on('exit', function(){
  process.stdout.write("\n\n");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can come back to ${answers[2]} later! `);
  process.stdout.write("\n\n");
})



ask(0);
