import { Ingrident } from "../shared/ingrident.model";

export class Recipe{
    public name: string;
    public description:string;
    public imagePath: string;
    public ingredients:Ingrident[];

    constructor(name:string,desc:string,imgpath:string,ingredients:Ingrident[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imgpath;
        this.ingredients=ingredients;
    }
}