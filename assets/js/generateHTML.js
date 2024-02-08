const generateHTML = (userInput) => {
    const { characters, tColor, shape, sColor} = userInput;
    
    const outPutHTML = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape === "circle" ? `<circle cx="150" cy="150" r="80" fill="${sColor}" />` : ""}
    ${shape === "triangle" ? `<polygon points="150,20 100,100 200,100" fill="${sColor}" />` : ""}
    ${shape === "square" ? `<rect x="100" y="100" width="100" height="100" fill="${sColor}" />` : ""}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${tColor}">${characters}</text>
  
  </svg>`;


  
    
  
    return outPutHTML;
  };
  
  
  
  
  module.exports = generateHTML;
  