/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
var	importe;
var resultado;
var descuento;

importe = document.getElementById('importe').value;
importe = parseInt (importe);
resultado = parseInt (resultado);
descuento = 0.25 ;
resultado = document.getElementById('resultado').value=(importe * descuento);
resultado = importe - resultado ;
alert("EL resultado con descuento es " +resultado);




}
