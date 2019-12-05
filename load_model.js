// JavaScript
async function run() {
const layer_model = await tf.loadLayersModel('tfjs_layers_model/model.json');

const grah_model = await tf.loadGraphModel('tfjs_graph_model/model.json');
}