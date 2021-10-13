function guardar_computer(){
    let computador = {
        id: +$("#IDC").val(),
        brand:  $("#MARCA").val(),
        model: $("#MODELO").val(),
        category_id: +$("#CATEGORY_ID").val(),
        name: $("#NOMBREC").val(),
    };

    console.log("Se va a registrar el equipo", typeof computador.name);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('El computador se ha registrado de manera correcta ');
            }
        },
    });
}