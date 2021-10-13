function actualizar(){
    console.log("ejecutando funcion para actualizar");

    let mensaje = {
        id: +$("#IDM2").val(),
        messagetext: $("#mensaje2").val(),
    };

    console.log(mensaje);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('Se ha actualizado un mensaje');
            }
        },
    });
}