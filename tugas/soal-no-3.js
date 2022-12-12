function gradeUN(mtk, bi, bing, ipa) {
  let result = "";

  let matpel = (mtk, bi, bing, ipa);
  let rataRata =
    (parseInt(mtk) + parseInt(bi) + parseInt(bing) + parseInt(ipa)) / 4;
  if (matpel == null || matpel == "") {
    //jika terdapat salah satu nilai kosong maka bernilai false
    result = "semua nilai harus di isi";
  } else if (isNaN(matpel)) {
    result = "semua nilai harus number";
  } else {
    if (rataRata >= 90) {
      //jika rataRata lebih dari samadengan 90 hasil A - 100
      result = "Grade A";
    } else if (rataRata >= 80) {
      //jika rataRata lebih dari samadengan 80 - 89
      result = "Grade B";
    } else if (rataRata >= 70) {
      //jika rataRata lebih dari samadengan 70 - 79
      result = "Grade C";
    } else if (rataRata >= 60) {
      //jika rataRata lebih dari samadengan 60 - 69
      result = "Grade D";
    } else {
      result = "Grade E"; //jika tidak memenuhi kondisi
    }
  }
  return `nilai rata rata = ${rataRata}\nmendapatkan ${result}`;
}
console.log(gradeUN(95, 95, 95, "88")); //memasukan 4 nilai mtk,bi,bing,ipa
