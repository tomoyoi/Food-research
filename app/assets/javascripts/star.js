$(function(){
  $('.star-all').raty({
    size: 70,
    starOff:  '/assets/star-off.png',
    starOn: '/assets/star-on.png',
    starHalf: '/assets/star-half.png',
    scoreName: 'review[star]',
  });
  
  $('.star').raty({
    size: 36,
    starOff:  '/assets/star-off.png',
    starOn: '/assets/star-on.png',
    starHalf: '/assets/star-half.png',
  });
  
  $(function(){
    $(".star").on("click", function(){
      // const userId = $(this).data("id");
      // const restaurantId = ;
      // const url = "/ratings/" + userId;

      var score = $('.star').raty('score');
      const starReview = score
      
    //   const data = {};
    //   // data["user_id"] = userId;
    //   // data["restaurant_id"] = 1;
    //   data["taste"] = starReview[0];
    //   data["service"] = starReview[1];
    //   data["atmosphere"] = starReview[2];
    //   data["price"] = starReview[3];
    //  console.log(data)

    $("#addForm_food").attr('value', score[0]);
    $("#addForm_service").attr('value', score[1]);
    $("#addForm_atmosphere").attr('value', score[2]);
    $("#addForm_price").attr('value', score[3]);

  //     $.ajax({
  //       url: url,
  //       type: "PUT",
  //       data: data
  //     })
  //     console.log(data)
  //       .done(function(data) {})
  //       .fail(function() {});
    });
  });
})