console.log(process.argv);

function grab(flag){
  const index = process.argv.indexOf(flag); 
  return (index === -1)? null : process.argv[index+1];

}
/* on the --bash ; node app --user katy --greeting 'Hi lovely' to get the output of Welcome katy Hi lovely
*/
var greeting = grab ('--greeting');
var user = grab ('--user');

if(!user || !greeting){
  console.log('you blew it!');
}else{
  console.log(`Welcome ${user} ${greeting}`);
}