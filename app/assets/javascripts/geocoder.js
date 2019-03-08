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
      var params = {
        latitude: "",
        longitude: "",
        range: 4,
        hit_per_page: 20,
        freeword: "",
        keyid: '6316c9374757a2bd28619aa9f98a9197',
      }
      params.freeword = $("#key").val();
      $(".search").val("");
      console.log(params.freeword)
      navigator.geolocation.getCurrentPosition(successFunc)
       function successFunc(position){
         params.latitude = position.coords.latitude
         params.longitude = position.coords.longitude
         console.log(params)
       }
      $.getJSON( url, params, function(result){
        for ( var i = 0; i < 20; i = i + 1 in result.rest ){
          $("#list").append("<tr><th>" + result.rest[i].name + "</td><td>" + result.rest[i].url + "</td><td>" + result.rest[i].tel + "</td><td>" + result.rest[i].address)
          var result = {
            name: result.rest[i].name, 
            url: result.rest[i].url,
            tel: result.rest[i].tel,
            address: result.rest[i].address,
            image_url: result.rest[i].image_url,
            hit_per_page: result.rest[i].hit_per_page,
          }     
          console.log(result)    
        }  
      });      
    });
  });
});











