function consultar_mensajes(){
    //Servicios de Mensaje 
        $.ajax({
            url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuesta(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                //console.log(status);
            }
            
        });
    
    }
    
    function mostrarRespuesta(items){
        var tablaM = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>MESSAGE TEXT</th>
                      </tr>`;
                      
        
        for (var i=0; i < items.length; i++) {
            tablaM +=`<tr>
                       <td>${items[i].id}</td>
                       <td>${items[i].messagetext}</td>
                       <td>
                        <button onclick="eliminar_mensajes(${items[i].id})">Eliminar</button>
                        <a href="detalle_mensajes.html?id=${items[i].id}">Editar</a>
                   </td>
                    </tr>`;
        }
        tablaM +=`</table>`;
    
        $("#tablaM").html(tablaM);
    }