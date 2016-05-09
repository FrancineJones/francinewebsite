$(window).on('wheel', _.throttle(animationFunction, 2600, {
  'leading': true,
  'trailing': false
}))



function animationFunction (e) {
  
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll down
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber + 1);
    
    // console.clear();
    // console.log("Current class is " + currentClass)
    // console.log("new class is " +newClass);
    
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background6")) {
        $("body").removeClass("background6").addClass("background5");
    }

  } else {
    //scroll up
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber - 1);
    
    // console.clear();
    // console.log("Current class is " + currentClass)
    // console.log("new class is " +newClass);         
    
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background0")) {
        $("body").removeClass("background0").addClass("background1");
    }

    // $("body").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
    
    //     $("body").addClass("stop");

    // })
  }
}


  // $(window).on("swipe",function(){
  //   alert("swiped");
  // });                       
  
  

$(window).swipe( {
  swipeUp:function(event, direction, distance, duration) {
    var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber + 1);
    
    // console.clear();
    // console.log("Current class is " + currentClass)
    // console.log("new class is " +newClass);
    
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background6")) {
        $("body").removeClass("background6").addClass("background5");
    }
    
  },
  swipeDown:function(event, direction, distance, duration) {
      var currentClassNumber = parseInt($('body').attr("class").split("")[10]);
    
    var currentClass = $('body').attr("class").split(" ")[0];
    var newClass = "background" + (currentClassNumber - 1);
    
    // console.clear();
    // console.log("Current class is " + currentClass)
    // console.log("new class is " +newClass);         
    
    $("body").removeClass(currentClass);
    $("body").addClass(newClass);

    if ($("body").hasClass("background0")) {
        $("body").removeClass("background0").addClass("background1");
    }
    
  },
  click:function(event, target) { 
  },
  threshold:100,
  allowPageScroll:"vertical"
});