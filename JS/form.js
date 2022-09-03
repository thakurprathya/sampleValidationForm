console.log(`The Travels`);

const name=document.getElementById("name");
const contact=document.getElementById("contact");
const email=document.getElementById("email");
const locationn=document.getElementById("location");
let validname=false, validemail=false, validcontact=false, validlocation=false;

// Validation

name.addEventListener("blur", ()=>{  //validating name
    let regex= /^([a-zA-Z\s]){5,15}$/;  //regex will match if length of string is between 5 to 10
    let str=name.value;
    if(regex.test(str)){ 
        name.classList.remove("is-invalid");  //removing bootstrap class if str and regex match
        validname=true;
    }
    else{ 
        name.classList.add("is-invalid");  //adding bootstrap class if str and regex not match
        validname=false;
    }
});

contact.addEventListener("blur", ()=>{  //validating contact no.
    let regex= /^([0-9]){10}$/;  //regex will match if str contains only numbers and exactly 10
    let str=contact.value;
    if(regex.test(str)){ 
        contact.classList.remove("is-invalid");  //removing bootstrap class if str and regex match
        validcontact=true;
    }
    else{ 
        contact.classList.add("is-invalid");  //adding bootstrap class if str and regex not match
        validcontact=false;
    }
});

email.addEventListener("blur", ()=>{  //validating email
    // let regex= /^()@()\.([c][o][m]){1}$/;   //sample input format with mandatory .com
    let regex= /^([\w\.\-]+)@([\w\.\-]+)\.([a-zA-Z]){2,7}$/;  
    //regex will match if string is in valid email format, in first group must contain few(as used+) (.,-,wordcharacter)
    //then @ will be checked then second group similar as first, then will check . , then string of size between 2-7
    // containing only char
    let str=email.value;
    if(regex.test(str)){ 
        email.classList.remove("is-invalid");  //removing bootstrap class if str and regex match
        validemail=true;
    }
    else{ 
        email.classList.add("is-invalid");  //adding bootstrap class if str and regex not match
        validemail=false;
    }
});

locationn.addEventListener("blur", ()=>{  //validating contact no.
    let regex= /^[a-zA-Z0-9_\.\-]+$/;  //regex will match for most of the input but length greater than 0
    let str=locationn.value;
    if(regex.test(str)){ 
        locationn.classList.remove("is-invalid");  //removing bootstrap class if str and regex match
        validlocation=true;
    }
    else{ 
        locationn.classList.add("is-invalid");  //adding bootstrap class if str and regex not match
        validlocation=false;
    }
});


//submiting the form
let submit=document.getElementById("submit");
submit.addEventListener("click", (e)=>{
    e.preventDefault();  //preventing default action of page reloading on submiting

    //displaying messages accoring to response
    let message=document.getElementById("messages");
    if(validname && validemail && validcontact && validlocation){
        message.innerHTML=`
                        <div class="alert alert-success alert-dismissible fade show" role="alert" id="successmessage">
                            <strong>SUCCESS!!</strong> Your travel request submited successfully.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
        `;
        setTimeout(() => {
            message.innerHTML="";  //deleting message after particular time
        }, 6000);  //adding a timeout after 6000 millisec = 6sec

        //clearing input after successful submission
        let form=document.getElementById("form");
        form.reset();
    }
    else{
        message.innerHTML=`
                        <div class="alert alert-danger alert-dismissible fade show" role="alert" id="failuremessage">
                            <strong>FAILED!!</strong> Your travel request failed, fill in the details correctly & try again.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
        `;
        setTimeout(() => {
            message.innerHTML="";  //deleting message after particular time
        }, 6000);  //adding a timeout after 6000 millisec = 6sec
    }
});