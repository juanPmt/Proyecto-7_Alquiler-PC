function actualizar_client(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        id: +$("#IDN").val(),
        name:  $("#NAME").val(),
        email: $("#EMAIL").val(),
        age: +$("AGE").val()
    };

    console.log(cliente);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/:id",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('Se ha actualizado de manera correcta');
            }
        },
    });
}