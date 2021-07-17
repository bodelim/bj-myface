
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
                console.log('2');
                for (let i = 0; i < maxPredictions; i++) {  
                    const classPrediction =
                        prediction[i].className + ': ' + prediction[i].probability.toFixed(2) * 100 + "%";
                    labelContainer.childNodes[i].innerHTML = classPrediction;
                }
                console.log('3');
                //$('#scanLoading').hide();
            }

            
