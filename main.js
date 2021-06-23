var members= [
    "Prahlad Rajpurohit",
    "Kamlesh Rajpurohit",
    "Ananya Rajpurohit",
    "Hemal Rajpurohit"
];


var image= [ 
"8-85583_fun-with-dad-cartoon.png",
"working-mom-260nw-158801603.jpg", 
"79126df3e1b875104c4011e5f2e893d6.png",
"122760736-little-girl-avatar-character-vector-illustration-design.jpg"   
];

var i = 0;
function slideshow(){
  document.getElementById ("album").src= image[i];
  document.getElementById ("member"). innerHTML= members[i];
i++;
if (i == 5) {i = 0}; };