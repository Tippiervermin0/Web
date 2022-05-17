$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");

    const ajaxhivas = new Ajax(token);
    ajaxhivas.selectAjax("/tesztek", adatfelvesz);
    

    function adatfelvesz(adatok) {
        const szuloElem = $(".tarolo");
        const sablonElem = $(".masolat");
        console.log(adatok)
        adatok.forEach((element, index) => {
            let ujelem = sablonElem.clone().appendTo(szuloElem);
            const szakd = new TesztKerdes(ujelem, element);
        });

        sablonElem.remove();
    }

});