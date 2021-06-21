function check(){
     

  var score=0
    var ans_1=document.getElementById("qno1_ans1");
    var ans_2=document.getElementById("qno1_ans2");
    var ans_3=document.getElementById("qno1_ans3");
    var ans_4=document.getElementById("qno1_ans4");
    if (ans_1.checked == true) {
       score++
        
    }
    var ans_1=document.getElementById("qno2_ans3");
    var ans_2=document.getElementById("qno2_ans2");
    var ans_3=document.getElementById("qno2_ans1");
    var ans_4=document.getElementById("qno2_ans4");
    if (ans_1.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno3_ans1");
    var ans_2=document.getElementById("qno3_ans2");
    var ans_3=document.getElementById("qno3_ans3");
    var ans_4=document.getElementById("qno3_ans4");
    if (ans_2.checked == true) {
        score++
      
    }
    var ans_1=document.getElementById("qno4_ans1");
    var ans_2=document.getElementById("qno4_ans2");
    var ans_3=document.getElementById("qno4_ans3");
    var ans_4=document.getElementById("qno4_ans4");
    if (ans_4.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno5_ans1");
    var ans_2=document.getElementById("qno5_ans2");
    var ans_3=document.getElementById("qno5_ans3");
    var ans_4=document.getElementById("qno5_ans4");
    if (ans_3.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno6_ans1");
    var ans_2=document.getElementById("qno6_ans2");
    var ans_3=document.getElementById("qno6_ans3");
    var ans_4=document.getElementById("qno6_ans4");
    if (ans_2.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno7_ans1");
    var ans_2=document.getElementById("qno7_ans2");
    var ans_3=document.getElementById("qno7_ans3");
    var ans_4=document.getElementById("qno7_ans4");
    if (ans_4.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno8_ans1");
    var ans_2=document.getElementById("qno8_ans2");
    var ans_3=document.getElementById("qno8_ans3");
    var ans_4=document.getElementById("qno8_ans4");
    if (ans_4.checked == true) {
        score++}
    var ans_1=document.getElementById("qno9_ans1");
    var ans_2=document.getElementById("qno9_ans2");
    var ans_3=document.getElementById("qno9_ans3");
    var ans_4=document.getElementById("qno9_ans4");
    if (ans_2.checked == true) {
        score++}
    var ans_1=document.getElementById("qno10_ans1");
    var ans_2=document.getElementById("qno10_ans2");
    var ans_3=document.getElementById("qno10_ans3");
    var ans_4=document.getElementById("qno10_ans4");
    if (ans_1.checked == true) {
        score++
       

    }

    var ans_1=document.getElementById("qno11_ans1");
    var ans_2=document.getElementById("qno11_ans2");
    var ans_3=document.getElementById("qno11_ans3");
    var ans_4=document.getElementById("qno11_ans4");
    if (ans_2.checked == true) {
        score++
       

    }
    var ans_1=document.getElementById("qno12_ans1");
    var ans_2=document.getElementById("qno12_ans2");
    var ans_3=document.getElementById("qno12_ans3");
    var ans_4=document.getElementById("qno12_ans4");
    if (ans_1.checked == true) {
        score++
       

    }
    var ans_1=document.getElementById("qno13_ans1");
    var ans_2=document.getElementById("qno13_ans2");
    var ans_3=document.getElementById("qno13_ans3");
    var ans_4=document.getElementById("qno13_ans4");
    if (ans_1.checked == true) {
        score++
       

    }

    var ans_1=document.getElementById("qno14_ans1");
    var ans_2=document.getElementById("qno14_ans2");
    var ans_3=document.getElementById("qno14_ans3");
    var ans_4=document.getElementById("qno14_ans4");
    if (ans_2.checked == true) {
        score++
    }
    var ans_1=document.getElementById("qno15_ans1");
    var ans_2=document.getElementById("qno15_ans2");
    var ans_3=document.getElementById("qno15_ans3");
    var ans_4=document.getElementById("qno15_ans4");
    if (ans_4.checked == true) {
        score++
        }
    var result=document.getElementById("final")
   if (percentage <=12) {
    result.innerHTML="Congratulation your score is  " + score  
   }
  else{
    result.innerHTML="Failed your score is   " + score 
  }
  var btn=document.getElementById("final");
 var clickBtn=document.createElement("button");
 var text=document.createTextNode("Right");
 clickBtn.appendChild(text);
 btn.appendChild(clickBtn);
 clickBtn.setAttribute("class","btn");
 clickBtn.setAttribute("onclick","abc()");
 var percen=document.getElementById('percentage')
// var total=percen.innerHTML=score*100/15+"%";
var total= Math.floor(percen.innerHTML=(score*100/15)) +" %"
 }

 function abc(){
   
     var num=["A ","C ","B ","D","C","B","D","A","B","A",'C',"A","A","B","D"]
     var  ans=document.getElementById("options");
     ans.innerHTML=num;
     
    
   
 }
 
 

//  var btn=document.getElementById("final")
//  var clickBtn=document.createElement("button")
//  var text=document.createTextNode("click")
//  clickBtn.appendChild(text)
//  btn.appendChild(clickBtn)
var min=0
var sec=0
var minute=document.getElementById("min")
var second=document.getElementById("sec")
var interval;
function timer(){
    sec++
    second.innerHTML=sec

    if (sec == 60) {
        min++
        minute.innerHTML=min
        sec=0

    }
    else if(min==4){
         min=0
         sec=0
         minute.innerHTML=min
         second.innerHTML=sec
         alert("time is finished")
         pause()
    }
    
} 
function start(){
    interval=setInterval(timer,1000)
   }
   function pause(){
    clearInterval(interval)
    }