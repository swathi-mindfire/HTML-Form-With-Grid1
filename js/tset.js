function inputCheck(){
    
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var mail = document.getElementById('email').value;
    var mobile = document.getElementById('mobile1').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    var namereg = /^[a-zA-Z]*$/;
    var mailreg = /^ [a-zA-Z0-9._-]*@[a-zA-Z]*.[a-zA-Z]{2,}$/;
    var mobilereg = /^[0-9]{10}$/;

    var flag=1;

    var s= firstName + lastName;

    alert(s)


    if(firstName.trim()=="" && flag == 1){
        alert("Plese Enter First Name");
        flag = 0;
        return false;
    }

    if (!firstName.match(namereg) && flag == 1){
        alert("Enter valid First Name");
        return false;
    }

    return false;


}