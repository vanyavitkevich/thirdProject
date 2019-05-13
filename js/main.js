
$(document).ready(
    function()
    {
        $(".left-hov").click(
            function()
            {
                var slideItem=null
                var leng=$(".slide__item").length
                var slides=$(".slide__item")
                for(i=0;i<=leng-1;i++){  
                    if($(slides[i]).hasClass("current"))
                    {slideItem=(i == 0)? leng: i}
                }
                $(".slide__item").removeClass("current") 
                $(slides[slideItem-1]).addClass("current")  
            }
        )
        $(".right-hov").click(
            function()
            {
                var slideItem=null
                var leng=$(".slide__item").length
                var slides=$(".slide__item")
                for(i=0;i<=leng-1;i++){  
                    if($(slides[i]).hasClass("current"))
                    {slideItem=(i == leng-1)? -1: i}
                }
                $(".slide__item").removeClass("current") 
                $(slides[slideItem+1]).addClass("current")  
            }
        )
        $(".our_works__li__button1").click(
            function()
            {
                $(".our_works__block1").addClass("current1")
                $(".our_works__block2").removeClass("current1")
                $(".our_works__block3").removeClass("current1")
                $(".our_works__block4").removeClass("current1")
                $(".our_works__block5").removeClass("current1")
                $(".our_works__li__button1").addClass("button__prop")
                $(".our_works__li__button2").removeClass("button__prop")
                $(".our_works__li__button3").removeClass("button__prop")
                $(".our_works__li__button4").removeClass("button__prop")
                $(".our_works__li__button5").removeClass("button__prop")
            }
        )
        $(".our_works__li__button2").click(
            function()
            {
                $(".our_works__block1").removeClass("current1")
                $(".our_works__block2").addClass("current1")
                $(".our_works__block3").removeClass("current1")
                $(".our_works__block4").removeClass("current1")
                $(".our_works__block5").removeClass("current1") 
                $(".our_works__li__button1").removeClass("button__prop")
                $(".our_works__li__button2").addClass("button__prop")
                $(".our_works__li__button3").removeClass("button__prop")
                $(".our_works__li__button4").removeClass("button__prop")
                $(".our_works__li__button5").removeClass("button__prop") 
            }
        )
        $(".our_works__li__button3").click(
            function()
            {
                $(".our_works__block1").removeClass("current1")
                $(".our_works__block2").removeClass("current1")
                $(".our_works__block3").addClass("current1")
                $(".our_works__block4").removeClass("current1")
                $(".our_works__block5").removeClass("current1") 
                $(".our_works__li__button1").removeClass("button__prop")
                $(".our_works__li__button2").removeClass("button__prop")
                $(".our_works__li__button3").addClass("button__prop")
                $(".our_works__li__button4").removeClass("button__prop")
                $(".our_works__li__button5").removeClass("button__prop") 
            }
        )
        $(".our_works__li__button4").click(
            function()
            {
                $(".our_works__block1").removeClass("current1")
                $(".our_works__block2").removeClass("current1")
                $(".our_works__block3").removeClass("current1")
                $(".our_works__block4").addClass("current1")
                $(".our_works__block5").removeClass("current1")  
                $(".our_works__li__button1").removeClass("button__prop")
                $(".our_works__li__button2").removeClass("button__prop")
                $(".our_works__li__button3").removeClass("button__prop")
                $(".our_works__li__button4").addClass("button__prop")
                $(".our_works__li__button5").removeClass("button__prop")
            }
        )
        $(".our_works__li__button5").click(
            function()
            {
                $(".our_works__block1").removeClass("current1")
                $(".our_works__block2").removeClass("current1")
                $(".our_works__block3").removeClass("current1")
                $(".our_works__block4").removeClass("current1")
                $(".our_works__block5").addClass("current1")  
                $(".our_works__li__button1").removeClass("button__prop")
                $(".our_works__li__button2").removeClass("button__prop")
                $(".our_works__li__button3").removeClass("button__prop")
                $(".our_works__li__button4").removeClass("button__prop")
                $(".our_works__li__button5").addClass("button__prop")
            }
        )
        $(".left-hov1").click(
            function()
            {
                var slideItem=null
                var leng=$(".slide__item1").length
                var slides=$(".slide__item1")
                for(i=0;i<=leng-1;i++){  
                    if($(slides[i]).hasClass("current2"))
                    {slideItem=(i == 0)? leng: i}
                }
                $(".slide__item1").removeClass("current2") 
                $(slides[slideItem-1]).addClass("current2")  
            }
        )
        $(".right-hov1").click(
            function()
            {
                var slideItem=null
                var leng=$(".slide__item1").length
                var slides=$(".slide__item1")
                for(i=0;i<=leng-1;i++){  
                    if($(slides[i]).hasClass("current2"))
                    {slideItem=(i == leng-1)? -1: i}
                }
                $(".slide__item1").removeClass("current2") 
                $(slides[slideItem+1]).addClass("current2")  
            }
        )
    }
)