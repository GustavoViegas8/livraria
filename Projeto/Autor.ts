export class Autor{
    private _nome: string;
    private _date: Date;

    constructor(nome: string, data){
        this._nome = nome;
        this._date = data;
    }

    public get nome() : string {
        return this._nome;
    }
    public get data() : Date {
        return this._date;
    }
    
    public set nome(nome: string){
        this._nome = nome;
    }
    public set data(data : Date){
        this._date = data;
    }
}
