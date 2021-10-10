function consultar_client(){
    //Servicios de Cliente 
        $.ajax({
            url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
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
        var tabla = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                      </tr>`;
                      
        
        for (var i=0; i < items.length; i++) {
            tabla +=`<tr>
                       <td>${items[i].id}</td>
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>
                       <td>${items[i].age}</td>
                    </tr>`;
        }
        tabla +=`</table>`;
    
        $("#tabla").html(tabla);
    }