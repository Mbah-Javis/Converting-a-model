# Converting-a-model
The screenshot is that of the terminal that is how i converted the keras_model using Tensorflowjs converter.
The load_model.js is the javascript file for loading the model in an html document(index.html). This is the 
[link](https://github.com/Mbah-Javis/Fashion-mnist-with-Keras/blob/master/Fashion%20Mnist%20with%20keras%20.ipynb) to where the model was trained
<p>
<strong>How to convert the keras_model.h5</strong>
  <monospace></monospace>
1. Converting to tfjs_layers_model
  <monospace></monospace>
<code>tensorflow_converter --input_format=keras keras_medel.h5 tfjs_layers_model</code>
2. Converting to tfjs_graph_model
  <monospace></monospace>
<code>tensorflow_converter --input_format=keras keras_medel.h5 tfjs_graph_model</code>
</p>
# Deference between tfjs layers model and tfjs graph model
The difference between tfjs layers model and tfjs graph model is that tfjs layers supports both inference and training while tfjs graphs models support only inference

<h3>What is <strong>Inference</strong>?</h3>
<p>Inference refers to the process of using a trained machine learning algorithm to make a prediction. IoT(Internet of Things) data can be used as the input to a trained machine learning  model, enabling predictions that can guide decision logic on the device, at the edge gateway or elsewhere in the IoT system</p>

<h3>While <strong>Training</strong>:</h3>
<p>Refers to the process of creating an machine learning algorithm. Training involves the use of a deep-learning framework (e.g., TensorFlow) and training dataset. IoT data provides a source of training data that data scientists and engineers can use to train machine learning models for a variety of use cases, from failure detection to consumer intelligence</p>
