function checkPalindrome(string) {
  if (string.length < 3) {
    //jika parameter kurang dari 3
    console.log("Teks atau angka harus lebih dari dua suku/angka");
  } else {
    const len = string.length; //menentukan panjang huruf
    for (let i = 0; i < len / 2 - 1; i++) {
      // lakukan jika 0 < panjang huruf
      if (string[i] !== string[len - 1 - i]) {
        // jika parameter ke indeks 0 tidak sama dengan parameter ke indeks 6
        //
        console.log("It is not a palindrome"); // maka bukan termasuk palindrome
      }
    }
    console.log("It is a palindrome"); // jika parameter ke indeks 0  sama dengan parameter ke indeks 6 dan
    //parameter 1 sama dengan 5 dan seterusnya maka dinyatakan palindrome
  }
}

checkPalindrome("racecar");
