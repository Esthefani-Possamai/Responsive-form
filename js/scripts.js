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

  fone.value = fone.value.replace(
    /^(\d{2})(\d{1})(\d{4})(\d{4})/,
    "($1) $2 $3-$4"
  );
}

//MASCARA DATA

function mascara_data() {
  var data = document.querySelector("#data");

  data.value = data.value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
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


