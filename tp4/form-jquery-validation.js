$(document).ready(function () { //pour chargement de la page
   
       $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
	   
           event.preventDefault();
           console.log( "click" );
   
           if ($('#name').val() == "" || $('#firstname').val() == "" || $('#birth').val() == "" || $('#adresse').val() == "" || $('#mail').val() == "") 
		   {
   
               $('#myModal').modal("show");
           }
           else {
			   
			    contactStore.add($('#name').val(),('#firstname').val(), $('#birth').val(), ('#adresse').val(), $('#mail').val());
               
			   var contactList = contactStore.getList();
			   for(var index in contactList){
               console.log(contactList[index].name);
			   
			   
			   
			    document.querySelector("example").innerHTML ='<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>';
  // CODE à compléter pour insérer les autres données
			   
                  }
   
           }
   
       });
	   
	   
	   
	    $('#gps').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           getLocation();
      
   
       });
	   
	   $('#name').on("keyup", function (event) {
            $('#namecount').text($(this).val().length);
        });
	   
	    $('#firstname').on("keyup", function (event) {
            $('#firstnamecount').text($(this).val().length);
        });
	   
	   
	  
	   
	   
	   
	   
   })
   
   
   