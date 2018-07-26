function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	

	while(contador<5)
	{
		contador = contador + 1;
		numero = prompt ("Ingresar numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}
// EL WHILE ME PERMITE ATRAPAR ERRORES HASTA QUE YA NO LO SEAN, ES VALIDACION
//DENTRO DE LOS PARENTESI DE DEBE IR LO CONTRARIO PARA LA VALIDACION
//CONTADOR = CONTADOR (MAS UNA CONSTANTE)
// ACUMULADOR = ACUMULADOR + NUMERO