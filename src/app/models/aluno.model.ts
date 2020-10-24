import { Avaliacao } from './avaliacao-model/avaliacao.interface';
import { ImportsNotUsedAsValues } from '../../../node_modules/typescript/lib/typescript';
import { AvaliacaoModel } from './avaliacao-model/modelo-avaliacao.interface';
export class AlunoModel implements Avaliacao{
    constructor(
        private alunoNome:string,
        private alunoMatricula:string,
        private notas:AvaliacaoModel
    ){}

    get nome():string{
        return this.alunoNome;
    }

    get matricula():string{
        return this.matricula;
    }
    
    media(): number {
        let av1 = this.notaAv1;
        let av2 = this.notaAv2;
        let av3 = this.notaAv3;

       // if(av1>av3 && av2>av3)
       //     return (av1+av2)/2;
       // if(av3>av1 && av2>av1)
       //     return (av3+av2)/2;
       // 
        return 0;
    }

    notaAv1(): number {
        const notas = this.notas;
        return notas.aps1+notas.av1;
    }

    notaAv2(): number {
        const av2 = this.notas;
        return av2.aps2+av2.av2;
    }

    notaAv3(): number {
        const av3 = this.notas.av3;
        return av3;
    }
    
    
    

    
    
    
    
    
    
    
}
