var sec=1;
var msec=0;
var count=0;
var cps=0.00;
var limit=61;
var percentage;
document.getElementById('btn1').addEventListener('click',()=>{
   t=setInterval(() => {
    document.getElementById('h5').innerText=msec++;
    if(msec===101)
    {
        document.getElementById('time').innerText=sec++;
        msec=0;
    }
    if(sec===limit)
    {
clearInterval(t);
document.getElementById('btn2').style.display="none";
document.getElementById('btn1').style.display="none";
document.getElementById('result').style.display="block";

    }
   },10);

 document.getElementById('btn2').style.display="block";
});
document.getElementById('btn2').addEventListener('click',()=>{
    
    document.getElementById('count').innerText=count++;

});

document.getElementById('result').addEventListener(('click'),()=>{

   document.getElementById('block').style.display="block";

    document.getElementById('score').style.display="block";
    
    limit=limit-1;
    percentage=limit/100;
    percentage=percentage.toFixed(2);
     cps=count/limit;
    cps=cps.toFixed(2);
    document.getElementById('cps').innerText=cps;
    document.getElementById('noc').innerText=count;
    document.getElementById('limit').innerText=limit;
     if(cps<=percentage*10)
     {
        document.getElementById('message').innerText="Sorry! your score is too low.TRY AGAIN";
         document.getElementById('noc').style.color="red";
         document.getElementById('cps').style.color="red";
         document.getElementById('message').style.color="red";
     }
     else  if(cps>percentage*10&&cps<percentage*90)
     {
        document.getElementById('message').innerText="Well done! keep it up and TRY AGAIN";
        document.getElementById('noc').style.color="yellow";
        document.getElementById('cps').style.color="yellow";
        document.getElementById('message').style.color="yellow";
     }
     else  if(cps>percentage*90&&cps<percentage*95&&limit==60)
     {
        document.getElementById('message').innerText="Fantastic! You are so close to the world record";
        document.getElementById('noc').style.color="yellow";
        document.getElementById('cps').style.color="yellow";
        document.getElementById('message').style.color="yellow";
     }
     else  if(cps>percentage*95&&cps<percentage*100&&limit==60)
     {
        document.getElementById('message').innerText="Keep going! You are sooooooo close to the World Record";
        document.getElementById('noc').style.color="yellow";
        document.getElementById('cps').style.color="yellow";
        document.getElementById('message').style.color="yellow";
     }
     else if(limit==60)
     {
        document.getElementById('message').innerText="Unbelievable! YOU HAVE BEATEN THE WORLD RECORD";
        document.getElementById('noc').style.color=" rgb(0, 255, 0)";
        document.getElementById('cps').style.color=" rgb(0, 255, 0)";
        document.getElementById('message').style.color=" rgb(0, 255, 0)";
     }
     else{
      document.getElementById('message').innerText="Well done keep going";
      document.getElementById('noc').style.color=" rgb(0, 255, 0)";
      document.getElementById('cps').style.color=" rgb(0, 255, 0)";
      document.getElementById('message').style.color=" rgb(0, 255, 0)";
     }
})

 document.getElementById('limit1').addEventListener('click',()=>{
   limit=11;
   document.getElementById('header').innerText="Duration=10sec";
 })
 document.getElementById('limit2').addEventListener('click',()=>{
   limit=16;
   document.getElementById('header').innerText="Duration=15sec";
 })
 document.getElementById('limit3').addEventListener('click',()=>{
   limit=31;
   document.getElementById('header').innerText="Duration=30sec";
 })
 document.getElementById('limit4').addEventListener('click',()=>{
   limit=46;
   document.getElementById('header').innerText="Duration=45sec";
 })
 document.getElementById('limit5').addEventListener('click',()=>{
   limit=61;
   document.getElementById('header').innerText="The world record is 552 clicks in 60 seconds";
 })

 document.getElementById('try').addEventListener('click',()=>{
   window.location.reload(true);
 })