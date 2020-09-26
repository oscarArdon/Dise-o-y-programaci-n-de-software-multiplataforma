//importando modulo para formulario y validacion
import { FormControl, ValidationErrors } from '@angular/forms';

//clase para definir funciones de validacion y usarlas en cualquier componente
export class ValidacionesPropias {
    static multiplo5(control: FormControl):ValidationErrors{
        let nro = parseInt(control.value);
        if(nro % 5 == 0)//sin error
            return null;
        else            
            return {multiplo5:true}
            //se retorna un tipo de dato ValidationError definiendo como atributo...
            //el nombre del metodo y valor true
    }
}
