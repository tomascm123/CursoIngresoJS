function mostrar()
{
//tomo la edad  

	
	var edad;
	var estado;


	edad = document.getElementById('edad').value;

	estado = document.getElementById('estadoCivil').value;

	if (edad<18 && estado!="Soltero") {


		alert(" Es menor para no tener edad ");
	}





}//FIN DE LA FUNCIÓN