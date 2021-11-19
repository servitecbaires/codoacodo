var form = document.forms['login-form']
	var fusuario = document.getElementById('fusuario')
	var fclave= document.getElementById('fclave')
	form.onsubmit = function(ev){
        console.log(ev)
        textousuario = fusuario.value
        if(textousuario.indexOf('@') == -1){
            alert('El nombre de Ususario debe contener @')
            }
        else if(fclave.value == ""){
            ev.preventDefault()
            alert('Debe ingresar su clave')
        }


        }
