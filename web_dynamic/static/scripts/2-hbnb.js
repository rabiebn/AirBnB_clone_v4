$(function () {
  // dsiplay the API status
  endpoint = 'http://0.0.0.0:5001/api/v1/status/'
  $.get(endpoint, function (data) {
    if (data.status == 'OK')
      $("div#api_status").addClass('available');
    else
      $("div#api_status").removeClass('available');
  });
});
