//Sumie Murakawa CIS111 Javascript BMI Calculator
"use strict";
//window.alert("connected");

function calcBMI(){
    console.log("calcBMI button clicked")
    //make sure all inputs are present and valid, alert message if not
    if (document.getElementById("hightF").value == "" || 
        document.getElementById("hightI").value == "" ||
        document.getElementById("weight").value == "" ){
            window.alert("missing data");
        }
        //make sure all inputs are number, alert message if not
        else if (isNaN(document.getElementById("hightF").value) || 
            isNaN(document.getElementById("hightI").value) ||
            isNaN(document.getElementById("weight").value) ){
                window.alert("Please input numbers")
        }
        else{
            //get height in feet, height in inches, weight and store in 3 variables feet, inches, weight
            var nHightF = parseInt(document.getElementById("hightF").value);
            console.log("nHightF is " + nHightF);
            var nHightI = parseInt(document.getElementById("hightI").value);
            console.log("nHightI is " + nHightI);
            var nWeight = parseFloat(document.getElementById("weight").value);
            console.log("nWeight is " + nWeight);

            //convert height in feet and inches to total inches and store in another variable height
            nHightI = nHightI + (nHightF * 12);
            console.log("After calcurating feet to inch, nHightI is " + nHightI);
            //calculate bmi using the formula, store in a variable called bmi
            var bmi = (nWeight / (nHightI * nHightI)) * 703;
            console.log("bmi is " + bmi);
            //display bmi on the html page
            document.getElementById("bmi").innerHTML = "BMI: " +  bmi;
        }
}//end calcBMI

function reset(){
    //clear the textboxes and the sum
    document.getElementById("hightF").value = "";
    document.getElementById("hightI").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmi").innerHTML = "BMI:";
}//end reset