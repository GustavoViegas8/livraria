import { Autor } from "./Autor";
import { Capitulo } from "./Capitulo";

export class livro{
    private _titulo: string;
    private _isbn: number;
    private _capitulos: Capitulo[];
    private _autores: Autor[];

    constructor(titulo: string, isbn: number, capitulo: Capitulo[], autores: Autor[]){
        this._titulo = titulo;
        this._isbn = isbn;
        this._capitulos = capitulo;
        this._autores = autores;
    }
    
}
