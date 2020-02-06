// Home Page Javascript

$(document).ready(function() {
    //    $(".pimg1").mouseenter(function(){
    //        $(".text-1").fadeTo(1500, 1);
    //    }); 
       $(".pimg2").mouseenter(function(){
        $(".text-2").fadeTo(1500, 1);
    }); 
    
});

// Projects Page JS

$(document).ready(function() {
    $("#projects").mouseenter(function(){
        $(".title-fade").fadeTo(1500, 1);
        $(".project-link").animate({left: '150px', opacity: '1'}, 1200);
    });
    $(".project-link").hover(function() {
        $(this).css("color", "#fff");
        $(this).css("font-size", "45px");
    }, function(){
        $(this).css("font-size", "35px");
        $(this).css("color", "#d1d1d1");
    }
    );
});









 

