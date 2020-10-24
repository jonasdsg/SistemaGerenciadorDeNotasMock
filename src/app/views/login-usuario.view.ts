export class LoginUsuarioView{
    private screen:HTMLElement;
    
    constructor(){
        this.screen =  (document.createElement("form") as HTMLElement);
        this.screen.innerHTML =`
        <form class="" method="post">
                
                <div class="form-group d-inline-flex">
                    <label for="usuario" class="form-control-label col-form-label col-sm-4"><strong>Usuário</strong></label>
                    <input type="text" name="usuario" id="usuario" class="form-control">
                </div>

                <div class="form-group d-inline-flex">
                    <label for="senha" class="form-control-label col-form-label col-sm-4"><strong>Senha</strong></label>
                    <input type="password" name="senha" id="senha" class="form-control">
                </div>

                <button class="btn btn-primary" id="entrar">Entrar</button>
            </form>
        `;
    }
    get template(): HTMLElement{
        return this.screen;
    }
}