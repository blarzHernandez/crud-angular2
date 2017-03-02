import {CrudAngular} from './crud-angular';

describe('CrudAngular', () => {
  it('Debe crear una instancia', () => {
    expect(new CrudAngular()).toBeTruthy();
  });


it('Debe aceptar datos en el constructor',() =>{
   let crud = new CrudAngular ({
     title:'hola',
     complete:true
   });
   expect(crud.title).toEqual('hola');
   expect(crud.complete).toEqual(true);

});

});
