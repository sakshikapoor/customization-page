const itemData = {
    id: 0,
    name: 'Butter Chicken',
    price: 250,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80',
    customizations: {
        required: [
            {
                id: 101,
                name: 'Tandoori Roti',
                price: 0
            },
            {
                id: 102,
                name: 'Basmati Chawal',
                price: 0
            }
        ],
        optional: [
            {
                id: 103,
                name: 'Cookies',
                price: 60,
                category: 'sweets',
                image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80'
            },
            {
                id: 104,
                name: 'Donuts',
                price: 80,
                category: 'sweets',
                image: 'https://images.unsplash.com/photo-1464350042148-1eb1e52943f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1604&q=80'
            },
            {
                id: 105,
                name: 'Crispy Corn',
                price: 160,
                category: 'appetizer',
            },
            {
                id: 106,
                name: 'Veg Extravaganza',
                price: 180,
                category: 'appetizer',
            }
        ]
    }
}

export default itemData;