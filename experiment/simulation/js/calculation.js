var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");
var t13=document.getElementById("t13");
var t14=document.getElementById("t14");
var t15=document.getElementById("t15");
var t16=document.getElementById("t16");
var t17=document.getElementById("t17");
var t18=document.getElementById("t18");
var t19=document.getElementById("t19");
var t20=document.getElementById("t20");
var t21=document.getElementById("t21");
var t22=document.getElementById("t22");
var t23=document.getElementById("t23");
var t24=document.getElementById("t24");
var t25=document.getElementById("t25");
var t26=document.getElementById("t26");
var t27=document.getElementById("t27");
var t28=document.getElementById("t28");
var t29=document.getElementById("t29");
var t30=document.getElementById("t30");
var t31=document.getElementById("t31");
var t32=document.getElementById("t32");
var t33=document.getElementById("t33");
var t34=document.getElementById("t34");
var t35=document.getElementById("t35");
var t36=document.getElementById("t36");
var t37=document.getElementById("t37");
var t38=document.getElementById("t38");
var t39=document.getElementById("t39");
var t40=document.getElementById("t40");
var t41=document.getElementById("t41");
var t42=document.getElementById("t42");
var t43=document.getElementById("t43");
var t44=document.getElementById("t44");
var t45=document.getElementById("t45");
var t46=document.getElementById("t46");
var t47=document.getElementById("t47");
var t48=document.getElementById("t48");
var t49=document.getElementById("t49");
var t50=document.getElementById("t50");


