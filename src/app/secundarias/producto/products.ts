
export class Productos {

  private _id: string;
  private _marca: string;
  private _titulo: string;
  private _precio: string;
  private _img: string;

  
  constructor(_id:string, _marca:string, _titulo:string, _precio:string, _img:string) {
    this._id = _id;
    this._marca = _marca;
    this._titulo = _titulo;
    this._precio = _precio;
    this._img = _img;

  }

  set id(_id:string) {this._id = _id;}
  get id() {return this._id;}

  set marca(_marca:string) {this._marca = _marca;}
  get marca() {return this._marca;}

  set titulo(_titulo:string) {this._titulo = _titulo;}
  get titulo() {return this._titulo;}

  set precio(_precio:string) {this._precio = _precio;}
  get precio() {return this._precio;}

  set img(_img:string) {this._img = _img;}
  get img() {return this._img;}
  
  renderizarPlantilla():string {
    return `
        <div class="contenedor">
          <div class="producto">
              <img src=${this.img} alt=""/>
              <p>${this.titulo}</p>
              <p>${this.precio}</p>
          </div>
        </div>
      `
  }
}