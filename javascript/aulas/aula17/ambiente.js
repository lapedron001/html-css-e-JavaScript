let amigo = {nome: 'jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.peso} pesa ${amigo.peso}`)