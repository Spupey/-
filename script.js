// Данные для карточек (можно заменить на API или JSON)
const drinks = [
    {
        id: 1,
        name: "Red Bull Winter Edition",
        flavor: "Гранатовый",
        type: "berry",
        img: "https://via.placeholder.com/300x200/ff2d55/ffffff?text=Red+Bull+Winter"
    },
    {
        id: 2,
        name: "Monster Ultra Sunrise",
        flavor: "Апельсин",
        type: "citrus",
        img: "https://via.placeholder.com/300x200/ff8c00/ffffff?text=Monster+Sunrise"
    },
    {
        id: 3,
        name: "Gorilla Energy Tropical",
        flavor: "Манго-Ананас",
        type: "tropical",
        img: "https://via.placeholder.com/300x200/00b894/ffffff?text=Gorilla+Tropical"
    },
    {
        id: 4,
        name: "Burn Classic",
        flavor: "Кола",
        type: "berry",
        img: "https://via.placeholder.com/300x200/6c5ce7/ffffff?text=Burn+Classic"
    }
];

// Функция для отрисовки карточек
function renderDrinks(filter = "all") {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    const filteredDrinks = filter === "all" 
        ? drinks 
        : drinks.filter(drink => drink.type === filter);

    filteredDrinks.forEach(drink => {
        const card = document.createElement('div');
        card.className = 'drink-card';
        card.innerHTML = `
            <img src="${drink.img}" alt="${drink.name}">
            <div class="drink-info">
                <h3>${drink.name}</h3>
                <p>Вкус: ${drink.flavor}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Фильтрация по кнопкам
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderDrinks(button.dataset.filter);
    });
});

// Первая загрузка
renderDrinks();
