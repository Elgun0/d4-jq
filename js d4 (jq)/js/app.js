//Accordion
$(".acc-btn").click(function(){
    $(".panel").stop().slideUp();
    $(this).next().stop().slideToggle(200)
})
$(".tab-btn").click(function(){
    // $(".tab-panel").removeClass("active")
    // var btnind=$(this).index()+1
    // $("[tbindex='tab"+btnind+"']").addClass("active")
    $(".tab-panel").removeClass("active")
    $(".tab-panel[tbindex='tab"+$(this).index()+"']").addClass("active")
})