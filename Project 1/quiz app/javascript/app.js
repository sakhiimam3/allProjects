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
        score++
       

    }

    var ans_1=document.getElementById("qno9_ans1");
    var ans_2=document.getElementById("qno9_ans2");
    var ans_3=document.getElementById("qno9_ans3");
    var ans_4=document.getElementById("qno9_ans4");
    if (ans_2.checked == true) {
        score++
       

    }

    var ans_1=document.getElementById("qno10_ans1");
    var ans_2=document.getElementById("qno10_ans2");
    var ans_3=document.getElementById("qno10_ans3");
    var ans_4=document.getElementById("qno10_ans4");
    if (ans_1.checked == true) {
        score++
       

    }





    







    var result=document.getElementById("final")
   if (score >=7) {
    result.innerHTML="Congratulation your score is  " + score  
   }
  else{
    result.innerHTML="Failed your score is  " + score 
  }
}
  



    










