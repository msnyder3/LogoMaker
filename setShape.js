
const circle = require('./circle.js');
const square = require('./square.js');
const triangle = require('./triangle.js');

function setShape(response) {

    
    if (response.shape === 'circle') {
        let userShape = new circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'square') {
        let userShape = new square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'triangle') {
        let userShape = new triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = setShape;