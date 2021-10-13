function actualizar_computer(){
    //Funcion para actualizar computador
    let computer = {
        id: +$("#IDC2").val(),
        brand:  $("#MARCA2").val(),
        model: $("#MODELO2").val(),
        category_id: +$("#CATEGORY_ID2").val(),
        name: $("#NOMBREC2").val(),
    };

        $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el computador');
            }
        },
    });
}