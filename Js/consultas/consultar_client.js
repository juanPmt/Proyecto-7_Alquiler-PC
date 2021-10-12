function consultar_client(){
    //Servicios de Cliente 
        $.ajax({
            url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaCli(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }
            
        });
    
    }
    
    function mostrarRespuestaCli(items){
        var tablaCL = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                      </tr>`;
                      
        
        for (var i=0; i < items.length; i++) {
            tablaCL +=`<tr>
                       <td>${items[i].id}</td>
                       <td><a href="../detalle_client.html">${items[i].name}</a></td>
                       <td>${items[i].email}</td>
                       <td>${items[i].age}</td>
                    </tr>`;
        }
        tablaCL +=`</table>`;
    
        $("#tablaCL").html(tablaCL);
    }