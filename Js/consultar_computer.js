function consultar_computer(){
//Nos trae desde el servidos la base de datos de la tabla computador
    $.ajax({
        url:"https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
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
            console.log(status);
        }
        
    });

}

function mostrarRespuesta(items){
    const tablaC = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>BRAND</th>
                    <th>MODEL</th>
                    <th>CATEGORY_ID</th>
                    <th>NAME</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tablaC +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>${items[i].name}</td>  
                </tr>`;
    }
    tablaC +=`</table>`;

    $("#tablaC").html(tablaC);
}
