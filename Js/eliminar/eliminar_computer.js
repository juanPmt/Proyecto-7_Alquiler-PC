function eliminar_computer(i){
    // eliminar un elemento del computador
    let computer = {
        id: +i
    };

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });

    consultar_computer();
}