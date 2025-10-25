const cards = [
    { 
        id: 1, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcTjIpwm4rRb00F9LFBS87eg4WqqpZiSnfA&s',
        title: 'Енот 1',
        price: 1200 
    },
    {
        id: 2, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcTjIpwm4rRb00F9LFBS87eg4WqqpZiSnfA&s', 
        title: 'Енот 2', 
        price: 2200 
    },
    { 
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcTjIpwm4rRb00F9LFBS87eg4WqqpZiSnfA&s', 
        title: 'Енот 3', 
        price: 1300 
    }
];

    const container = document.getElementById('cards');

   for(let i = 0; i < cards.length; i++) {
    container.innerHTML += `
    <div class="card">
      <img src="${cards[i].img}" alt="${cards[i].title}">
      <h3>${cards[i].title}</h3>
      <p>${cards[i].price} сом</p>
      <button>Купить</button>
    </div>
  `;
   }