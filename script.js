const convert=()=>{
    let number=document.getElementById('numberid');
    let numbervalue=parseFloat(number.value);
    
    
    let selected=document.getElementById('selectid');
    let selectedvalue=selected.value;

    let result;
    
    if(selectedvalue == 'celciusvalue'){
        // Celcius to Celcius
        result=numbervalue;
        document.getElementById('ctextid').value=result;
        // Celcius to Kelvin
        result=numbervalue+273.15;
        document.getElementById('ktextid').value=result;
        // Celcius to Fahrenheit
        result=(numbervalue*(9/5))+32;
        document.getElementById('ftextid').value=result;
    }
    else if(selectedvalue == 'kelvinvalue'){
        // Kelvin to Kelvin
        result=numbervalue;
        document.getElementById('ktextid').value=result;
        // Kelvin to Celcius
        result=numbervalue-273.15;
        document.getElementById('ctextid').value=result;
        // Kelvin to Fahrenheit
        result=(numbervalue-273.15)*(9/5)+32;
        document.getElementById('ftextid').value=result;
    }
    else{
        // Fahrenheit to Fahrenheit
        result=numbervalue;
        document.getElementById('ftextid').value=result;
        // Fahrenheit to celcius
        result=(numbervalue-32)*(5/9);
        document.getElementById('ctextid').value=result;
        // Fahrenheit to kelvin
        result=(numbervalue-32)*(5/9)+273.15;
        document.getElementById('ktextid').value=result;
    }
}
const changemode=()=>{
    let btnid=document.getElementById('flexSwitchCheckDefault')
    if(btnid.checked){
        containerlowerpartid.style.backgroundColor="black"
        containerlowerpartid.style.color="white"
        containerupperpartid.style.backgroundColor="black"
        containerupperpartid.style.color="white"
        selectid.style.backgroundColor="black"
        selectid.style.color="white"
        btnnid.style.backgroundColor="black"
        btnnid.style.color="white"
        numberid.style.backgroundColor="black"
        numberid.style.color="white"
        ktextid.style.borderColor="blueviolet"
        ktextid.style.backgroundColor="black"
        ktextid.style.color="white"
        ctextid.style.borderColor="blueviolet"
        ctextid.style.backgroundColor="black"
        ctextid.style.color="white"
        ftextid.style.borderColor="blueviolet"
        ftextid.style.backgroundColor="black"
        ftextid.style.color="white"
    }
    else{
        containerlowerpartid.style.backgroundColor="white" 
        containerlowerpartid.style.color="black"
        containerupperpartid.style.backgroundColor="white"
        containerupperpartid.style.color="black"
        selectid.style.backgroundColor="white"
        selectid.style.color="black"
        btnnid.style.backgroundColor="white"
        btnnid.style.color="black"
        numberid.style.backgroundColor="white"
        numberid.style.color="black"
        ktextid.style.borderColor="blueviolet"
        ktextid.style.color="black"
        ktextid.style.backgroundColor="white"
        ctextid.style.borderColor="blueviolet"
        ctextid.style.backgroundColor="white"
        ctextid.style.color="black"
        ftextid.style.borderColor="blueviolet"
        ftextid.style.backgroundColor="white"
        ftextid.style.color="black"
    }
}