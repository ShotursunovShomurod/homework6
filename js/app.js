// 1- masala
// {
//     function musbatManfiyCount(a, b, c) {
//         let musbat = 0;
//         let manfiy = 0;
    
//         if (a > 0) musbat++; else if (a < 0) manfiy++;
//         if (b > 0) musbat++; else if (b < 0) manfiy++;
//         if (c > 0) musbat++; else if (c < 0) manfiy++;
    
//         return { musbat, manfiy };
//     }    
//     console.log(musbatManfiyCount(1, -2, 3)); // { musbat: 2, manfiy: 1 }    
// }

// 2-masala
// {
//     function kattaSon(a, b) {
//         if (a > b) return a;
//         else return b;
//     }
    
//     console.log(kattaSon(5, 10)); // 10
//     console.log(kattaSon(15, 10)); // 15    
// }

// 3-masala
// {
//     function kichikSonTartib(a, b) {
//         if (a < b) return 1;
//         else return 2;
//     }
    
//     console.log(kichikSonTartib(5, 10)); // 1
//     console.log(kichikSonTartib(15, 10)); // 2
// }

// 4-masala
// {
//     function kattaKichik(a, b) {
//         if (a > b) console.log(a, b);
//         else console.log(b, a);
//     }
    
//     kattaKichik(5, 10); // 10 5
//     kattaKichik(15, 10); // 15 10    
// }


// 5-masala
// {
//     function kichikKattaAylantir(a, b) {
//         if (a > b) {
//             let temp = a;
//             a = b;
//             b = temp;
//         }
//         console.log('A:', a, 'B:', b);
//     }
    
//     kichikKattaAylantir(10, 5); // A: 5 B: 10
//     kichikKattaAylantir(3, 7); // A: 3 B: 7    
// }


// 6-masala
// {
//     function o_zgaruvchilar(a, b) {
//         if (a !== b) {
//             a = a + b;
//             b = a;
//         } else {
//             a = 0;
//             b = 0;
//         }
//         console.log('A:', a, 'B:', b);
//     }
    
//     o_zgaruvchilar(10, 5); // A: 15 B: 15
//     o_zgaruvchilar(7, 7); // A: 0 B: 0    
// }


// 7-masala
// {
//     function kattaSonO_zlashtirish(a, b) {
//         if (a !== b) {
//             if (a > b) {
//                 b = a;
//             } else {
//                 a = b;
//             }
//         } else {
//             a = 0;
//             b = 0;
//         }
//         console.log('A:', a, 'B:', b);
//     }
    
//     kattaSonO_zlashtirish(10, 5); // A: 10 B: 10
//     kattaSonO_zlashtirish(7, 7); // A: 0 B: 0    
// }


// 8-masala
// {
//     function uchtaSonKichigi(a, b, c) {
//         let min = a;
//         if (b < min) min = b;
//         if (c < min) min = c;
//         return min;
//     }
    
//     console.log(uchtaSonKichigi(10, 5, 7)); // 5
//     console.log(uchtaSonKichigi(3, 4, 2)); // 2    
// }



// 9-masala
// {
//     function ortachaSon(a, b, c) {
//         if ((a > b && a < c) || (a > c && a < b)) return a;
//         if ((b > a && b < c) || (b > c && b < a)) return b;
//         return c;
//     }
    
//     console.log(ortachaSon(10, 5, 7)); // 7
//     console.log(ortachaSon(3, 4, 2)); // 3    
// }


// 10-masala
// {
//     function kichikKattaEkran(a, b, c) {
//         let arr = [a, b, c];
//         arr.sort((x, y) => x - y);
//         console.log('Kichik:', arr[0], 'Katta:', arr[2]);
//     }
    
//     kichikKattaEkran(10, 5, 7); // Kichik: 5 Katta: 10
//     kichikKattaEkran(3, 4, 2); // Kichik: 2 Katta: 4    
// }


// 11-masala
// {
//     function engKattaYigindi(a, b, c) {
//         if (a + b > a + c && a + b > b + c) console.log(a, b);
//         else if (a + c > a + b && a + c > b + c) console.log(a, c);
//         else console.log(b, c);
//     }
    
//     engKattaYigindi(10, 5, 7); // 10 7
//     engKattaYigindi(3, 4, 2); // 4 3    
// }



// 12-masala
// {
//     function sonlarOzgarish(a, b, c) {
//         if (a < b && b < c) {
//             a *= 2;
//             b *= 2;
//             c *= 2;
//         } else {
//             a = -a;
//             b = -b;
//             c = -c;
//         }
//         console.log('A:', a, 'B:', b, 'C:', c);
//     }
    
//     sonlarOzgarish(1, 2, 3); // A: 2 B: 4 C: 6
//     sonlarOzgarish(3, 2, 1); // A: -3 B: -2 C: -1    
// }



// 13-masala
// {
//     function sonlarOshishKamayish(a, b, c) {
//         if ((a < b && b < c) || (a > b && b > c)) {
//             a *= 2;
//             b *= 2;
//             c *= 2;
//         } else {
//             a = -a;
//             b = -b;
//             c = -c;
//         }
//         console.log('A:', a, 'B:', b, 'C:', c);
//     }
    
//     sonlarOshishKamayish(1, 2, 3); // A: 2 B: 4 C: 6
//     sonlarOshishKamayish(3, 2, 1); // A: 6 B: 4 C: 2
//     sonlarOshishKamayish(1, 3, 2); // A: -1 B: -3 C: -2    
// }


// 14-masala
// {
//     function ikkitasiTeng(a, b, c) {
//         if (a === b) return 3;
//         if (a === c) return 2;
//         if (b === c) return 1;
//         return 0;
//     }
    
//     console.log(ikkitasiTeng(5, 5, 7)); // 3
//     console.log(ikkitasiTeng(5, 7, 5)); // 2
//     console.log(ikkitasiTeng(7, 5, 5)); // 1    
// }


// 15-masala
// {
//     function uchtasiTeng(a, b, c, d) {
//         if (a === b && b === c) return 4;
//         if (a === b && b === d) return 3;
//         if (a === c && c === d) return 2;
//         if (b === c && c === d) return 1;
//         return 0;
//     }
    
//     console.log(uchtasiTeng(5, 5, 5, 7)); // 4
//     console.log(uchtasiTeng(5, 5, 7, 5)); // 3
//     console.log(uchtasiTeng(5, 7, 5, 5)); // 2
//     console.log(uchtasiTeng(7, 5, 5, 5)); // 1    
// }



// 16-masala
// {
//     function engYaqinNuqtaVaMasofa(A, B, C) {
//         let distAB = Math.abs(A - B);
//         let distAC = Math.abs(A - C);
        
//         if (distAB < distAC) {
//             console.log('Eng yaqin nuqta:', B, 'Masofa:', distAB);
//         } else {
//             console.log('Eng yaqin nuqta:', C, 'Masofa:', distAC);
//         }
//     }
    
//     engYaqinNuqtaVaMasofa(0, 3, 7); // Eng yaqin nuqta: 3 Masofa: 3
//     engYaqinNuqtaVaMasofa(5, 1, 10); // Eng yaqin nuqta: 1 Masofa: 4    
// }