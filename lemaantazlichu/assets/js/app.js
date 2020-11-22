$(function(){
    'use strict'

    // WOW JS
	new WOW().init();
  
    $('#showcase button').on('click', function(){
        $('section#contact').slideToggle();
        $('input#firstname').focus();
    });
    $('body').on('click','#contact form button#back', function(){
        $('section#contact').slideUp();
    });
  
    $('body').on('submit','#contact form',function(e){
        e.preventDefault();

        var firstname = $('#firstname').val(),
            surename = $('#surename').val(),
            email = $('#email').val()

        if($.trim(firstname).length == 0){
            $('#firstname').focus();
        }else if($.trim(surename).length == 0){
            $('#surename').focus();
        }else if($.trim(email).length == 0){
            $('#email').focus();
        }else {
            // submitForm();
            return false;
        }

    }); 

    // function submitForm(){  
    //     var data = $('#contact form').serialize();
    //     $.ajax({
    //         type : 'POST',
    //         url  : '',
    //         data: data,
    //         success :  function(response){
                
    //         }
    //     });

    // }

  });
  
