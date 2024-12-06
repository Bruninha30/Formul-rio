function validarCupom() {
    const cupom = document.getElementById('cupom').value;
    const cupomMsg = document.getElementById('cupomMsg');
    const cupomError = document.getElementById('cupomError');

    // Exemplo de validação de cupom
    const cuponsValidos = ['DESCONTO10', 'PROMO2024'];
    
    if (cuponsValidos.includes(cupom.toUpperCase())) {
      cupomMsg.style.display = 'inline';
      cupomError.style.display = 'none';
    } else {
      cupomMsg.style.display = 'none';
      cupomError.style.display = 'inline';
    }
  }