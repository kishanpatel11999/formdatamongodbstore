$(document).ready(() => {
    $('namecheck').hide();
    $('agecheck').hide();
    $('phonecheck').hide();
    $('emailcheck').hide();
    $('titlecheck').hide();
    $('pagecheck').hide();


    var nameerr = true;
    var ageerr = true;
    var emailerr = true;
    var phoneerr = true;
    var titleerr = true;
    var pageerr = true;
    //name validate

    $('#name').keyup(() => {
        namecheck();    
    });


    //age validate
    
    $('#age').keyup(() => {
        agecheck()
    });



    //phone validation
    $('#phone').keyup(() => {
        phonecheck()
    });



    //email validate
    $('#email').keyup(() => {
        emailcheck()
    });


    //titlecheck
    $('#title').keyup(() => {
       titlecheck()
    });





    //page check
    $('#page').keyup(() => {
       pageheck()
    });




    function namecheck(){
        var name = $('#name').val();
        var nameReg = /^[a-zA-Z]+$/i;
        if(name.trim().length == 0){
            $('#namecheck').show();
            $('#name').addClass('focused');
            $('#namecheck').html('**name should not empty...')
            $('#namecheck').css({'color':'red','font-size':'20px'})
            nameerr = false;
        }
        else{
            $('#namecheck').hide();
            $('#name').removeClass('focused');

            if(!nameReg.test(name)){
                    
                $('#namecheck').show();
                $('#name').addClass('focused');
                $('#namecheck').html('**name shold be formar a-z or A-Z...')
                $('#namecheck').css({'color':'red','font-size':'20px'})
                nameerr = false;

            }else{
                $('#namecheck').hide();
            $('#name').removeClass('focused');
            }
        }

    }
    function agecheck(){
        var age = $('#age').val();
        if(age.trim().length == 0){
            $('#agecheck').show();
            $('#age').addClass('focused');
            $('#agecheck').html('**age should not empty...')
            $('#agecheck').css({'color':'red','font-size':'20px'})
            ageerr = false;

        }
        else{
            $('#agecheck').hide();
            $('#age').removeClass('focused')
            if(isNaN(age) || age < 1 || age>99){
                console.log('in err')
                $('#agecheck').show();
                $('#age').addClass('focused');
                $('#agecheck').html('**please enter a valid age')
                $('#agecheck').css({'color':'red','font-size':'20px'})
                ageerr = false;

    
            }else{
                
                $('#agecheck').hide();
                $('#age').removeClass('focused');
            }
        }
    }
    function phonecheck(){
        var phone = $('#phone').val();
        if(phone.trim().length == 0){
            $('#phonecheck').show();
            $('#phone').addClass('focused');
            $('#phonecheck').html('**phone no should not empty...')
            $('#phonecheck').css({'color':'red','font-size':'20px'})
            ptoneerr = false;

        }
        else{
            $('phonecheck').hide();
            $('#phone').removeClass('focused')
            if(isNaN(phone)){
                // console.log('in err')
                $('#phonecheck').show();
                $('#phone').addClass('focused');
                $('#phonecheck').html('**please enter valid phone no')
                $('#phonecheck').css({'color':'red','font-size':'20px'})
                ptoneerr = false;

            }else{
                
                $('#phonecheck').hide();
                $('#phone').removeClass('focused');
            }
        }
    }
    function emailcheck(){
        var email = $('#email').val();
        if(email.trim().length == 0){
            $('#emailcheck').show();
            $('#email').addClass('focused');
            $('#emailcheck').html('**email should not empty...')
            $('#emailcheck').css({'color':'red','font-size':'20px'})
            emailerr = false;

        }
        else{
            $('#emailcheck').hide();
            $('#email').removeClass('focused')

            var emailRefX = /^[a-zA-Z._]+@[a-z]+\.[a-z]{2,3}$/;
            if( !emailRefX.test(email) ){
                // console.log('in err')
                $('#emailcheck').show();
                $('#email').addClass('focused');
                $('#emailcheck').html('**please enter valid email address')
                $('#emailcheck').css({'color':'red','font-size':'20px'})
                emailerr = false;

            }else{
                
                $('#emailcheck').hide();
                $('#email').removeClass('focused');
            }
        }
    }
    function titlecheck(){
        var title = $('#title').val();
        var titleReg = /^[a-zA-Z]+$/i;

        if(title.trim().length == 0){
            $('#titlecheck').show();
            $('#title').addClass('focused');
            $('#titlecheck').html('**book title should not empty...')
            $('#titlecheck').css({'color':'red','font-size':'20px'})
            titleerr = false;
            
        }
        else{
            $('#titlecheck').hide();
            $('#title').removeClass('focused')
            if(!titleReg.test(title)){
                // console.log('in err')
                $('#titlecheck').show();
                $('#title').addClass('focused');
                $('#titlecheck').html('**please enter valid title')
                $('#titlecheck').css({'color':'red','font-size':'20px'})
                titleerr = false;   
                
            }else{
                
                $('#titlecheck').hide();
                $('#title').removeClass('focused');
            }
        }
    }
    function pageheck(){
        var page = $('#page').val();
        if(page.trim().length == 0){
            $('#pagecheck').show();
            $('#page').addClass('focused');
            $('#pagecheck').html('**page no should not empty...')
            $('#pagecheck').css({'color':'red','font-size':'20px'})
            pageerr = false;
            
        }
        else{
            $('pagecheck').hide();
            $('#page').removeClass('focused')
            if(isNaN(page)){
                // console.log('in err')
                $('#pagecheck').show();
                $('#page').addClass('focused');
                $('#pagecheck').html('**please enter valid page no')
                $('#pagecheck').css({'color':'red','font-size':'20px'})
                pageerr = false;

            }else{
                
                $('#pagecheck').hide();
                $('#page').removeClass('focused');
            }
        }
    }
    

    $("#formid").submit(()=>{
     nameerr = true;
     ageerr = true;
     emailerr = true;
     phoneerr = true;
     titleerr = true;
     pageerr = true;
      namecheck()
      agecheck()
      phonecheck()
      emailcheck()
      titlecheck()
      pageheck()
      if(nameerr == false || ageerr == false || phoneerr == false || emailerr ==false || titleerr == false || pageerr == false){
          return false
      }
      else{
          alert()
          return true
      }
        
        
    })
    

    // $('button').click(()=>{
    //     console.log('button click')
    // })
  
});

