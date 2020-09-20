export class Recipe {
  public name: string;
  public desc: string;
  public imagePath: string;
  public

  // what gets called to create the object
  constructor(name:string,desc:string,imagePath:string){
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
