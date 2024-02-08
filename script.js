function adicionarContato() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  const tabelaCorpo = document.querySelector('#contatosTabela tbody');
  const novaLinha = tabelaCorpo.insertRow();

  const celulaNome = novaLinha.insertCell();
  celulaNome.textContent = nome;

  const celulaTelefone = novaLinha.insertCell();
  celulaTelefone.textContent = telefone;


  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
}
