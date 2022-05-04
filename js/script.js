//Sticky Navigation

let navbar=$(".navbar");
$(window).scroll(function(){
let oTop =$(".info").offset().top -window.innerHeight;
if($(window).scrollTop()>oTop){
    navbar.addClass("sticky");
}else{
    navbar.removeClass("sticky");
}
});


//Counter Animation

let nCount=function(selector){
    $(selector).each(function(){
        $(this).animate(
            {
            Counter:$(this).text()
        },
        {
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        }
        );
    });
};
let a=0;
$(window).scroll(function(){
    let oTop =$(".numbers").offset().top -window.innerHeight;
    if(a==0 && $(window).scrollTop()>=oTop){
        a++;
        nCount(".rect>h1");
    }
});

//Scroll
$(document).ready(function(){
    $("a").on('click', function(event) {  //for all links
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });


