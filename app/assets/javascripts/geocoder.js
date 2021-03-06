$(function(){
  $("#submit").on("click", function(){
    var optionObj = {
      "enableHighAccuracy": false ,
      "timeout": 8000 ,
      "maximumAge": 5000 ,
    } 
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj)
       function successFunc(position){
         var latitude = position.coords.latitude
         var longitude = position.coords.longitude
       }
      } else {
        message = 'ご使用中のブラウザは現在地検索に対応されておりません。'
        Alert.set('warning', message)
      }
      // より精度の高い位置情報を取得
      function successGetPosition(position) {
        options =
          enableHighAccuracy = true;
      }
      function failGetPosition(position) {
        if (error.code)
          if ("case 1")
            message = '位置情報の提供を許可してください。'
          if ("case 2")
            message = '位置情報の取得に失敗しました。'
      }
      function errorCallback(error){
        var err_msg = "エラーです";
        if(error.code);
      }
    function errorFunc(error){
      var errorMessage = {
        0: "原因不明のエラーが発生しました。" ,
        1: "位置情報の取得が許可されませんでした。" ,
        2: "電波状況などで位置情報が取得できませんでした。" ,
        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました。" ,
      }
      alert( errorMessage[error.code] );
    }
    $( function (){
      var url = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
      navigator.geolocation.getCurrentPosition(successFunc)
      function successFunc(position){
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
        var params = {
          latitude: latitude,
          longitude: longitude,
          range: 4,
          freeword: "",
          hit_per_page: 20,
          keyid: '6316c9374757a2bd28619aa9f98a9197',
        }
        params.freeword = $("#key").val();
        $(".search").val("")
        $.getJSON( url, params, function(result){ 
          for ( var i in result.rest ) {
          var restaurant = $("#list")
          var html = 
                  `
                  <div class="restaurant-box">
                    <a href=${ result.rest[ i ].url }><img src="${ result.rest[ i ].image_url.shop_image1 }"></img></a>
                    <ul>
                      <li class="rest-name"> ${ result.rest[ i ].name }</li>
                      <li class="rest-budget"> Budget: ${ result.rest[ i ].budget }yen</li>
                      <li class="rest-address"> Address: ${ result.rest[ i ].address }</li>
                      <li>
                        <button type="button"
                                class="favorite"
                                data-guruid=${ result.rest[ i ].id }
                                data-name=${ result.rest[ i ].name }
                        >お気に入り
                        </button>
                      </li>
                    </ul>
                  </div>
                  `           
          restaurant.append(html);
          }
        }); 
      }     
    });
  });
});
