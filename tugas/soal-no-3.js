const mtk = 70;
const bi = 70;
const bing = 70;
const ipa = 70;

function gradeUN(mtk, bi, bing, ipa) {
  if (mtk && bi && bing && ipa == null) {
    //jika terdapat salah satu nilai kosong maka bernilai false
    console.log("semua nilai harus di isi");
  } else {
    // jika nilai tidak false maka lanjut ke perintah selanjutnya
    let rataRata = (mtk + bi + bing + ipa) / 4;
    console.log(rataRata);
    if (rataRata >= 90) {
      //jika rataRata lebih dari samadengan 90 hasil A - 100
      console.log("Grade A");
    } else if (rataRata >= 80) {
      //jika rataRata lebih dari samadengan 80 - 89
      console.log("Grade B");
    } else if (rataRata >= 70) {
      //jika rataRata lebih dari samadengan 70 - 79
      console.log("Grade C");
    } else if (rataRata >= 60) {
      //jika rataRata lebih dari samadengan 60 - 69
      console.log("Grade D");
    } else {
      console.log("Grade E"); //jika tidak memenuhi kondisi
    }
  }
}
gradeUN(95, 95, 95, 70); //memasukan 4 nilai mtk,bi,bing,ipa
