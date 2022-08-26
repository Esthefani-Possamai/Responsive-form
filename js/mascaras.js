

function mascara_cpf_cnpj(){
    var cpf_cnpj = document.querySelector('#cpf_cnpj')
    var ncpf = cpf_cnpj.value.length;

    if(ncpf <= 11){

        cpf_cnpj.value = cpf_cnpj.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    }else if(ncpf > 11){

        cpf_cnpj.value = cpf_cnpj.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

    }

}


function mascara_fone(){
    var fone = document.querySelector('#fone')

    fone.value = fone.value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
}

function mascara_data(){
    var data = document.querySelector('#data')

    data.value = data.value.replace(/^(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

}