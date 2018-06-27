$('.upload-btn').on('click', function (){
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});


$('#upload-input').on('change', function(){

  var files = $(this).get(0).files;

  if (files.length > 0){
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      formData.append('uploads[]', file, file.name);
    }

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      //success: function(data){
        //$('#view-btn').click();
      //},
      xhr: function() {
      var xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', function(evt) {
        if (evt.lengthComputable) {
          var percentComplete = evt.loaded / evt.total;
          percentComplete = parseInt(percentComplete * 100);
          $('.progress-bar').text(percentComplete + '%');
          $('.progress-bar').width(percentComplete + '%');
          $('#view-btn').click();
        }

      }, false);

      return xhr;
      }
    });
  }
});

$('#view-btn').on('click', function (){
  $.ajax({
    url: '/view',
    type: 'GET',
    success: function(data){
      $('#menu-itens').html(data);
    }
  })
});

$('#view-btn').click();