function calculate(){

    if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value==""  || t13.querySelector("input").value=="" ||t14.querySelector("input").value=="" ||t15.querySelector("input").value=="" ||t16.querySelector("input").value=="" ||t17.querySelector("input").value=="" ||t18.querySelector("input").value=="" ||t19.querySelector("input").value=="" ||t20.querySelector("input").value=="" ||t21.querySelector("input").value=="" ||t22.querySelector("input").value=="" ||t23.querySelector("input").value=="" ||t24.querySelector("input").value=="" ||t25.querySelector("input").value=="" ||t26.querySelector("input").value=="" ||t27.querySelector("input").value=="" ||t28.querySelector("input").value=="" ||t29.querySelector("input").value=="" ||t30.querySelector("input").value=="" ||t31.querySelector("input").value=="" ||t32.querySelector("input").value=="" ||t33.querySelector("input").value=="" ||t34.querySelector("input").value=="" ||t35.querySelector("input").value=="" ||t36.querySelector("input").value=="" ||t37.querySelector("input").value=="" ||t38.querySelector("input").value=="" ||t39.querySelector("input").value=="" ||t40.querySelector("input").value=="" ||t41.querySelector("input").value=="" ||t42.querySelector("input").value=="" ||t43.querySelector("input").value=="" ||t44.querySelector("input").value=="" ||t45.querySelector("input").value=="" ||t46.querySelector("input").value==""||t47.querySelector("input").value=="" ||t48.querySelector("input").value==""||t49.querySelector("input").value==""||t50.querySelector("input").value==""){

        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        // cd1.querySelector("input").value = (qact1.querySelector("input").value/qt1.querySelector("input").value).toFixed(4)

        // cd2.querySelector("input").value = (qact2.querySelector("input").value/qt2.querySelector("input").value).toFixed(4)
    
        // cd3.querySelector("input").value = (qact3.querySelector("input").value/qt3.querySelector("input").value).toFixed(4)
    
        // cdAvg.querySelector("input").value = (((qact1.querySelector("input").value/qt1.querySelector("input").value) + (qact2.querySelector("input").value/qt2.querySelector("input").value) + (qact3.querySelector("input").value/qt3.querySelector("input").value)) / 3).toFixed(4)
    
        document.querySelector("#check-button").disabled = false
    }}

    function checkYourResult(){
        let flag=true
        if(t1.querySelector("input").value!=0){
            t1.querySelector("input").style.color="red"
            flag=false
        }

        if(t2.querySelector("input").value >0.45  && t2.querySelector("input").value<0.48 ){
            t2.querySelector("input").style.color = "black"
            flag= true
        }else{
            t2.querySelector("input").style.color = "red"
            flag= false
        }

        if(t3.querySelector("input").value!=32){
            t3.querySelector("input").style.color="red"
            flag=false
        }

        if(t4.querySelector("input").value!=50){
            t4.querySelector("input").style.color="red"
            flag=false
        }
        if(t5.querySelector("input").value!=460){
            t5.querySelector("input").style.color="red"
            flag=false
        }

        if(t6.querySelector("input").value!=1){
            t6.querySelector("input").style.color="red"
            flag=false
        }

        if(t7.querySelector("input").value >0.41  && t7.querySelector("input").value<0.43 ){
            t7.querySelector("input").style.color = "black"
            flag= true
        }else{
            t7.querySelector("input").style.color = "red"
            flag= false
        }

        if(t8.querySelector("input").value!=33){
            t8.querySelector("input").style.color="red"
            flag=false
        }

        if(t9.querySelector("input").value!=43){
            t9.querySelector("input").style.color="red"
            flag=false
        }


        if(t10.querySelector("input").value!=460){
            t10.querySelector("input").style.color="red"
            flag=false
        }

        if(t11.querySelector("input").value!=2){
            t11.querySelector("input").style.color="red"
            flag=false
        }

      if(t12.querySelector("input").value >0.41  && t12.querySelector("input").value<0.43 ){
            t12.querySelector("input").style.color = "black"
            flag= true
        }else{
            t12.querySelector("input").style.color = "red"
            flag= false
        }

        if(t13.querySelector("input").value!=35){
            t13.querySelector("input").style.color="red"
            flag=false
        }
        if(t14.querySelector("input").value!=37){
            t14.querySelector("input").style.color="red"
            flag=false
        }

        if(t15.querySelector("input").value!=460){
            t15.querySelector("input").style.color="red"
            flag=false
        }

        if(t16.querySelector("input").value!=3){
            t16.querySelector("input").style.color="red"
            flag=false
        }

        if(t17.querySelector("input").value >0.37  && t17.querySelector("input").value<0.39 ){
            t17.querySelector("input").style.color = "black"
            flag= true
        }else{
            t17.querySelector("input").style.color = "red"
            flag= false
        }

        if(t18.querySelector("input").value!=36){
            t18.querySelector("input").style.color="red"
            flag=false
        }

        if(t19.querySelector("input").value!=29){
            t19.querySelector("input").style.color="red"
            flag=false
        }

        if(t20.querySelector("input").value!=460){
            t20.querySelector("input").style.color="red"
            flag=false
        }
        if(t21.querySelector("input").value!=3.5){
            t21.querySelector("input").style.color="red"
            flag=false
        }

        if(t22.querySelector("input").value >0.3  && t22.querySelector("input").value<0.45 ){
            t22.querySelector("input").style.color = "black"
            flag= true
        }else{
            t22.querySelector("input").style.color = "red"
            flag= false
        }

        if(t23.querySelector("input").value!=37){
            t23.querySelector("input").style.color="red"
            flag=false
        }

        if(t24.querySelector("input").value!=31){
            t24.querySelector("input").style.color="red"
            flag=false
        }

        if(t25.querySelector("input").value!=460){
            t25.querySelector("input").style.color="red"
            flag=false
        }

        // calculation table

        if(t26.querySelector("input").value >4.40  && t26.querySelector("input").value<4.65 ){
            t26.querySelector("input").style.color = "black"
            flag= true
        }else{
            t26.querySelector("input").style.color = "red"
            flag= false
        }

        if(t27.querySelector("input").value >6.9  && t27.querySelector("input").value<7.9 ){
            t27.querySelector("input").style.color = "black"
            flag= true
        }else{
            t27.querySelector("input").style.color = "red"
            flag= false
        }


        if(t28.querySelector("input").value >0.6  && t28.querySelector("input").value<0.7 ){
            t28.querySelector("input").style.color = "black"
            flag= true
        }else{
            t28.querySelector("input").style.color = "red"
            flag= false
        }

        if(t29.querySelector("input").value >0.039  && t29.querySelector("input").value<0.041 ){
            t29.querySelector("input").style.color = "black"
            flag= true
        }else{
            t29.querySelector("input").style.color = "red"
            flag= false
        }

        if(t30.querySelector("input").value >7  && t30.querySelector("input").value<7.5 ){
            t30.querySelector("input").style.color = "black"
            flag= true
        }else{
            t30.querySelector("input").style.color = "red"
            flag= false
        }

        if(t31.querySelector("input").value >14  && t31.querySelector("input").value<14.3 ){
            t31.querySelector("input").style.color = "black"
            flag= true
        }else{
            t31.querySelector("input").style.color = "red"
            flag= false
        }

          if(t32.querySelector("input").value >7.45  && t32.querySelector("input").value<7.59 ){
            t32.querySelector("input").style.color = "black"
            flag= true
        }else{
            t32.querySelector("input").style.color = "red"
            flag= false
        }

        if(t33.querySelector("input").value >0.7  && t33.querySelector("input").value<0.76 ){
            t33.querySelector("input").style.color = "black"
            flag= true
        }else{
            t33.querySelector("input").style.color = "red"
            flag= false
        }

        if(t34.querySelector("input").value >0.1  && t34.querySelector("input").value<0.15 ){
            t34.querySelector("input").style.color = "black"
            flag= true
        }else{
            t34.querySelector("input").style.color = "red"
            flag= false
        }

        if(t35.querySelector("input").value >18  && t35.querySelector("input").value<19 ){
            t35.querySelector("input").style.color = "black"
            flag= true
        }else{
            t35.querySelector("input").style.color = "red"
            flag= false
        }

// ...........

if(t36.querySelector("input").value >24  && t36.querySelector("input").value<24.3 ){
    t36.querySelector("input").style.color = "black"
    flag= true
}else{
    t36.querySelector("input").style.color = "red"
    flag= false
}

if(t37.querySelector("input").value >7.  && t37.querySelector("input").value<7.16 ){
    t37.querySelector("input").style.color = "black"
    flag= true
}else{
    t37.querySelector("input").style.color = "red"
    flag= false
}
if(t38.querySelector("input").value >0.79  && t38.querySelector("input").value<0.89 ){
    t38.querySelector("input").style.color = "black"
    flag= true
}else{
    t38.querySelector("input").style.color = "red"
    flag= false
}

if(t39.querySelector("input").value >0.2  && t39.querySelector("input").value<0.24 ){
    t39.querySelector("input").style.color = "black"
    flag= true
}else{
    t39.querySelector("input").style.color = "red"
    flag= false
}
if(t40.querySelector("input").value >26  && t40.querySelector("input").value<26.2 ){
    t40.querySelector("input").style.color = "black"
    flag= true
}else{
    t40.querySelector("input").style.color = "red"
    flag= false
}

        // .............krna hai abhi

  if(t41.querySelector("input").value >33  && t41.querySelector("input").value<33.9 ){
            t41.querySelector("input").style.color = "black"
            flag= true
        }else{
            t41.querySelector("input").style.color = "red"
            flag= false
        }

        
        if(t42.querySelector("input").value >6.8  && t42.querySelector("input").value<7 ){
            t42.querySelector("input").style.color = "black"
            flag= true
        }else{
            t42.querySelector("input").style.color = "red"
            flag= false
        }

        if(t43.querySelector("input").value >1  && t43.querySelector("input").value<1.2 ){
            t43.querySelector("input").style.color = "black"
            flag= true
        }else{
            t43.querySelector("input").style.color = "red"
            flag= false
        }

        if(t44.querySelector("input").value >0.25  && t44.querySelector("input").value<0.32 ){
            t44.querySelector("input").style.color = "black"
            flag= true
        }else{
            t44.querySelector("input").style.color = "red"
            flag= false
        }

        if(t45.querySelector("input").value >27  && t45.querySelector("input").value<27.9 ){
            t45.querySelector("input").style.color = "black"
            flag= true
        }else{
            t45.querySelector("input").style.color = "red"
            flag= false
        }

        // .............krna hai abhi

        if(t46.querySelector("input").value >38.9  && t46.querySelector("input").value<39 ){
            t46.querySelector("input").style.color = "black"
            flag= true
        }else{
            t46.querySelector("input").style.color = "red"
            flag= false
        }

        if(t47.querySelector("input").value >6.65  && t47.querySelector("input").value<6.8 ){
            t47.querySelector("input").style.color = "black"
            flag= true
        }else{
            t47.querySelector("input").style.color = "red"
            flag= false
        }

        if(t48.querySelector("input").value >0.9  && t48.querySelector("input").value<1.1){
            t48.querySelector("input").style.color = "black"
            flag= true
        }else{
            t48.querySelector("input").style.color = "red"
            flag= false
        }

        if(t49.querySelector("input").value >0.3  && t49.querySelector("input").value<0.4 ){
            t49.querySelector("input").style.color = "black"
            flag= true
        }else{
            t49.querySelector("input").style.color = "red"
            flag= false
        }

        if(t50.querySelector("input").value >33  && t50.querySelector("input").value<33.5 ){
            t50.querySelector("input").style.color = "black"
            flag= true
        }else{
            t50.querySelector("input").style.color = "red"
            flag= false
        }

    }


    if(flag){
        
        for (let i = 0; i < 5; i++) {
            // document.querySelector(".result-table").style.display = "none"
            confetti();
          }
        
        alert("Congratulations! You have successfully completed the experiment.");
    }else{
        document.querySelector(".result-table").style.display = "flex"
    }