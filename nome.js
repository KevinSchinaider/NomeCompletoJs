let nome = prompt ("Primeiro nome");
let sobrenome = prompt ("Sobrenome");

let nomeCompleto = `${nome} ${sobrenome}`;
let nomeCatalogo = `${sobrenome.toUpperCase()} ${nome}`;

alert (nomeCompleto);
alert (nomeCatalogo);