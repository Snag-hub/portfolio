var titles=["Web Developer,","Front End Developer.","WordPress Developer.","YouTuber.", "Freelancer."];
var count=0;
var title=document.getElementById("titleChange");
setInterval(function(){
  title.innerHTML=titles[count];
  count++;
  if(count==titles.length){
    count=0;
  }
},1500);

var greetings=["नमस्ते,","Hi,","السلام عليكم","Hello,"];
var count1=0;
var greeting=document.getElementById("greetings");
setInterval(function(){
  greeting.innerHTML=greetings[count1];
  count1++;
  if(count1==greetings.length){
    count1=0;
  }
},1500);
