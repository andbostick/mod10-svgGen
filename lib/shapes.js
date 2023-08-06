class Circle{
   constructor(shape,text,color){
    this.shape = shape
    this.text = text
    this.color = color
   } 

   render() {
    return `
    <svg height="400" width="400">
    <circle cx = "100" cy = "100" r="60" fill=${this.color} />
    <text x="0" y="0">${this.text}</text>
    </svg>
    `
   }
}

module.exports = Circle