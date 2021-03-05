const View = {

  render({ minutes, seconds }) {
    //return a template literal(é uma forma de colocar strings e
    //fazer formatação, adicionar variables e etc)
    document.body.innerHTML = `
      <p>Próximo Post em</p>
      <span>${minutes} : ${seconds}</span>
    `;
  }
}

export { View };
