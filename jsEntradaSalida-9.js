/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt (sueldo);
	resultado = parseInt (resultado);
	aumento = 0.10 ;
	resultado = document.getElementById('resultado').value=(sueldo * aumento);
	resultado = (sueldo * aumento) + sueldo 
	alert(" Importe con aumento es "+resultado);







}
