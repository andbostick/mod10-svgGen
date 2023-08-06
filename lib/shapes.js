export class Circle{
   constructor(shape,text,color){
    this.shape = shape
    this.text = text
    this.color = color
   } 

   render() {
    return `
    <svg height="400" width="400">
    <circle cx = "200" cy = "200" r="100" fill="${this.color}" />
    <text x="200" y="200" fill="white" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>

    <style>
    text{
        font-size: 60px;
    }
    </style>
    </svg>
    `
   }
}

export class Square{
    constructor(shape,text,color){
     this.shape = shape
     this.text = text
     this.color = color
    } 
 
    render() {
     return `
     <svg height="400" width="400">
     <rect x = "00" y = "00" width="250" height="250" fill="red" />
     <text x="120" y="100" fill="white" alignment-baseline="middle" text-anchor="middle">${this.text}</text>

     <style>
     text{
        font-size: 60px;
    }
     </style>
     </svg>
     `
    }
 }

 export class Triangle{
    constructor(shape,text,color){
     this.shape = shape
     this.text = text
     this.color = color
    } 
 
    render() {
     return `
     <svg height="400" width="400">
     <polygon points="150 50, 300 400, 0 400" fill="${this.color}"/>
     <text x="160" y="230" fill="white" alignment-baseline="middle" text-anchor="middle">${this.text}</text>


     <style>
     text{
        font-size: 60px;
    }
     </style>
     </svg>
     `
    }
 }

