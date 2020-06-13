function capture() {
  event.preventDefault()

  // Sumir com formulário e mostrar valor do cálculo
  document
      .querySelector('.result')
      .classList
      .toggle('hide');

    document
      .querySelector('.inputs')
      .classList
      .toggle('hide');

    document
      .querySelector('.button-row')
      .classList
      .toggle('hide');

  // Cálculo
  let boleto = document.getElementById('boleto').value;
  let nParcelas = document.getElementById('nParcelas').value;
  let valorParcela = parseInt(boleto) / parseInt(nParcelas);

  document.getElementById('retorn').innerHTML = `Você pagará R$ ${valorParcela}`;
}