// for (var i = 0; i < 10; ++i) {
//     log(i)
//   }
// function log(i) {
//     setTimeout(function() {
//         console.log(i)
//     });
// }
//   console.log(-1);

for (var i = 0; i < 10; ++i) {
    setTimeout(log(i));
  }
function log(i){
    return function() {
    console.log(i)
    }
}
  console.log(-1);
