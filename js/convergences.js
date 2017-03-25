
	//autoscroll
	// $("html, body").animate({scrollTop: 10000},10000);



   //variable to keep track of page location
    var pagLoc=0;
    
    //variable pause, false if scrolling, true if page pause
    var paused=false;
    

    //PAGE LOAD
    //on page load
    $(document).ready(function(){        
        //call play funtion
        play();
    });
    
    
    //WINDOW SCROLL
    //on user scroll
    $(window).scroll(function(){
        //get page current location
        var cur= $(document).scrollTop();
        
        //compare to page location before scroll
        //if current is than previous page location (user scrolled up) then pause
        if (cur<=pagLoc) {
            //pause
            pause();
        }
        
        //update page location
        pagLoc=cur;
    });
    
    //BUTTON CLICK
    //click pause button
    $("#scroll-ctl").click(function(){
        //if page not scrolling -- scroll
        if (paused) {
            play();
            
        //if page scrolling -- sctop
        } else {
            pause();
        }
    });
    
    //FUNCTION PAUSE
    function pause() {
        //end all animations on body (aka scroll);
        $( "html, body" ).stop();
        
        //temp: make button say play
        $( "#scroll-ctl" ).html("PLAY");
        
        //update paused status
        paused=true;
    }
    
    //FUNCTION PLAY
    function play() {
        //first number scroll location
        //second number how long in ms
        
        //if first number is greater than page height it stops automatically
        $("html, body").animate({scrollTop: 50000},50000);   
         
        //Temp: make button say pause
        $( "#scroll-ctl" ).html("PAUSE");
        
        //update paused status 
        paused=false;
    }
