function guardar(){
    let cliente = {
        id: +$("#id").val(),
        name:  $("#name").val(),
        email: $("#email").val(),
        age: +$("age").val(),
        name: $("#name").val()
    };

    console.log("Se va a registrar el equipo", cliente);

    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert('El cliente se ha registrado de manera correcta ');
            }
        },
    });
}