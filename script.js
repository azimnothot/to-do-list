
$("input[type = 'text'").keypress(function(event){
    if(event.which === 13){
      var word = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + word + "</li>")
    }
});
$("ul").on("click","li", function(){
    $(this).toggleClass("cross");

})
$("ul").on("click","span", function(){
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
        event.stopProgration();
    });
    
});
$(".fa-plus").on("click", function(){
    $("input").toggleClass("hell");
})
