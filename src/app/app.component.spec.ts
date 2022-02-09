import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
/*Tdd programación basada en pruebas*/
describe('AppComponent', () => {
  let component :AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    /*Se ejecuta antes de cada it */
    component = new AppComponent()
  });


  /*it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unitario'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unitario');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('unitario app is running!');
  });
  */
it ('La variable title debe contener el nombre del proyecto', () =>{
  /*Se declaran  los metodos  variables publicos dentro del cuerpo */
  let myVar:string = component.title;
  /*Prueba para un string*/
  expect(myVar).toEqual('unitario')
});
it ('La variable active siempre debe estar en True', ()=>{
  let myVar:boolean = component.active;
/*Prueba para un booleano*/
/*toBeTruthy siempre tiene que ser de verdad*/
/*toBeFalsy siempre tiene que ser falso*/
expect(myVar).toBeTruthy()
});
it ('El metodo sum() debe retornar la suma de dos numeros enviados', ()=>{
  let a:number=5;
  let b:number=10;
  let result: number = a+b;
  expect(component.sum(a,b)).toBe(result);
});
//* *//
it ('Debe exister un metodo llamado sum()', ()=>{
  let metodoLlamada = spyOn(component,'sum');
  component.sum(3,3);
  expect(metodoLlamada).toHaveBeenCalled();
});


});
