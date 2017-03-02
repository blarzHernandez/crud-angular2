export class CrudAngular {

id : number;
title: string;
complete: boolean = false;


construct (values: Object= {}){
    Object.assign(this, values);
}

}
