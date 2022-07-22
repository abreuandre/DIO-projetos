//solução1
function verificaPalindromo(string) {
  if(!string) return;

  return string.split("").reverse().join("") === string;
}

//console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("gato"));