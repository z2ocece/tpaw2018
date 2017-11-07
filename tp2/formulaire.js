function validation()
    {
	   var x = document.getElementById("nom").value;
        var text = "";
    
           if ( x.length <5) {
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";;
                      }
    
	
	}