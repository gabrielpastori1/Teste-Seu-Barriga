module.exports.account = () => {
  return {
    name: "Gabriel",
    email: `gabriel${Math.floor(Math.random() * 1000)}@gmail.com`,
    password: Math.floor(Math.random() * 10000),
  };
};

module.exports.bank_account = () => {
    return "ABC"+Math.floor(Math.random() * 1000);
}

module.exports.payment = (data = {}) => {
    
  let base = {
    tipo: random0or1() ? "REC" : "DESP",
    data_transacao: formatDate(new Date()),
    data_pagamento: formatDate(new Date()),
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
    interessado: "Gabriel",
    valor: Math.floor(Math.random() * 1000),
    status_pago: random0or1() ? "status_pago" : "status_pendente"
  }
  
  return Object.assign(base, data);
}

function random0or1(){
  return Math.floor((Math.random() * 1) + 1);
}

function formatDate(date){
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}