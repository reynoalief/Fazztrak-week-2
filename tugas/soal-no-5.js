function ubahvocal(huruftarget, hurufPengganti, kalimatsebelum) {
  let result = "";
  if (typeof kalimatsebelum !== typeof "string" || kalimatsebelum == "") {
    result = "Tipe data harus String dan harus terisi kalimat";
  } else {
    let a = kalimatsebelum.toLowerCase();
    let replace = a.replaceAll(huruftarget, hurufPengganti);
    // let kalA = "Kalimat sebelumnya = " + a;
    result = `Kalimat sebelum = ${a}\nKalimat sesudah = ${replace}
    `;
  }
  return result;
}
console.log(ubahvocal("a", "i", "M. RAynoalief Ridwan Ar Rhojabi"));

// let x = typeof "1223";
// console.log(x);
