/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero_Uno;
	var	numero_Dos;
	var resultado;

	numero_Uno = document.getElementById('numeroUno').value;
	numero_Dos = document.getElementById('numeroDos').value;

	numero_Uno = parseInt (numero_Uno);
	numero_Dos = parseInt (numero_Dos);
	resultado = numero_Uno + numero_Dos ;
	alert(" La suma es "+resultado);

}

function restar()
{
	
	var numero_Uno;
	var	numero_Dos;
	var resultado;

	numero_Uno = document.getElementById('numeroUno').value;
	numero_Dos = document.getElementById('numeroDos').value;

	numero_Uno = parseInt (numero_Uno);
	numero_Dos = parseInt (numero_Dos);
	resultado = numero_Uno - numero_Dos ;
	alert(" La resta es "+resultado);
		


}

function multiplicar()
{ 
	
	var numero_Uno;
	var	numero_Dos;
	var resultado;

	numero_Uno = document.getElementById('numeroUno').value;
	numero_Dos = document.getElementById('numeroDos').value;

	numero_Uno = parseInt(numero_Uno);
	numero_Dos = parseInt(numero_Dos);
	resultado = numero_Uno * numero_Dos ;
	alert(" Su multiplicacion es "+resultado);

}

function dividir()
{
	
	var numero_Uno;
	var	numero_Dos;
	var resultado;

	numero_Uno = document.getElementById('numeroUno').value;
	numero_Dos = document.getElementById('numeroDos').value;

	numero_Uno = parseInt(numero_Uno);
	numero_Dos = parseInt(numero_Dos);
	resultado = numero_Uno / numero_Dos ;
	alert(" Su division es "+resultado);




}

