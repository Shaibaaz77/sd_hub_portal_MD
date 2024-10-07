function toggleForms(){
    var signinform = document.getElementById('SignInform');
    var registrationform = document.getElementById('registrationform');

    if(SignInform.style.display === 'none')
    {
        SignInform.style.display = 'block';
        registrationform.style.display = 'none';
    }
    else{
        SignInform.style.display = 'none';
        registrationform.style.display = 'block';
    }
}