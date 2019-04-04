function validacion()
{
	var usuario = document.getElementById("usuario");

	var usuarioLimit = /^$/

	if (usuario.value == "" || usuario.value == null)
	{
		alert("Debe ingresar un usuario");
		usuario.focus();
		return false;
	}

	var password = document.getElementById("password");

	//var claveTam = /^\d{2}[A-zÑñ]{3}$/;

	if (password.value == "" || password.value == null)
	{
		alert("Debe Ingresar una Contraseña");
		password.focus();
		return false;
	}

	return true;
}

function validaControl(control, error)
{
	var control = document.getElementById(control);

	if (control.value == "" || control.value == null)
	{
		document.getElementById(error).innerHTML = "Obligatorio";
		return;
	}
	else
	{
		document.getElementById(error).innerHTML = "";
	}
}

