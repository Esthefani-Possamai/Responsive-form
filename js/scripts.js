//MASCARA PARA CPF E CNPJ NO MESMO CAMPO

function mascara_cpf_cnpj() {
  var cpf_cnpj = document.querySelector("#cpf_cnpj");
  var ncpf = cpf_cnpj.value.length;

  if (ncpf <= 11) {
    cpf_cnpj.value = cpf_cnpj.value.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
  } else if (ncpf > 11) {
    cpf_cnpj.value = cpf_cnpj.value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }
}

//MASCARA TELEFONE

function mascara_fone() {
  var fone = document.querySelector("#fone");
  var nfone = fone.value.length;

  if(nfone == 1){
    fone.value = `(${fone.value}`
  }else if(nfone == 3){
    fone.value += ") "
  }else if(nfone == 6){
    fone.value += " "
  }else if(nfone == 11){
    fone.value += "-"
  }
  
}

//MASCARA DATA

function mascara_data() {
  var data = document.querySelector("#data");
  var ndata = data.value.length;

  if(ndata == 2 || ndata == 5){
    data.value += "/"
  }
}

//ESCONDER IMPUT OUTROS ENQUANTO OUTROS NÃO TIVER SELECIONADO NO SELECT MODELO

function esconder() {
  var outros = document.querySelector("#outros");
  var modelo = document.querySelector("#modelo");

  if (modelo.value === "Outros") {
    outros.style.display = "block";
  }else{
    outros.style.display = 'none';
  }
}

//PEGAR DATA DEFAULT DO COMPUTADOR

document.onload(data_default())
function data_default(){

  var data = document.querySelector("#data");

  const data_atual = new Date()

  const dia = String(data_atual.getDate()).padStart(2, '0') // 1 -> 01

  const mes = String(data_atual.getMonth() + 1).padStart(2, '0') // jan = 0, 3 -> 03

  const ano = data_atual.getFullYear() // 2022

  const dataAtual = `${dia}/${mes}/${ano}`

  data.value = dataAtual;

}

