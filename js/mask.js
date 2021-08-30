function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

function mCPF(cpf) {
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}

function mData(data) {
    data=data.replace(/\D/g,"")
    data=data.replace(/(\d{2})(\d)/,"$1/$2")
    data=data.replace(/(\d{2})(\d)/,"$1/$2")
    return data
}

function alertaConf() {
    alert("Enviado com sucesso");
}