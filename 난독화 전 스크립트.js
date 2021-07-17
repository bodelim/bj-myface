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
            
            
            
            
            function loadingShow() {
                    $('#scanLoading').show();
                  }
                  function loadingHide() {
                    $('#scanLoading').hide();
                  }

                  var image = document.getElementById('face-image')

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
                  bjname = "감스트";
                  break;
                case "신태일":
                  bjname = "신태일";
                  break;
                case "철구":
                  bjname = "철구";
                  break;
                case "'짭'구":
                    bjname = "짭구";
                    break;
                case "사슴이":
                    bjname = "사슴이";
                    break;
                case "공혁준":
                    bjname = "공혁준";
                    break;
                case "BJ파이":
                    bjname = "bj파이";
                    break;
                case "외질혜":
                    bjname = "외질혜";
                    break;
                case "쯔양":
                    bjname = "쯔양";
                    break;
                case "양팡":
                    bjname = "양팡";
                    break;
                case "김재원":
                    bjname = "김재원";
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
                      hideScanBtn();
                      $('#imageModal').show();
                      var imageSrc = "/showbj/"+bjname+".jpg";
                      document.getElementById("bjImageShow").src = imageSrc;
                      $('#bjImageShow-Title').show();//스캔한 얼굴과 닮은 비제이 보여주기
                      $('#bjImageShow').show();//스캔한 얼굴과 닮은 비제이 보여주기
                      loadingHide();
                  }
            
              function clearResult() {
              $(function(){
                  $('#label-container').empty();
                  $('#bjImageShow').hide();
                  $('#bjImageShow-Title').hide();
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
                    function modalHide() {
                      $('#imageModal').hide();
                 };
            
                function readURL(input) {
              if (input.files && input.files[0]) {
            
                var reader = new FileReader();
            
                reader.onload = function(e) {
                  loadingShow();
                  $('.image-upload-wrap').hide();
                  $('.file-upload-image').attr('src', e.target.result);
                  $('.file-upload-content').show();
            
                  $('.image-title').html(input.files[0].name);
                  //loadingShow();
                };
            
                reader.readAsDataURL(input.files[0]);
                init().then(()=>{
                console.log("predict()호출");
                predict();
                loadingHide();
              });
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