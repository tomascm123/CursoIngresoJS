/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio_Uno;
	var precio_Dos;
	var precio_Tres;
	var resultado;

	precio_Uno = document.getElementById('PrecioUno').value;
	precio_Dos = document.getElementById('PrecioDos').value;
	precio_Tres = document.getElementById('PrecioTres').value;
	
	precio_Uno = parseInt(precio_Uno);
	precio_Dos = parseInt(precio_Dos);
	precio_Tres = parseInt(precio_Tres);
	resultado = (precio_Uno + precio_Dos + precio_Tres);
	alert("El resultado es "+resultado);

}
function Promedio () 
{

	var precio_Dos;
	var precio_Tres;
	var resultado;
	var promedio;

	precio_Uno = document.getElementById('PrecioUno').value;
	precio_Dos = document.getElementById('PrecioDos').value;
	precio_Tres = document.getElementById('PrecioTres').value;

	precio_Uno = parseInt(precio_Uno);
	precio_Dos = parseInt(precio_Dos);
	precio_Tres = parseInt(precio_Tres);
	promedio = parseInt(promedio);
	promedio = 3;
	resultado = (precio_Uno + precio_Dos + precio_Tres)/promedio;
	alert("El promedio es "+resultado);


}
function PrecioFinal () 
{
	
	var precio_Dos;
	var precio_Tres;
	var resultado;
	var	iva;
	var PrecioFinal;

	precio_Uno = document.getElementById('PrecioUno').value;
	precio_Dos = document.getElementById('PrecioDos').value;
	precio_Tres = document.getElementById('PrecioTres').value;

	precio_Uno = parseInt(precio_Uno);
	precio_Dos = parseInt(precio_Dos);
	precio_Tres = parseInt(precio_Tres);
	iva = parseInt(iva);
	iva = 0.21;
	resultado = (precio_Uno + precio_Dos + precio_Tres)*iva;
	PrecioFinal = ( precio_Uno + precio_Dos + precio_Tres + resultado);
	alert(" El precio final es de "+PrecioFinal);





}