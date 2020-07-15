$(document).ready(function(){
            $(".owl-nav-added button").click(function(){
                $(".testmonial_wrap").css({
                    "transform" :"translateX(-920px)"
                });
            });
    
    
    $(".counter").counterUp({
                delay: 10,
                time: 1000
            });
           
});

$(function() {
    
    
    var header = $(".next-nav");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        console.log(scroll);
        
        if (scroll >= 330) {
            header.addClass("scrolled").css({ 
                "position" : "fixed" ,
                "width" : "100%" ,
                "box-shadow" : "0 3px 16px 0 rgba(0,0,0,.1)" ,
                 "background" : "rgba(255,255,255,.98)"
            }
                
            );
        } else {
            header.removeClass("scrolled").css( "position" , "relative");
        }
         /*if (scroll >= 2069){
              /*var i = parseInt($('.val').text());
             for(i; i < 452 ; i++){    
                 console.log(i);
                 $('.val').text(i);
             }
             var a = parseInt($('.val2').text());
            for(a; a < 53 ; a++){    
            console.log(a);
            $('.val2').text(a + "+");
            
        
    }
        
             var c = parseInt($('.val1').text());
             for(c; c < 53 ; c++){    
                 console.log(c);
                 $('.val1').text(c + "+");
            
        
    }
             $(".counter").counterUp({
                 time: 1000
             });
    }
        
       $(".counter").counterUp({
                 delay: 10,
                 time: 1000
             });*/
        
        
    });
  
});
$(function() {
    var header = $(".next-nav"); 
        var scroll = $(window).scrollTop();
        if (scroll >= 330) {
            header.addClass("scrolled").css( { 
                "position" : "fixed" ,
                 "width" : "100%" ,
                "box-shadow" : "0 3px 16px 0 rgba(0,0,0,.1)" ,
                 "background" : "rgba(255,255,255,.96)"
            });
        } else {
            header.removeClass("scrolled").css( "position" , "relative");
        }
   /* if (scroll >= 2069){
        
        /*var i = parseInt($('.val').text());
        for(i; i < 452 ; i++){    
            console.log(i);
            $('.val').text(i);
            
        
    }
        var a = parseInt($('.val2').text());
        for(a; a < 53 ; a++){    
            console.log(a);
            $('.val2').text(a + "+");
            
        
    }
        var c = parseInt($('.val1').text());
        for(c; c < 53 ; c++){    
            console.log(c);
            $('.val1').text(c + "+");
            
        
    }
         $(".counter").counterUp({
             delay: 10,
             time: 1000
             });
    }*/
    $(".btn_toggle").click(function(){
        $(".drop_toggle").slideToggle(300);
    });
    
    $(".page_span").click(function(){
        $(".page_span-plus").show();
        $(".page_span").hide();
    });
    
    $(".page_span-plus").click(function(){
        $(".page_span").show();
         $(".page_span-plus").hide();
    }); 
    
    $(".blog_span").click(function(){
        $(".blog_span-plus").show();
        $(".blog_span").hide();
    });
    
    $(".blog_span-plus").click(function(){
        $(".blog_span").show();
         $(".blog_span-plus").hide();
    });
    
    $(".link_toggle1").click(function(){
        $(".blog_span").toggle();
         $(".blog_span-plus").toggle();
    });
    $(".link_toggle1").click(function(){
        $(".page_span").show();
         $(".page_span-plus").hide();
    });
    $(".link_toggle2").click(function(){
        $(".blog_span").show();
         $(".blog_span-plus").hide();
    });
     $(".link_toggle2").click(function(){
        $(".page_span").toggle();
         $(".page_span-plus").toggle();
    });
    
    
  
});