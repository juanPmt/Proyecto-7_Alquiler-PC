$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarByIdCOM(id);
    }
});

function consultarByIdCOM(id){
    $.ajax({
        url: "https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            
            if (respuesta.items.length==1){
                llenarComputer(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra el Computer con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarComputer(item){
    $("#IDC2").val(item.id);
    $("#MARCA2").val(item.brand);
    $("#MODELO2").val(item.model);
    $("#CATEGORY_ID2").val(item.category_id);
    $("#NAMEC2").val(item.name);
}