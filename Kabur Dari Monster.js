let darahPemain = 100;
let jarakAman = 0;
let putaran = 1;
let stamina = 100;

console.log("===GAME BERTAHAN HIDUP: KABUR DARI MONSTER===");

while (darahPemain > 0 && jarakAman < 65 && stamina > 20) {
  console.log("---PUTARAN KE" + putaran + "---");

  let langkah = 14;
  let seranganMonster = 16;

  jarakAman = jarakAman + langkah;
  darahPemain = darahPemain - seranganMonster;
  stamina = stamina - 29;

  console.log("Kamu berlari sejauh " + langkah + " meter");
  console.log("Jarak total kamu saat ini adalah " + jarakAman + " meter");
  console.log("Sisa darah kamu : " + darahPemain);
  console.log("Stamina Kamu: " + stamina);

  putaran++
}

if (jarakAman >= 65 && darahPemain >= 25) {
  console.log("Selamat! kamu berhasil kabur dari monster");
} else if (jarakAman >= 65 && stamina <= 25) {
  console.log("Kamu berhasil kabur tapi dalam keadaan lelah dan tertidur");
} else if (jarakAman > 30 && darahPemain >= 15) {
  console.log("Kamu Bersembunyi dan beristirahat di semak-semak");

  console.log("==================================================");
  console.log("               FASE 1: GAME SELESAI               ");
  console.log("==================================================");

  console.log("==================================================");
  console.log("               FASE KABUR TERAKHIR                ");
  console.log("==================================================");

  ///FASE 2: GAME LANJUT!
  let putaran2 = 1;

  stamina = stamina + 40;

  console.log("Karena kamu berisitirahat stamina kamu pulih: " + stamina);
  console.log("Kamu memutuskan untuk lanjut lari! Sebelum malam hari tiba");

  while (darahPemain >= 0 && stamina >= 0) {

    console.log("Kamu mulai berlari lagi dari titik " + jarakAman + " meter");

    console.log("---PUTARAN KE " + putaran2 + "---");
    console.log("Kamu lanjut berlari! Total jarakmu adalah " + jarakAman + "meter");
    console.log("Sisa darah setelah di kejar lagi : " + darahPemain);
    console.log("Stamina saat ini : " + stamina);

    jarakAman = jarakAman + 15;
    if (jarakAman >= 85) {
      break;
    }

    darahPemain = darahPemain - 7;
    if (darahPemain <= 0) {
      break;
    }

    stamina = stamina - 13;
    if (stamina <= 0) {
      break;
    }

    putaran2++
  }

  if (jarakAman >= 85 && darahPemain >= 0) {
    console.log("Selamat kamu berhasil kabur setelah istirahat");
  } else {
    console.log("Sayang sekali kamu tertangkap di detik-detik Terakhir!");
  }

} else {
  console.log("Kamu Kecapean dan Di Bawa ke markas MONTSER dan diapresiasi, karena mau BERUSAHA!!");
}