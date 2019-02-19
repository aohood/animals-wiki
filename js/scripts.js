$("document").ready(function(){
  $("#submit").click(function(event){

    event.preventDefault();

    var animal = $("input:radio[name=animals]:checked").val();
  
    if(animal === "cats"){
      $("#c").show();
      $("#s").hide();
      $("#b").hide();
    }

    else if(animal==="squirrels"){
      $("#s").show();
      $("#c").hide();
      $("#b").hide();
    }

    else{
      $("#b").show();
      $("#s").hide();
      $("#c").hide();
    }


  });

});
