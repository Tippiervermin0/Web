class TesztKerdes {
    constructor(elem, adat) {
        this.elem = elem;
        this.adat = adat;

        this.kerdes = this.elem.children(".kerdes");
        this.v1 = this.elem.children(".v1");
        this.v2 = this.elem.children(".v2");
        this.v3 = this.elem.children(".v3");
        this.v4 = this.elem.children(".v4");
       
        this.adatBeallit(this.adat);
    }
    adatBeallit(adat) {
        this.kerdes.html(adat.kerdes);
        this.v1.html(adat.v1);
        this.v2.html(adat.v2);
        this.v3.html(adat.v3);
        this.v4.html(adat.v4);

    }

}