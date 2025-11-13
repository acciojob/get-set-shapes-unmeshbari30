//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}

	getArea(){
		let area = this._height * this._width;
		return area;
	}
}

class Square extends Animal {
	constructor(side){
		super(side, side)
	}
	
	getPerimeter(){
		let per = 2 * (super.height + super.width)
		return per;		
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
