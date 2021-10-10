function consultar_client(){
    //Servicios de Cliente 
        $.ajax({
            url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
            type: 'GET',
            dataType: 'json',
            success: function(respuestaCL){
                console.log(respuestaCL.items);
                mostrarRespuesta(respuestaCL.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                //console.log(status);
            }
            
        });
    
    }
    
    function mostrarRespuesta(itemsCL){
        var tablaCL = `<table border="1">
                      <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                      </tr>`;
                      
        
        for (var i=0; i < itemsCL.length; i++) {
            tablaCL +=`<tr>
                       <td>${itemsCL[i].id}</td>
                       <td>${itemsCL[i].name}</td>
                       <td>${itemsCL[i].email}</td>
                       <td>${itemsCL[i].age}</td>
                    </tr>`;
        }
        tablaCL +=`</table>`;
    
        $("#tablaCL").html(tablaCL);
    }