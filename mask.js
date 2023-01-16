
let n=0;
$(document).ready(function () {
  $("#telefone").mask("(99) 99999-9999");
  $("#cpf").mask("999.999.999-99");
  $("#data_nascimento").mask("99/99/9999");
});


console.log(n);
function numero(){
  n++
  console.log(n);
};
