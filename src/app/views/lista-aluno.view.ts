import { formatDiagnostic } from "../../../node_modules/typescript/lib/typescript";
import { AlunoModel } from '../models/aluno.model'

export class ListaAlunoView{
    private screen: HTMLElement;
    constructor(alunos:AlunoModel[]){
        this.screen = (document.createElement("header") as HTMLElement)
        alunos.forEach( aluno => this.screen.innerHTML += `
        <li class="list-group-item list-group-item-action">
        <div class="d-flex flex-column">
            
            <header class="d-inline-flex justify-content-between">
                <div>
                    <strong class="col-sm-6">Nome: ${aluno.nome}</strong>
                    <span class="badge badge-warning">${aluno.media}</span>
                </div> 
                <div>
                    <i class="col-sm-6">${aluno.matricula}</i>
                </div>
            </header>
            
            <main class="d-flex mt-2 flex-column col-sm-12">
                <a href="#" id="exibirnotas">Exibir</a>
                <fieldset class="mt-2 fieldset-notas">

                    <div class="d-flex">
                        <div class="form-group d-inline-flex">
                            <label for="aps1" class="form-control-label col-form-label col-sm-4"><strong>APS</strong></label>
                            <input type="text" name="aps1" id="aps1" class="form-control col-sm-8" value="${aluno.notaAv1}">
                        </div>
                        <div class="form-group d-inline-flex">
                            <label for="av1" class="form-control-label col-form-label col-sm-4"><strong>AV1</strong></label>
                            <input type="text" name="av1" id="av1" class="form-control col-sm-8" value="${aluno.notaAv1}">
                        </div>
                    </div>
                
                    <div class="d-flex">
                        <div class="form-group d-inline-flex">
                            <label for="aps2" class="form-control-label col-form-label col-sm-4"><strong>APS</strong></label>
                            <input type="text" name="aps2" id="aps2" class="form-control col-sm-8" value="${aluno.notaAv2}">
                        </div>
                        <div class="form-group d-inline-flex">
                            <label for="av2" class="form-control-label col-form-label col-sm-4"><strong>AV2</strong></label>
                            <input type="text" name="av2" id="av2" class="form-control col-sm-8" value="${aluno.notaAv2}">
                        </div>
                    </div>
                
                    <div class="d-flex">
                        <div class="form-group d-inline-flex" class="disabled">
                            <label for="aps3" class="form-control-label col-form-label col-sm-4"><strong>APS</strong></label>
                            <input type="text" name="aps3" id="aps3" class="form-control col-sm-8" disabled>
                        </div>
                        <div class="form-group d-inline-flex">
                            <label for="av3" class="form-control-label col-form-label col-sm-4"><strong>AV3</strong></label>
                            <input type="text" name="av3" id="av3" class="form-control col-sm-8" value="${aluno.notaAv3}">
                        </div>
                    </div>

                    <button class="btn btn-light" id="botaoeditar">Editar</button>
                        
                </fieldset>obterNotas()[4]

            </main>

        </div>
    </li>
        `);
    }

    get template():HTMLElement{
        return this.screen;
    }
}

