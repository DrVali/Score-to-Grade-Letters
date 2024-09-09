 function about_age() {
    let lbl = document.getElementById("result");

     let num1 = document.getElementById("num").value;

          if(!isNaN(num1)){
            if(num1 >= 0 && num1<101){

              if( num1 >= 90 && num1<=100)
              {
               lbl.innerHTML= "Your grade is A+ .";
              }
              else if( num1 >= 80 && num1<=89){

               lbl.innerHTML= "Your grade is A .";
              }
              else if( num1 >= 70 && num1<=79){

               lbl.innerHTML= "Your grade is B+ .";
              }
                else if( num1 >= 60 && num1<=69){

               lbl.innerHTML= "Your grade is B .";
              }
               else if( num1 >= 50 && num1<=59){

               lbl.innerHTML= "Your grade is C .";
              }
                 else if( num1 >= 1 && num1<50){

               lbl.innerHTML= " Your grade is D :((";
              }
              else if (num1==0){
                 lbl.innerHTML= "You have scored zero. shame on you";
              }
              }

              else if(num1 < 0 || num1>100)
              {
                 lbl.innerHTML= "";
                      alert(`You Entered ${num1} , That isn't between 1-100 .`)

              }
          }
        else{
          lbl.innerHTML= "";
            alert(`You Enterd string or character . Please Insert a Number between 1-100.`);
        }



}
