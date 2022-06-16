import { Component, OnInit } from '@angular/core';



// COMPONENTE INLINE
// @Component({
//   selector: 'app-employee',
//   //templateUrl: './employee.component.html', para template inline se comenta esta linea
//   template:"<p>Aqui va un empleado xd</p>", //Se pone lo del html aqui, se puede eliminar el html
//   //styleUrls: ['./employee.component.css'] //para css inline se comenta esta linea
//   styles:["p{background-color:yellow;}"] //Se pone el estilo inline, se puede eliminar el css.
// NOTA IMPORTANTE: en el template se debe usar el caracter ` <p> Aqui va un empleado xd </p> `,
//
// })

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html', 
  styleUrls: ['./employee.component.css'] 
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
