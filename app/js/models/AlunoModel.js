class AlunoModel {
    constructor(alunoNome, alunoMatricula) {
        this.alunoNome = alunoNome;
        this.alunoMatricula = alunoMatricula;
        this.alunoNotas = [];
    }
    adicionarNotas(notas) {
        this.alunoNotas = notas;
    }
    get media() {
        let soma = 0;
        this.alunoNotas.forEach((nota) => soma += nota);
        return soma / (this.alunoMatricula.length - 2);
    }
    obterNotas() {
        return this.alunoNotas;
    }
}
