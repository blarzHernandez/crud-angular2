export class CrudAngular {
//Propiedades
id : number;
title: string;
complete: boolean = false;

//Constructor
constructor (values: Object= {}){
    Object.assign(this, values);
}

}

//Instanciamos
/*let crud = new CrudAngular({
    title:'Crud with angular 2',
    complete:false
});*/
