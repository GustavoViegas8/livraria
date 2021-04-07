export class Capitulo{
   private _tituloCap: string;
   private _texto: string;
   private _capitulo: number;

   constructor(tituloCap: string, texto: string, capitulo: number){
       this._tituloCap = tituloCap;
       this._texto = texto;
       this._capitulo = capitulo;
   }
   
   public get tituloCap() : string{
        return this._tituloCap;
   }
   public get texto() : string {
        return  this._texto;
   }
   public get capitulo() : number{
       return this._capitulo;
   }

   public set tituloCap(tituloCap : string){
       this._tituloCap = tituloCap
   }
   public set texto(texto : string){
       this._texto = texto
   }
   public set capitulo(capitulo : number){
       this._capitulo = capitulo
   }

}