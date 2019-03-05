// Use this presets array inside your presetHandler
const presets = require('./presets');

function validRange(i) {
  if(i>=0 && i<4) {
    return true;
  } else {
    return false;
  }
}

// Complete this function:
const presetHandler = (crud, index, newPresetArray) => {
  let output = [];

  switch (crud) {
    case 'GET':
      if(validRange(index)) {
        output[0] = 200;
        output[1] = presets[index];
      } else {
        output = [404,[]];
      }
      break;
    case 'PUT':
      if(validRange(index)) {
        output[0] = 200;
        presets[index] = newPresetArray;
        output[1] = presets[index];
      } else {
        output = [404,[]];
      }
      break
    default:
      output = [400,[]];
      break
  }

  return output;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
