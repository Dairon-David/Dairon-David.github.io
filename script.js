document.addEventListener('DOMContentLoaded'), function() {
    // Menú de navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    })};
    
    // Cambiar header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Sistema de tabs del menú
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuItemsContainer = document.querySelector('.menu-items');
    
    // Datos del menú (podrías obtenerlos de una API en un proyecto real)
    const menuData = {
        entradas: [
            {
                name: 'Bruschetta Clásica',
                description: 'Pan tostado con tomate fresco, albahaca y aceite de oliva virgen extra',
                price: '$8.50',
                img: 'menu-item-1.jpg'
            },
            {
                name: 'Carpaccio de Res',
                description: 'Finas láminas de res con rúcula, parmesano y alcaparras',
                price: '$12.00',
                img: 'menu-item-2.jpg'
            },
            {
                name: 'Calamares Fritos',
                description: 'Calamares rebozados y fritos, servidos con alioli',
                price: '$10.50',
                img: 'menu-item-3.jpg'
            }
        ],
        principales: [
            {
                name: 'Risotto de Hongos',
                description: 'Arroz arbóreo con mezcla de hongos silvestres y trufa',
                price: '$18.00',
                img: 'menu-item-1.jpg'
            },
            {
                name: 'Filete Mignon',
                description: 'Corte premium de res con salsa de vino tinto y puré de papas',
                price: '$28.00',
                img: 'menu-item-2.jpg'
            },
            {
                name: 'Salmón a la Parrilla',
                description: 'Salmón fresco con glaseado de miel y mostaza, acompañado de espárragos',
                price: '$22.00',
                img: 'menu-item-3.jpg'
            }
        ],
        postres: [
            {
                name: 'Tiramisú Clásico',
                description: 'Postre italiano con capas de bizcocho, café y crema de mascarpone',
                price: '$8.00',
                img: 'menu-item-1.jpg'
            },
            {
                name: 'Fondant de Chocolate',
                description: 'Pastel de chocolate con centro líquido, acompañado de helado de vainilla',
                price: '$9.50',
                img: 'menu-item-2.jpg'
            },
            {
                name: 'Cheesecake de Frutos Rojos',
                description: 'Tarta de queso cremosa con coulis de frutos rojos',
                price: '$7.50',
                img: 'menu-item-3.jpg'
            }
        ],
        bebidas: [
            {
                name: 'Vino Tinto Reserva',
                description: 'Copa de vino tinto reserva de nuestra selección',
                price: '$9.00',
                img: 'menu-item-1.jpg'
            },
            {
                name: 'Cóctel Signature',
                description: 'Nuestra creación especial con ginebra, frutas frescas y hierbas',
                price: '$12.00',
                img: 'menu-item-2.jpg'
            },
            {
                name: 'Limonada Artesanal',
                description: 'Limonada fresca con menta y jengibre',
                price: '$5.50',
                img: 'menu-item-3.jpg'
            }
        ]
    };
    
    // Función para cargar items del menú
    function loadMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="img/${item.img}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${item.name} <span>${item.price}</span></h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            menuItemsContainer.appendChild(menuItem);
        });
    }
    
    // Cargar entradas por defecto
    loadMenuItems('entradas');
    
    // Event listeners para los tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos los botones
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Cargar items correspondientes
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
    
    // Slider de testimonios
    const testimonios = document.querySelectorAll('.testimonio');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonio = 0;
    
    function showTestimonio(index) {
        testimonios.forEach(testimonio => testimonio.classList.remove('active'));
        testimonios[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click'), function() {
        currentTestimonio}