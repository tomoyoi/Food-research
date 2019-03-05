$(function(){
  $('.currentLocation').on("click", function() {
    function successFunc(position)
    {
      console.log( position.coords.latitude );
      console.log( position.coords.longitude );
    }
    function errorFunc(error)
      {
        var errorMessage = {
          0: "原因不明のエラーが発生しました…。" ,
          1: "位置情報の取得が許可されませんでした。" ,
          2: "電波状況などで位置情報が取得できませんでした。" ,
          3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました。" ,
        };
        alert( errorMessage[error.code] );
      }
      var optionObj = {
        "enableHighAccuracy": false ,
        "timeout": 8000 ,
        "maximumAge": 5000 ,
      };

    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(successFunc, errorFunc, optionObj)
    } else {
      message = 'ご使用中のブラウザは現在地検索に対応されておりません。'
      Alert.set('warning', message)
    }
    function successGetPosition(position) {
      window.location.href = "/restaurant/searches?latitude=#{position.coords.latitude}&longitude=#{position.coords.longitude}"
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
    function errorCallback(error) {
      var err_msg = "エラーです";
      if(error.code);
    }
  });
});