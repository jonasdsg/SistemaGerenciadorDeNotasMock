export class AdicionarAlunoView{
    private screen: HTMLElement;
    constructor(){
        this.screen = (document.createElement("header") as HTMLElement);
        this.screen.innerHTML = `
             <header class="col-sm-4">
                
                    <form action="" class="tela-cadastro-de-aluno">
                        
                        <div class="form-group d-flex d-inline-flex">
                            <label for="nome" class="form-control-label col-form-label col-sm-2"><strong>Nome</strong></label>
                            <input type="text" name="nome" id="nome" class="form-control ml-5">
                        </div>

                        <div class="form-group d-flex d-inline-flex">
                            <label for="matricula" class="form-control-label col-form-label col-sm-2"><strong>Matricula</strong></label>
                            <input type="text" name="matricula" id="matricula" class="form-control ml-5">
                        </div>

                        
                        <button class="btn btn-primary" id="cadastrar">Cadastrar</button>

                    </form>
                
                </header>
        `;
    }
    get template():HTMLElement{
        return this.screen;
    }
}