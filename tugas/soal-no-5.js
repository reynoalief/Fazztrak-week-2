function ubahKonsonan(hurufTarget, hurufPengganti, kalimatsebelum) {
  if (typeof kalimatsebelum !== typeof "string") {
    console.log("Tipe data harus String");
  } else {
    let a = kalimatsebelum.toLowerCase();
    console.log("Kalimat sebelumnya = " + a);
    console.log(
      "Kalimat sesudah = " + a.replaceAll(hurufTarget, hurufPengganti)
    );
  }
}
ubahKonsonan("a", "i", "RAynoalief Ridwan Ar Rhojabi");

// let x = typeof "1223";
// console.log(x);
