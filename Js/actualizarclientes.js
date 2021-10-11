function actualizar(){
    console.log("ejecutando funcion para actualizar");

    let cliente = {
        id: +$("#id").val(),
        brand:  $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
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