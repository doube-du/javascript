/*
Ser autenticávle significa ter um método autenticar
*/

export class SistemaAutenticaco{
    
    static login(autenticavel, senha){
        if(autenticavel.autenticar(senha)){
            return true;
        }

        return false;
    }
}