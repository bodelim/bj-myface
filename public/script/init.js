// More API functions here:
            // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

            // the link to your model provided by Teachable Machine export panel
            
 

const URL = 'https://teachablemachine.withgoogle.com/models/s_iVHGknq/';

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