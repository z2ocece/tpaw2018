$(document).ready(function () { //pour chargement de la page
   
       $('#submit').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#inputNom').val() == "" || $('#inputPrenom').val() == "" || $('#inputDate').val() == "" || $('#inputAdresse').val() == "" || $('#inputMail').val() == "") 
		   {
   
               $('#myModal').modal("show");
           }
           else {
               $(".modal-body").html('<p> Vous etes né le:'+$('#inputDate').val()+'</p> <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Epinay%20sur%20seine&markers=Epinay%20sur%20seine&size=800x400&zoom=13'+$('#inputAdresse').val()+'&markers='+$('#inputAdresse').val()+'&size=800x400&zoom=13"/>');
               $(".modal-title").text("Bienvenue "+$("#inputNom").val());
               $('#myModal').modal("show");
   
           }
   
       });
   })
   
   
    