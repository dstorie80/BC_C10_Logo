const generateHTML = (userInput) => {
    const { characters, tColor, shape, sColor} = userInput;
    
    const outPutHTML = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape === "Circle" ? `<circle cx="150" cy="120" r="80" fill="${sColor}" /> \n <text x="150" y="145" font-size="60" text-anchor="middle" fill="${tColor}">${characters}</text>` : ""}
    ${shape === "Triangle" ? `<polygon points="150,20 100,100 200,100" fill="${sColor}" /> \n  <text x="150" y="85" font-size="30" text-anchor="middle" fill="${tColor}">${characters}</text>` : ""}
    ${shape === "Square" ? `<rect x="100" y="100" width="100" height="100" fill="${sColor}" /> \n <text x="150" y="160" font-size="50" text-anchor="middle" fill="${tColor}">${characters}</text>` : ""}
  
    
  
  </svg>`;


  
    
  
    return outPutHTML;
  };
  
  
  
  
  module.exports = generateHTML;
  