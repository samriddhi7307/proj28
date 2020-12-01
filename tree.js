 class tree extends base {
  constructor(x,y,width,height){
    super(x,y);
    this.width = width;
    this.height= height;
    this.image = loadImage("tree.png");
  }

  display() {
   // super.display();
    image(this.image,340,40,650,700);
  }
}
