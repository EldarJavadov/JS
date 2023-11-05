// 4. JS OOP
// Proyekt TəsviriBu xəstəxana idarəetmə sistemi layihəsi, xəstələrin qeydiyyatı, həkimlərin təyin olunması və rezervasiyaların yaradılması və idarə edilməsi kimi əsas əməliyyatları yerinə yetirmək üçün hazırlanmışdır. 
// Proyekt daxilində aşağıdakı siniflər istifadə olunur:

// 1. Xəstə Sinifi
// : Xəstənin adı, soyadı, FIN Code , cinsiyyəti və doğum tarixi kimi xəstə məlumatlarını saxlayır.
// : ad, soyad, FIN Code, cinsiyyət, doğumTarixi.

// 2. Həkim Sinifi
// : Həkimin adı, soyadı və ixtisas sahəsi kimi həkim məlumatlarını saxlayır. Həmçinin, həkimə məxsus xəstə siyahısını qeyd edir.
// : ad, soyad, ixtisasSahesi, xestelerSiyahisi.
// : xesteElaveEt(xeste), xesteSil(xeste).

// 3. Rezervasiya Sinifi
// : Həkim, xəstə və tarix məlumatlarını təyin edir.
// : hekim, xeste, tarix.
// : rezervasiyaMəlumatı().

// 4. Xəstəxana İdarəetmə Sistemi Sinifi
// : Xəstə, həkim və rezervasiya siyahılarını yaratmaq üçün təyinat verir.
// : xesteler, hekimler, rezervasiyalar.
// : xesteElaveEt(xeste), hekimElaveEt(hekim), rezervasiyaAl(hekim, xeste, tarix), rezervasiyaSiyahısınıGöstər().



// 1. Xəstə Sinifi
class Xeste {
  constructor(ad, soyad, finCode, cinsiyyet, dogumTarixi) {
    this.ad = ad;
    this.soyad = soyad;
    this.finCode = finCode;
    this.cinsiyyet = cinsiyyet;
    this.dogumTarixi = dogumTarixi;
  }
}

// 2. Həkim Sinifi
class Hekim {
  constructor(ad, soyad, ixtisasSahesi) {
    this.ad = ad;
    this.soyad = soyad;
    this.ixtisasSahesi = ixtisasSahesi;
    this.xestelerSiyahisi = [];
  }

  xesteElaveEt(xeste) {
    this.xestelerSiyahisi.push(xeste);
    console.log('Yeni xəstə uğurla əlavə edildi!')
  }

  xesteSil(xeste) {
    const id = this.xestelerSiyahisi.indexOf(xeste);

    if (id === -1) {
    	console.log('Qeyd edilən xəstə siyahıda mövcud deyil!')
    }else{
    	this.xestelerSiyahisi.splice(id, 1);
		console.log('Xəstə siyahıdan uğurla silindi!')
    }
  }
}

// 3. Rezervasiya Sinifi
class Rezervasiya {
  constructor(hekim, xeste, tarix) {
    this.hekim = hekim;
    this.xeste = xeste;
    this.tarix = tarix;
  }

  rezervasiyaMelumati() {
    return `Həkim: ${this.hekim.ad} ${this.hekim.soyad}, \nXəstə: ${this.xeste.ad} ${this.xeste.soyad}, \nTarix: ${this.tarix}`;
  }
}

// 4. Xəstəxana İdarəetmə Sistemi Sinifi
class XestexanaIdareetmeSistemi {
  constructor() {
    this.xesteler = [];
    this.hekimler = [];
    this.rezervasiyalar = [];
  }

  xesteElaveEt(xeste) {
    this.xesteler.push(xeste);
  }

  hekimElaveEt(hekimId) {
    this.hekimler.push(hekim);
  }

  rezervasiyaAl(hekim, xeste, tarix) {
    const rezervasiya = new Rezervasiya(hekim, xeste, tarix);
    this.rezervasiyalar.push(rezervasiya);
  }

  rezervasiyaSiyahisiniGoster() {
    return this.rezervasiyalar.map((rezervasiya) => rezervasiya.rezervasiyaMelumati());
  }
}