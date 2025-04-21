import { AbstractControl } from "@angular/forms";

export function checkalphabet( txtval:AbstractControl)
{
    var res=txtval.value;
    return res.startsWith('A')?null :{msg:true};
}


