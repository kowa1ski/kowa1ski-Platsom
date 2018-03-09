
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

  it('- Si la palabra termina en "ar" se le quita.', function () {
    const translation = platzom("Programar") // Program
    expect(translation).to.equal("Program")
  })

  it('- Si la palabra comienza por "z" se le añade "pe" al final.', function () {
    const translation = platzom('zorro') // zorrope
    expect(translation).to.equal("zorrope")
  })

  it('- Si la palabra comienza por "z" se le añade "pe" al final.', function () {
    const translation = platzom('zarpar') // zarppe
    expect(translation).to.equal("zarppe")
  })

  it('- Si la palabra traducida tiene 10 o más letras se debe partir por la mitad y unir con un guión.', function () {
    const translation = platzom('abecedario') // abece-dario
    expect(translation).to.equal("abece-dario")
  })

  it('- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devulve la misma palabra intercalando mayúsculas y minúsculas.', function () {
    const translation = platzom('sometemos') // SoMeTeMoS
    expect(translation).to.equal("SoMeTeMoS")
  })

})
