$(function(){
  $(document).on("click", ".favorite", function(){

    var guruid = $(this).data("guruid");
    var name = $(this).data("name");

    var data = {
      authenticity_token: $("*[name=authenticity_token]").val(),
      guruid: guruid,
      name: name,
    };
    console.log(data);

    var url = "/users/favorite";

    $.ajax({
      method: "POST",
      url: url,
      data: data,
    }).done(function(data) {});
  });
});
