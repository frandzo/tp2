function getElement(id) {
    return document.getElementById(id);
  }
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((res) => {
    console.log(res);
    res.forEach(element => {
        document.write('ID: '+element.id);  
        document.write('<br>')
        document.write('Nombre: '+element.name); 
        document.write('<br>')
        document.write('Usuario: '+element.username); 
        document.write('<br>')
        document.write('Correo: '+element.email); 
        document.write('<br>')
        document.write('Sitio Web: '+element.website); 
        document.write('<br>')
        document.write('<button onclick="test('+element.id+')">Ver Tareas</button>')
        document.write('<hr>')       
    });
    // getElement('name').innerHTML =  'Name: ' + data.name;
    // getElement('symbol').innerHTML = 'Symbol: ' + data.symbol;
    // getElement('rank').innerHTML = 'Rank: ' + data.rank;
    // getElement('price').innerHTML = 'Price: ' + data.quotes.USD.price;
    // do the rest here
});

function test(id){
alert(id);
}