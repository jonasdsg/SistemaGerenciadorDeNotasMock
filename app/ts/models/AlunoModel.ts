class AlunoModel{

    private alunoNotas:number[] = [];
    
    constructor( 
        readonly alunoNome:string,
        readonly alunoMatricula:string)
    {}

    adicionarNotas(notas:number[]){
        this.alunoNotas = notas;
    }

    get media():number{
        let soma:number = 0;
        this.alunoNotas.forEach((nota)=> soma+=nota);
        return soma/(this.alunoMatricula.length-2)
    }

    public obterNotas():number[]{
        return this.alunoNotas;
    }
}