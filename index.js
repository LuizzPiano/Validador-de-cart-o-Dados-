const nome_cartao = 'Luiz';
const numero_cartao = 123456789010;
const codigo_cartao = 872;

function validar_dados(nome, numero, codigo) {
  const nome_correto = nome === nome_cartao;
  if (nome_correto) {
    console.log('Nome está correto');
  } else {
    console.log('Nome está incorreto');
  }
  const numero_correto = numero === numero_cartao;
  if (numero_correto) {
    console.log('Número está correto');
  } else {
    console.log('Número está incorreto');
  }
  const codigo_correto = codigo === codigo_cartao;
  if (codigo_correto) {
    console.log('Codigo está correto');
  } else {
    console.log('Codigo está incorreto');
  }

  const validar_todos_os_dados =
    nome_correto && numero_correto && codigo_correto;
  return validar_todos_os_dados;
}

console.log(validar_dados('Luiz', 123, 132));
