function guardar_mensajes(){
    let mensaje = {
        id: +$("#id").val(),
        messajetext:  $("#messajetext").val()
    };

    console.log("Se va a registrar el mensaje", mensaje);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('El mensaje es: ');
            }
        },
    });
}