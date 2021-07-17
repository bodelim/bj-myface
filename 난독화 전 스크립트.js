// More API functions here:
            // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

            // the link to your model provided by Teachable Machine export panel
            
 



let model, webcam, labelContainer, maxPredictions;

// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
}


var image = document.getElementById('face-image')

function loadingShow() {
        $('#scanLoading').show();
        $('#scanLoading').show();
        predict();
      }
      function loadingHide() {
        $('#scanLoading').Hide();
      }
      // run the webcam image through the image model
      async function predict() {
          // predict can take in an image, video or canvas html element
          //loadingShow()
          console.log('1');
          //loadingShow();
          const prediction = await model.predict(image, false);
          prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
        console.log(prediction[0].className);
        
        var resultMessege;
        switch(prediction[0].className) {
    case "감스트":
      resultMessege = "당신이 올린 면상은 감스트와 제일 닮았네요!"
      break;
    case "신태일":
      resultMessege = "당신이 올린 면상은 신태일과 제일 닮았네요!"
      break;
    case "철구":
      resultMessege = "당신이 올린 면상은 철구와 제일 닮았네요!"
      break;
    case "'짭'구":
        resultMessege = "당신이 올린 면상은 짭구와 제일 닮았네요!"
        break;
    case "사슴이":
        resultMessege = "당신이 올린 면상은 사슴이와 제일 닮았네요!"
        break;
    case "공혁준":
        resultMessege = "당신이 올린 면상은 공혁준과 제일 닮았네요!"
        break;
    case "BJ파이":
        resultMessege = "당신이 올린 면상은 BJ파이와 제일 닮았네요!"
        break;
  default:
    // code block
}
          console.log('2');
          
          /*
          for (let i = 0; i < maxPredictions; i++) {  
              const classPrediction =
                  prediction[i].className + ': ' + prediction[i].probability.toFixed(2) * 100 + "%";
              labelContainer.childNodes[i].innerHTML = classPrediction;
          }
          */
          const classPrediction =
          prediction[0].className + ': ' + prediction[0].probability.toFixed(2) * 100 + "%";

          labelContainer.childNodes[0].innerHTML = classPrediction;

          console.log('3');
          $('#scanLoading').hide();
          hideScanBtn();
      }

      function clearResult() {
  $(function(){
      $('#label-container').empty();
      for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
  });
} 

function hideScanBtn(){
  $(function(){
    $('#scanBtn').hide();
  })
}

function showScanBtn(){
  $(function(){
    $('#scanBtn').show();
  })
}

document.documentElement.style.setProperty('--h', window.innerHeight + 'px');

// 브라우저 리사이즈에 대응
window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--h', window.innerHeight + 'px');
});

jQuery(document).ready(function() {
                $('#join_popup').show();
        });
        function join_popup_choice_click(flag) {
             $('#join_popup').hide();
        };

		function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();
      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  showScanBtn();
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});
