function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let mensaje = {
        id: +identificador
    };

    console.log(mensaje);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el mensaje');
            }
        },
    });


}