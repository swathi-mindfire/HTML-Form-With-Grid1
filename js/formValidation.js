function inputCheck(){
    
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var mail1 =document.getElementById('mail1').value;
    var mobile = document.getElementById('mobile').value;
    var pwd1 = document.getElementById('pwd1').value;
    var pwd2 = document.getElementById('pwd2').value;
    var gendr = document.getElementsByName('gender');
    var city = document.getElementById('city').value;
   
    var caddress = document.getElementById('caddress').value;
    var paddress = document.getElementById('paddress').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;

    var gendrflag= 0;
    var namereg = /^[a-zA-Z]+$/;
    var mailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,7})(.[a-z]{2,7})?$/;
    var mobilereg = /^[1-9]{1}[0-9]{9}$/;
    pwdreg = /^[a-zA-Z0-9!$%#@^&*]*$/;
   
    cityreg = /^[a-zA-Z]+$/;
    
    addrreg = /^[a-zA-Z0-9,-]+$/;
   
    //alert("hello")

    /*
    var flag=1;
    if(firstName.trim()=="" && flag == 1){
        alert("Plese Enter First Name");
        flag = 0;
        return false;
    }
    if (!firstName.match(namereg) && flag == 1){
        alert("Enter valid First Name");
        return false;
    }

    return true;
    */

    //firstname checking

    

   if(firstName.trim() == ""){
    alert("Please Enter First Name");
    document.getElementById('fname').focus();
   return false;
   }

   if (!firstName.match(namereg)){
    alert("Enter valid First Name");
    document.getElementById('fname').focus();
    return false;
   }

   //lastname checking

   if(lastName.trim() == ""){
    alert("Please Enter Last Name");
    document.getElementById('lname').focus();
   return false;
   }

   if (!lastName.match(namereg)){
    alert("Enter valid Last Name");
    document.getElementById('lname').focus();
    return false;
   }

   if(mail1.trim() == ""){
    alert("Please Enter  your mail");
    document.getElementById('mail1').focus();
    
   return false;
   }

   if (!mail1.match(mailreg)){
    alert("Enter valid mail id");
    document.getElementById('mail1').focus();
    return false;
   }

   if(mobile.trim() == ""){
    alert("Please Enter mobile number");
    document.getElementById('mobile').focus();
   
   return false;
   }

   if (!mobile.match(mobilereg)){
    alert("Enter valid mobile number");
    document.getElementById('mobile').focus();
    return false;
   }

   if(pwd1.trim() == ""){
    alert("Please Enter password");
    document.getElementById('pwd1').focus();
   
   return false;
   }
   if(pwd1.length<8){
       alert("Password length should be minimum 8 characters")
       document.getElementById('pwd1').focus();
       return false;
   }

   if (!pwd1.match(pwdreg)){
    alert("Enter valid password");
    document.getElementById('pwd1').focus();
    return false;
   }

   if(pwd2.trim() == ""){
    alert("Please confirm your password");
    document.getElementById('pwd2').focus();
   
   return false;
   }
   if (!(pwd1 === pwd2)) {
    alert("Passwords not matched");
    document.getElementById('pwd2').focus();
    return false;
   }

   for(i=0;i<gendr.length;i++){
       if(gendr[i].checked == true){
           gendrflag=1;
           break;
       }
   }
    if(gendrflag == 0){
        alert("please choose gender")
        return false;

    }

    if(city.trim() == ""){
        alert("Please Enter city name");
        document.getElementById('city').focus();
       
       return false;
       }
    
       if (!city.match(cityreg)){
        alert("Enter valid city name");
        document.getElementById('city').focus();
        return false;
       }

    

   if(caddress.trim() == ""){
    alert("Please Enter your current address");
    document.getElementById('caddress').focus();
   
   return false;
   }

   if (!caddress.match(addrreg)){
    alert("Enter valid address ");
    document.getElementById('caddress').focus();
    return false;
   }

   

  if(paddress.trim() == ""){
    alert("Please Enter your permanent address");
    document.getElementById('paddress').focus();
   
   return false;
   }

   if (!paddress.match(addrreg)){
    alert("Enter valid present address ");
    document.getElementById('paddress').focus();
    return false;
   }

   

   if(country == "0"){
       alert("please select your country");
       return false;
   }

   if(state == "0"){
    alert("please select your state");
    return false;
}


}