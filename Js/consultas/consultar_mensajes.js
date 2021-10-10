function consultar_mensajes(){
    //Servicios de Mensaje 
        $.ajax({
            url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type: 'GET',
            dataType: 'json',
            success: function(respuestaM){
                console.log(respuestaM.items);
                mostrarRespuesta(respuestaM.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                //console.log(status);
            }
            
        });
    
    }
    
    function mostrarRespuesta(itemsM){
        var tablaM = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>MESSAGE TEXT</th>
                      </tr>`;
                      
        
        for (var i=0; i < itemsM.length; i++) {
            tablaM +=`<tr>
                       <td>${itemsM[i].id}</td>
                       <td>${itemsM[i].messagetext}</td>
                    </tr>`;
        }
        tablaM +=`</table>`;
    
        $("#tablaM").html(tablaM);
    }