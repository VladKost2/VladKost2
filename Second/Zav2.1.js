var name = "Vlad";
var surname = "Kostiuk";
var i;

function sequenceIf(){
for (i = 100; i >= 1; i--){
  if ((i % 3) == 0 && (i % 5) == 0){
    console.log(name + " " + surname);
  } else if (i % 5 == 0){
    console.log(surname);
  } else if (i % 3 == 0){
    console.log(name);
  } else {
    console.log(i);
  }
  }
}
sequenceIf();
