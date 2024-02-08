class Shape {
    constructor() {
        this.sColor = "";
    }
    setColor(sColor) {
        this.sColor = sColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="80" fill=${this.sColor} />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 100,100 200,100" fill=${this.sColor} />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="100" width="100" height="100" fill=${this.sColor} />`;
    }
}

module.exports = { Circle, Triangle, Square };