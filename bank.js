document.getElementById('login-submit').addEventListener('click',function()
{
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;


    
    //email password

    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    
    if(userEmail =='azmir.marufa.com' && userPassword == 'nesakhor'||userEmail =='tanvir.mitu.com' && userPassword == 'magibuz'||userEmail=='admin@admin.com'&&userPassword=='admin'){
        window.location.href='banking.html'

    }
 
})
