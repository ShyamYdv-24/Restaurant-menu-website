/* =========================================================
   FOODLAND CAFE & RESTRO
   MAIN JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {
        todaySpecial: "Today's Special",
        fullMenu: "View Full Menu",
        all: "All",
        food: "Food",
        drinks: "Drinks",
        bar: "Bar",
        desserts: "Desserts",
        combos: "Combos / Sets",
        search: "Search food, drinks, desserts...",
        back: "Back",
        ingredients: "Ingredients",
        price: "Price",
        addCart: "Add to Cart",
        yourOrder: "YOUR ORDER",
        yourCart: "Your Cart",
        emptyCart: "Your cart is empty",
        exploreMenu: "Explore Menu",
        noItems: "No items found",
        noItemsText: "Try another search or select a different category.",
        reset: "Reset",
        openNow: "Open Now",
        closedNow: "Closed Now",
        closesAt: "Closes at 11:00 PM",
        opensAt: "Opens at 9:00 AM"
    },

    ne: {
        todaySpecial: "आजको विशेष",
        fullMenu: "पूरै मेनु हेर्नुहोस्",
        all: "सबै",
        food: "खाना",
        drinks: "पेय पदार्थ",
        bar: "बार",
        desserts: "डेजर्ट",
        combos: "कम्बो / सेट",
        search: "खाना, पेय पदार्थ खोज्नुहोस्...",
        back: "पछाडि",
        ingredients: "सामग्री",
        price: "मूल्य",
        addCart: "कार्टमा थप्नुहोस्",
        yourOrder: "तपाईंको अर्डर",
        yourCart: "तपाईंको कार्ट",
        emptyCart: "तपाईंको कार्ट खाली छ",
        exploreMenu: "मेनु हेर्नुहोस्",
        noItems: "कुनै आइटम भेटिएन",
        noItemsText: "अर्को खोजी गर्नुहोस् वा फरक category चयन गर्नुहोस्।",
        reset: "रिसेट",
        openNow: "अहिले खुला",
        closedNow: "अहिले बन्द",
        closesAt: "बन्द हुन्छ 11:00 PM",
        opensAt: "खुल्छ बिहान 9:00 AM"
    }

};


/* =========================================================
   IMAGE COLLECTION
========================================================= */

const images = {

    breakfast:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",

    salad:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",

    soup:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",

    snacks:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",

    pizza:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",

    pasta:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",

    burger:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

    sandwich:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",

    mainCourse:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",

    momo:
        "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=900&q=85",

    coffee:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",

    tea:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",

    smoothie:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",

    lassi:
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",

    juice:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=85",

    milkshake:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",

    softdrink:
        "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85",

    rum:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",

    gin:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=85",

    vodka:
        "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=900&q=85",

    beer:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",

    cocktail:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",

    wine:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85",

    cake:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",

    icecream:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",

    brownie:
        "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85",

    pastry:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",

    pudding:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",

    cheesecake:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",

    combo:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"

};


/* =========================================================
   MENU DATA
========================================================= */

const menuItems = [

    {
        id: 1,
        category: "food",
        subcategory: "breakfast",
        name: "Classic Breakfast Platter",
        description: "Eggs, toast, sausage, potatoes and fresh seasonal sides.",
        ingredients: ["Eggs", "Toast", "Sausage", "Potatoes"],
        price: 480,
        rating: 4.8,
        reviews: 124,
        image: images.breakfast,
        favourite: false
    },

    {
        id: 2,
        category: "food",
        subcategory: "breakfast",
        name: "Masala Omelette",
        description: "Fluffy omelette with onion, tomato, herbs and mild spices.",
        ingredients: ["Egg", "Onion", "Tomato", "Herbs"],
        price: 220,
        rating: 4.7,
        reviews: 88,
        image: images.breakfast,
        favourite: false
    },

    {
        id: 3,
        category: "food",
        subcategory: "breakfast",
        name: "French Toast",
        description: "Golden brioche toast served with fruit and honey.",
        ingredients: ["Bread", "Egg", "Milk", "Honey"],
        price: 280,
        rating: 4.6,
        reviews: 76,
        image: images.breakfast,
        favourite: false
    },

    {
        id: 4,
        category: "food",
        subcategory: "salad",
        name: "Caesar Salad",
        description: "Crisp lettuce, parmesan cheese, croutons and Caesar dressing.",
        ingredients: ["Lettuce", "Parmesan", "Croutons", "Dressing"],
        price: 360,
        rating: 4.8,
        reviews: 105,
        image: images.salad,
        favourite: false
    },

    {
        id: 5,
        category: "food",
        subcategory: "salad",
        name: "Greek Salad",
        description: "Cucumber, tomato, onion, olives and feta cheese.",
        ingredients: ["Cucumber", "Tomato", "Olives", "Feta"],
        price: 340,
        rating: 4.7,
        reviews: 92,
        image: images.salad,
        favourite: false
    },

    {
        id: 6,
        category: "food",
        subcategory: "salad",
        name: "Garden Fresh Salad",
        description: "Fresh seasonal vegetables with a light house dressing.",
        ingredients: ["Lettuce", "Carrot", "Cucumber", "Tomato"],
        price: 290,
        rating: 4.5,
        reviews: 65,
        image: images.salad,
        favourite: false
    },

    {
        id: 7,
        category: "food",
        subcategory: "salad",
        name: "Grilled Chicken Salad",
        description: "Grilled chicken, fresh vegetables, lettuce and house dressing.",
        ingredients: ["Chicken", "Lettuce", "Tomato", "Dressing"],
        price: 420,
        rating: 4.8,
        reviews: 111,
        image: images.salad,
        favourite: false
    },

    {
        id: 8,
        category: "food",
        subcategory: "soup",
        name: "Cream of Mushroom Soup",
        description: "Mushroom, onion, and a creamy broth.",
        ingredients: ["Mushroom", "Onion", "Cream", "Herbs"],
        price: 350,
        rating: 4.8,
        reviews: 143,
        image: images.soup,
        favourite: false
    },

    {
        id: 9,
        category: "food",
        subcategory: "soup",
        name: "Chicken Noodle Soup",
        description: "Chicken, noodles, vegetables, and flavorful broth.",
        ingredients: ["Chicken", "Noodles", "Carrot", "Broth"],
        price: 390,
        rating: 4.7,
        reviews: 118,
        image: images.soup,
        favourite: false
    },

    {
        id: 10,
        category: "food",
        subcategory: "soup",
        name: "Tomato & Leek Soup",
        description: "Fresh tomato, leek, herbs, and a rich soup base.",
        ingredients: ["Tomato", "Leek", "Herbs", "Vegetable Stock"],
        price: 320,
        rating: 4.6,
        reviews: 87,
        image: images.soup,
        favourite: false
    },

    {
        id: 11,
        category: "food",
        subcategory: "snacks",
        name: "Crispy Chicken Wings",
        description: "Crispy fried wings tossed in our signature sauce.",
        ingredients: ["Chicken", "Flour", "Spices", "Sauce"],
        price: 450,
        rating: 4.8,
        reviews: 132,
        image: images.snacks,
        favourite: false
    },

    {
        id: 12,
        category: "food",
        subcategory: "snacks",
        name: "Loaded French Fries",
        description: "Golden fries topped with cheese and house seasoning.",
        ingredients: ["Potatoes", "Cheese", "Seasoning"],
        price: 260,
        rating: 4.5,
        reviews: 94,
        image: images.snacks,
        favourite: false
    },

    {
        id: 13,
        category: "food",
        subcategory: "snacks",
        name: "Crispy Onion Rings",
        description: "Crunchy golden onion rings with creamy dip.",
        ingredients: ["Onion", "Flour", "Breadcrumbs", "Dip"],
        price: 240,
        rating: 4.4,
        reviews: 70,
        image: images.snacks,
        favourite: false
    },

    {
        id: 14,
        category: "food",
        subcategory: "pizza",
        name: "Margherita Pizza",
        description: "Tomato, mozzarella, basil and extra virgin olive oil.",
        ingredients: ["Tomato", "Mozzarella", "Basil"],
        price: 550,
        rating: 4.8,
        reviews: 156,
        image: images.pizza,
        favourite: false
    },

    {
        id: 15,
        category: "food",
        subcategory: "pizza",
        name: "Chicken Pepperoni Pizza",
        description: "Chicken pepperoni, mozzarella and rich tomato sauce.",
        ingredients: ["Chicken", "Pepperoni", "Mozzarella", "Tomato"],
        price: 690,
        rating: 4.9,
        reviews: 178,
        image: images.pizza,
        favourite: false
    },

    {
        id: 16,
        category: "food",
        subcategory: "pizza",
        name: "Garden Veggie Pizza",
        description: "Bell pepper, onion, mushroom, olives and cheese.",
        ingredients: ["Pepper", "Onion", "Mushroom", "Olives"],
        price: 590,
        rating: 4.6,
        reviews: 97,
        image: images.pizza,
        favourite: false
    },

    {
        id: 17,
        category: "food",
        subcategory: "pasta",
        name: "Creamy Alfredo Pasta",
        description: "Creamy parmesan sauce with perfectly cooked pasta.",
        ingredients: ["Pasta", "Cream", "Parmesan", "Garlic"],
        price: 520,
        rating: 4.8,
        reviews: 142,
        image: images.pasta,
        favourite: false
    },

    {
        id: 18,
        category: "food",
        subcategory: "pasta",
        name: "Arrabbiata Pasta",
        description: "Penne pasta with spicy tomato and garlic sauce.",
        ingredients: ["Penne", "Tomato", "Garlic", "Chilli"],
        price: 460,
        rating: 4.6,
        reviews: 91,
        image: images.pasta,
        favourite: false
    },

    {
        id: 19,
        category: "food",
        subcategory: "pasta",
        name: "Chicken Pesto Pasta",
        description: "Grilled chicken, basil pesto and parmesan pasta.",
        ingredients: ["Pasta", "Chicken", "Pesto", "Parmesan"],
        price: 590,
        rating: 4.8,
        reviews: 114,
        image: images.pasta,
        favourite: false
    },

    {
        id: 20,
        category: "food",
        subcategory: "burger",
        name: "Classic Beef Burger",
        description: "Juicy beef patty, lettuce, tomato, cheese and house sauce.",
        ingredients: ["Beef", "Cheese", "Lettuce", "Tomato"],
        price: 480,
        rating: 4.8,
        reviews: 165,
        image: images.burger,
        favourite: false
    },

    {
        id: 21,
        category: "food",
        subcategory: "burger",
        name: "Crispy Chicken Burger",
        description: "Crispy chicken fillet with lettuce and creamy sauce.",
        ingredients: ["Chicken", "Lettuce", "Cheese", "Sauce"],
        price: 450,
        rating: 4.7,
        reviews: 123,
        image: images.burger,
        favourite: false
    },

    {
        id: 22,
        category: "food",
        subcategory: "sandwich",
        name: "Club Sandwich",
        description: "Triple-layer sandwich with chicken, egg, lettuce and tomato.",
        ingredients: ["Chicken", "Egg", "Lettuce", "Tomato"],
        price: 420,
        rating: 4.7,
        reviews: 103,
        image: images.sandwich,
        favourite: false
    },

    {
        id: 23,
        category: "food",
        subcategory: "sandwich",
        name: "Grilled Cheese Sandwich",
        description: "Toasted bread filled with melted cheese and herbs.",
        ingredients: ["Bread", "Cheese", "Butter", "Herbs"],
        price: 280,
        rating: 4.5,
        reviews: 77,
        image: images.sandwich,
        favourite: false
    },

    {
        id: 24,
        category: "food",
        subcategory: "main-course",
        name: "Chicken Sizzler",
        description: "Grilled chicken served with vegetables, fries and sauce.",
        ingredients: ["Chicken", "Vegetables", "Fries", "Sauce"],
        price: 720,
        rating: 4.9,
        reviews: 184,
        image: images.mainCourse,
        favourite: false
    },

    {
        id: 25,
        category: "food",
        subcategory: "main-course",
        name: "Chicken Steak",
        description: "Tender grilled chicken steak with seasonal vegetables.",
        ingredients: ["Chicken", "Vegetables", "Herbs", "Butter"],
        price: 680,
        rating: 4.8,
        reviews: 138,
        image: images.mainCourse,
        favourite: false
    },

    {
        id: 26,
        category: "food",
        subcategory: "momo",
        name: "Steamed Chicken Momo",
        description: "Juicy chicken dumplings served with spicy tomato chutney.",
        ingredients: ["Chicken", "Flour", "Onion", "Spices"],
        price: 280,
        rating: 4.9,
        reviews: 220,
        image: images.momo,
        favourite: false
    },

    {
        id: 27,
        category: "food",
        subcategory: "momo",
        name: "Jhol Momo",
        description: "Steamed dumplings served in a rich sesame-tomato broth.",
        ingredients: ["Chicken", "Sesame", "Tomato", "Spices"],
        price: 330,
        rating: 4.9,
        reviews: 198,
        image: images.momo,
        favourite: false
    },

    {
        id: 28,
        category: "drinks",
        subcategory: "coffee-selection",
        name: "Cappuccino",
        description: "Espresso with silky steamed milk and soft foam.",
        ingredients: ["Espresso", "Milk", "Foam"],
        price: 220,
        rating: 4.8,
        reviews: 142,
        image: images.coffee,
        favourite: false
    },

    {
        id: 29,
        category: "drinks",
        subcategory: "coffee-selection",
        name: "Cafe Latte",
        description: "Smooth espresso balanced with steamed milk.",
        ingredients: ["Espresso", "Milk"],
        price: 230,
        rating: 4.7,
        reviews: 118,
        image: images.coffee,
        favourite: false
    },

    {
        id: 30,
        category: "drinks",
        subcategory: "coffee-selection",
        name: "Caramel Macchiato",
        description: "Espresso, steamed milk and caramel sweetness.",
        ingredients: ["Espresso", "Milk", "Caramel"],
        price: 280,
        rating: 4.8,
        reviews: 101,
        image: images.coffee,
        favourite: false
    },

    {
        id: 31,
        category: "drinks",
        subcategory: "tea-brewed-coffee",
        name: "Masala Tea",
        description: "Aromatic black tea brewed with warming spices.",
        ingredients: ["Black Tea", "Milk", "Cardamom", "Ginger"],
        price: 140,
        rating: 4.7,
        reviews: 89,
        image: images.tea,
        favourite: false
    },

    {
        id: 32,
        category: "drinks",
        subcategory: "tea-brewed-coffee",
        name: "Green Tea",
        description: "Light and refreshing green tea.",
        ingredients: ["Green Tea", "Water"],
        price: 130,
        rating: 4.5,
        reviews: 64,
        image: images.tea,
        favourite: false
    },

    {
        id: 33,
        category: "drinks",
        subcategory: "smoothies",
        name: "Berry Blast Smoothie",
        description: "Mixed berries blended with yogurt and honey.",
        ingredients: ["Strawberry", "Blueberry", "Yogurt", "Honey"],
        price: 320,
        rating: 4.8,
        reviews: 112,
        image: images.smoothie,
        favourite: false
    },

    {
        id: 34,
        category: "drinks",
        subcategory: "smoothies",
        name: "Mango Smoothie",
        description: "Fresh ripe mango blended into a creamy smoothie.",
        ingredients: ["Mango", "Milk", "Honey"],
        price: 290,
        rating: 4.7,
        reviews: 96,
        image: images.smoothie,
        favourite: false
    },

    {
        id: 35,
        category: "drinks",
        subcategory: "lassi",
        name: "Classic Sweet Lassi",
        description: "Creamy yogurt drink lightly sweetened with sugar.",
        ingredients: ["Yogurt", "Milk", "Sugar"],
        price: 180,
        rating: 4.7,
        reviews: 91,
        image: images.lassi,
        favourite: false
    },

    {
        id: 36,
        category: "drinks",
        subcategory: "lassi",
        name: "Mango Lassi",
        description: "Rich yogurt blended with fresh mango.",
        ingredients: ["Mango", "Yogurt", "Milk"],
        price: 220,
        rating: 4.9,
        reviews: 136,
        image: images.lassi,
        favourite: false
    },

    {
        id: 37,
        category: "drinks",
        subcategory: "fresh-juice",
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice served chilled.",
        ingredients: ["Orange"],
        price: 220,
        rating: 4.7,
        reviews: 88,
        image: images.juice,
        favourite: false
    },

    {
        id: 38,
        category: "drinks",
        subcategory: "fresh-juice",
        name: "Watermelon Juice",
        description: "Refreshing watermelon juice with a naturally sweet flavour.",
        ingredients: ["Watermelon"],
        price: 190,
        rating: 4.6,
        reviews: 71,
        image: images.juice,
        favourite: false
    },

    {
        id: 39,
        category: "drinks",
        subcategory: "milkshakes",
        name: "Chocolate Milkshake",
        description: "Rich chocolate shake topped with whipped cream.",
        ingredients: ["Milk", "Chocolate", "Ice Cream"],
        price: 320,
        rating: 4.8,
        reviews: 129,
        image: images.milkshake,
        favourite: false
    },

    {
        id: 40,
        category: "drinks",
        subcategory: "milkshakes",
        name: "Strawberry Milkshake",
        description: "Creamy strawberry shake made with fresh berries.",
        ingredients: ["Strawberry", "Milk", "Ice Cream"],
        price: 320,
        rating: 4.7,
        reviews: 104,
        image: images.milkshake,
        favourite: false
    },

    {
        id: 41,
        category: "drinks",
        subcategory: "soft-drinks",
        name: "Sparkling Lemon Soda",
        description: "Refreshing lemon soda with a crisp sparkling finish.",
        ingredients: ["Lemon", "Soda", "Mint"],
        price: 180,
        rating: 4.5,
        reviews: 60,
        image: images.softdrink,
        favourite: false
    },

    {
        id: 42,
        category: "bar",
        subcategory: "rum",
        name: "Classic Rum",
        description: "Smooth rum served chilled or with your preferred mixer.",
        ingredients: ["Rum"],
        price: 450,
        rating: 4.6,
        reviews: 50,
        image: images.rum,
        favourite: false
    },

    {
        id: 43,
        category: "bar",
        subcategory: "gin",
        name: "Classic Gin & Tonic",
        description: "Crisp gin balanced with tonic and fresh citrus.",
        ingredients: ["Gin", "Tonic", "Lime"],
        price: 520,
        rating: 4.7,
        reviews: 74,
        image: images.gin,
        favourite: false
    },

    {
        id: 44,
        category: "bar",
        subcategory: "vodka",
        name: "Vodka Lime",
        description: "Smooth vodka with fresh lime and chilled soda.",
        ingredients: ["Vodka", "Lime", "Soda"],
        price: 480,
        rating: 4.6,
        reviews: 55,
        image: images.vodka,
        favourite: false
    },

    {
        id: 45,
        category: "bar",
        subcategory: "beer",
        name: "Premium Lager",
        description: "Crisp, refreshing lager served chilled.",
        ingredients: ["Lager"],
        price: 380,
        rating: 4.7,
        reviews: 112,
        image: images.beer,
        favourite: false
    },

    {
        id: 46,
        category: "bar",
        subcategory: "cocktails",
        name: "Mojito",
        description: "Refreshing lime, mint and sparkling cocktail.",
        ingredients: ["Lime", "Mint", "Soda", "Rum"],
        price: 550,
        rating: 4.8,
        reviews: 126,
        image: images.cocktail,
        favourite: false
    },

    {
        id: 47,
        category: "bar",
        subcategory: "cocktails",
        name: "Sunset Citrus",
        description: "A bright citrus cocktail with a smooth fruity finish.",
        ingredients: ["Citrus", "Orange", "Vodka"],
        price: 590,
        rating: 4.7,
        reviews: 81,
        image: images.cocktail,
        favourite: false
    },

    {
        id: 48,
        category: "bar",
        subcategory: "wine",
        name: "House Red Wine",
        description: "A smooth red wine with fruity and earthy notes.",
        ingredients: ["Red Wine"],
        price: 850,
        rating: 4.6,
        reviews: 43,
        image: images.wine,
        favourite: false
    },

    {
        id: 49,
        category: "desserts",
        subcategory: "cakes",
        name: "Chocolate Fudge Cake",
        description: "Rich chocolate cake layered with silky fudge cream.",
        ingredients: ["Chocolate", "Flour", "Cream", "Cocoa"],
        price: 320,
        rating: 4.9,
        reviews: 157,
        image: images.cake,
        favourite: false
    },

    {
        id: 50,
        category: "desserts",
        subcategory: "cakes",
        name: "Red Velvet Cake",
        description: "Soft red velvet sponge with cream cheese frosting.",
        ingredients: ["Cocoa", "Flour", "Cream Cheese"],
        price: 340,
        rating: 4.8,
        reviews: 121,
        image: images.cake,
        favourite: false
    },

    {
        id: 51,
        category: "desserts",
        subcategory: "ice-cream",
        name: "Vanilla Bean Ice Cream",
        description: "Creamy vanilla ice cream made with real vanilla.",
        ingredients: ["Milk", "Cream", "Vanilla"],
        price: 180,
        rating: 4.6,
        reviews: 80,
        image: images.icecream,
        favourite: false
    },

    {
        id: 52,
        category: "desserts",
        subcategory: "ice-cream",
        name: "Chocolate Brownie Sundae",
        description: "Warm brownie, chocolate ice cream and chocolate sauce.",
        ingredients: ["Brownie", "Ice Cream", "Chocolate"],
        price: 350,
        rating: 4.9,
        reviews: 141,
        image: images.icecream,
        favourite: false
    },

    {
        id: 53,
        category: "desserts",
        subcategory: "brownie",
        name: "Classic Chocolate Brownie",
        description: "Dense, fudgy chocolate brownie with a soft centre.",
        ingredients: ["Chocolate", "Butter", "Cocoa", "Flour"],
        price: 240,
        rating: 4.8,
        reviews: 98,
        image: images.brownie,
        favourite: false
    },

    {
        id: 54,
        category: "desserts",
        subcategory: "pastries",
        name: "Almond Croissant",
        description: "Buttery flaky pastry filled with almond cream.",
        ingredients: ["Flour", "Butter", "Almond", "Sugar"],
        price: 260,
        rating: 4.7,
        reviews: 67,
        image: images.pastry,
        favourite: false
    },

    {
        id: 55,
        category: "desserts",
        subcategory: "pudding",
        name: "Caramel Pudding",
        description: "Silky baked pudding topped with golden caramel.",
        ingredients: ["Milk", "Egg", "Sugar", "Vanilla"],
        price: 220,
        rating: 4.7,
        reviews: 83,
        image: images.pudding,
        favourite: false
    },

    {
        id: 56,
        category: "desserts",
        subcategory: "cheesecake",
        name: "New York Cheesecake",
        description: "Creamy cheesecake with a buttery biscuit base.",
        ingredients: ["Cream Cheese", "Biscuit", "Sugar", "Egg"],
        price: 350,
        rating: 4.9,
        reviews: 134,
        image: images.cheesecake,
        favourite: false
    },

    {
        id: 57,
        category: "combos",
        subcategory: "breakfast-combo",
        name: "Breakfast Combo",
        description: "Eggs, toast, potatoes and a hot beverage.",
        ingredients: ["Eggs", "Toast", "Potatoes", "Coffee"],
        price: 550,
        rating: 4.8,
        reviews: 93,
        image: images.combo,
        favourite: false
    },

    {
        id: 58,
        category: "combos",
        subcategory: "lunch-combo",
        name: "Lunch Combo",
        description: "Main course, side salad and refreshing drink.",
        ingredients: ["Main Course", "Salad", "Drink"],
        price: 720,
        rating: 4.8,
        reviews: 106,
        image: images.combo,
        favourite: false
    },

    {
        id: 59,
        category: "combos",
        subcategory: "snack-combo",
        name: "Snack Combo",
        description: "Crispy snack platter served with a refreshing drink.",
        ingredients: ["Fries", "Wings", "Dip", "Drink"],
        price: 590,
        rating: 4.7,
        reviews: 84,
        image: images.combo,
        favourite: false
    },

    {
        id: 60,
        category: "combos",
        subcategory: "drinks-combo",
        name: "Drinks Combo",
        description: "Two signature drinks with a light snack.",
        ingredients: ["Drinks", "Snack"],
        price: 620,
        rating: 4.6,
        reviews: 59,
        image: images.combo,
        favourite: false
    },

    {
        id: 61,
        category: "combos",
        subcategory: "special-combo",
        name: "Foodland Special Combo",
        description: "Chef-selected favourites for a complete dining experience.",
        ingredients: ["Starter", "Main Course", "Drink", "Dessert"],
        price: 990,
        rating: 4.9,
        reviews: 148,
        image: images.combo,
        favourite: false
    }

];


/* =========================================================
   CATEGORY STRUCTURE
========================================================= */

const categoryStructure = {

    food: [
        ["breakfast", "Breakfast"],
        ["salad", "Salad"],
        ["soup", "Soup"],
        ["snacks", "Snacks"],
        ["pizza", "Pizza"],
        ["pasta", "Pasta"],
        ["burger", "Burger"],
        ["sandwich", "Sandwich"],
        ["main-course", "Main Course"],
        ["momo", "Momo"]
    ],

    drinks: [
        ["coffee-selection", "Coffee Selection"],
        ["tea-brewed-coffee", "Tea & Brewed Coffee"],
        ["smoothies", "Smoothies"],
        ["lassi", "Lassi"],
        ["fresh-juice", "Fresh Juice"],
        ["milkshakes", "Milkshakes"],
        ["soft-drinks", "Soft Drinks"]
    ],

    bar: [
        ["rum", "Rum"],
        ["gin", "Gin"],
        ["vodka", "Vodka"],
        ["beer", "Beer"],
        ["cocktails", "Cocktails"],
        ["wine", "Wine"]
    ],

    desserts: [
        ["cakes", "Cakes"],
        ["ice-cream", "Ice Cream"],
        ["brownie", "Brownie"],
        ["pastries", "Pastries"],
        ["pudding", "Pudding"],
        ["cheesecake", "Cheesecake"]
    ],

    combos: [
        ["breakfast-combo", "Breakfast Combo"],
        ["lunch-combo", "Lunch Combo"],
        ["snack-combo", "Snack Combo"],
        ["drinks-combo", "Drinks Combo"],
        ["special-combo", "Special Combo"]
    ]

};


/* =========================================================
   STATE
========================================================= */

let currentLanguage =
    localStorage.getItem("foodlandLanguage");

let selectedCategory = "all";
let selectedSubcategory = "all";
let searchTerm = "";

let cart =
    JSON.parse(
        localStorage.getItem("foodlandCart") || "[]"
    );

let selectedItemId = null;
let detailsQuantity = 1;

let toastTimer; 


/* =========================================================
   DOM
========================================================= */

const languageScreen =
    document.getElementById("languageScreen");

const website =
    document.getElementById("website");

const specialScreen =
    document.getElementById("specialScreen");

const menuScreen =
    document.getElementById("menuScreen");

const detailsScreen =
    document.getElementById("detailsScreen");

const specialGrid =
    document.getElementById("specialGrid");

const menuGrid =
    document.getElementById("menuGrid");

const subcategoryRow =
    document.getElementById("subcategoryRow");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const emptyState =
    document.getElementById("emptyState");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartSummary =
    document.getElementById("cartSummary");

const languageMenu =
    document.getElementById("languageMenu");

const toast =
    document.getElementById("toast");


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupEvents();

    updateTodayDate();

    updateCartCounts();

    updateOpeningStatus();

    if (currentLanguage) {

        languageScreen.classList.add("hidden");

        website.classList.remove("hidden");

        showScreen(specialScreen);

        renderSpecials();

    } else {

        languageScreen.classList.remove("hidden");

    }

    setInterval(updateOpeningStatus, 60000);

});


/* =========================================================
   SCREEN NAVIGATION
========================================================= */

function showScreen(screen) {

    [
        specialScreen,
        menuScreen,
        detailsScreen
    ].forEach(item => {

        item.classList.add("hidden");

    });

    screen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {
    
    
    /* Language Selection */

    document
        .querySelectorAll("[data-language]")
        .forEach(button => {

            button.addEventListener("click", () => {

                setLanguage(
                    button.dataset.language
                );
                document.getElementById("currentLanguage").textContent =
                button.dataset.language === "ne" ? "NE" : "EN";                                             /*hgggg*/

            });

        });


    /* Today's Special */

    document
        .getElementById("viewFullMenu")
        .addEventListener("click", openMenu);


    /* Back */

    document
        .getElementById("backToSpecial")
        .addEventListener("click", () => {

            showScreen(specialScreen);

        });


    document
        .getElementById("backToMenu")
        .addEventListener("click", () => {

            showScreen(menuScreen);

        });


    /* Brand */

    document
        .getElementById("brandButton")
        .addEventListener("click", () => {

            showScreen(specialScreen);

        });


    /* Categories */

    document
        .querySelectorAll(".main-category")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectedCategory =
                    button.dataset.category;

                selectedSubcategory = "all";

                updateCategoryButtons();

                renderSubcategories();

                renderMenu();

            });

        });


    /* Search */

    searchInput.addEventListener(
        "input",
        event => {

            searchTerm =
                event.target.value
                    .trim()
                    .toLowerCase();

            clearSearch.classList.toggle(
                "hidden",
                !searchTerm
            );

            renderMenu();

        }
    );


    clearSearch.addEventListener(
        "click",
        clearSearchBox
    );


    /* Reset */

    document
        .getElementById("resetFilters")
        .addEventListener(
            "click",
            resetFilters
        );


    document
        .getElementById("emptyReset")
        .addEventListener(
            "click",
            resetFilters
        );


    /* Cart buttons */

    document
        .getElementById("cartButton")
        .addEventListener(
            "click",
            openCart
        );

    document
        .getElementById("menuCartButton")
        .addEventListener(
            "click",
            openCart
        );

    document
        .getElementById("detailsCartButton")
        .addEventListener(
            "click",
            openCart
        );


    document
        .getElementById("cartClose")
        .addEventListener(
            "click",
            closeCart
        );


    cartOverlay.addEventListener(
        "click",
        closeCart
    );


    document
        .getElementById("cartExplore")
        .addEventListener(
            "click",
            () => {

                closeCart();

                openMenu();

            }
        );


    /* Details quantity */

    document
        .getElementById("detailsMinus")
        .addEventListener(
            "click",
            () => {

                if (detailsQuantity > 1) {

                    detailsQuantity--;

                    updateDetailsQuantity();

                }

            }
        );


    document
        .getElementById("detailsPlus")
        .addEventListener(
            "click",
            () => {

                detailsQuantity++;

                updateDetailsQuantity();

            }
        );


    document
        .getElementById("detailsAddCart")
        .addEventListener(
            "click",
            addDetailsToCart
        );


    document
        .getElementById("detailsFavourite")
        .addEventListener(
            "click",
            toggleDetailsFavourite
        );


    /* Language switcher */

    document
        .getElementById("languageSwitcher")
        .addEventListener(
            "click",
            event => {

                event.stopPropagation();

                languageMenu.classList.toggle(
                    "hidden"
                );

            }
        );


    document.addEventListener(
        "click",
        event => {

            if (
                !languageMenu.contains(
                    event.target
                ) &&
                event.target.id !==
                "languageSwitcher"
            ) {

                languageMenu.classList.add(
                    "hidden"
                );

            }

        }
    );


    /* Checkout */

    document
        .getElementById("checkoutButton")
        .addEventListener(
            "click",
            () => {

                showToast(
                    currentLanguage === "ne"
                        ? "Checkout प्रणाली पछि थप्न सकिन्छ।"
                        : "Checkout can be connected later."
                );

            }
        );


    /* Escape */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

                languageMenu.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "foodlandLanguage",
        language
    );

    languageScreen.classList.add("hidden");

    website.classList.remove("hidden");

    languageMenu.classList.add("hidden");

    applyTranslations();

    showScreen(specialScreen);

    renderSpecials();

    renderSubcategories();

    renderMenu();

    updateOpeningStatus();

    /*
        Close language dropdown if available
    */

    if (languageMenu) {
        languageMenu.classList.add("hidden");
    }

}

function applyTranslations() {

    const t =
        translations[currentLanguage];

    document.querySelector(
        ".language-box h2"
    ).textContent =
        currentLanguage === "ne"
            ? "भाषा चयन गर्नुहोस्"
            : "Select Language";

    document.getElementById(
        "viewFullMenu"
    ).querySelector("span").textContent =
        t.fullMenu;

    document.getElementById(
        "searchInput"
    ).placeholder = t.search;

    document.getElementById(
        "resetFilters"
    ).innerHTML =
        `<i class="fa-solid fa-rotate-left"></i> ${t.reset}`;

    document.querySelector(
        ".cart-header .eyebrow"
    ).textContent =
        t.yourOrder;

    document.querySelector(
        ".cart-header h2"
    ).textContent =
        t.yourCart;

    document.querySelector(
        ".cart-empty h3"
    ).textContent =
        t.emptyCart;

    document.getElementById(
        "cartExplore"
    ).textContent =
        t.exploreMenu;

}


/* =========================================================
   TODAY DATE
========================================================= */

function updateTodayDate() {

    const date =
        new Date();

    const formatted =
        date.toLocaleDateString(
            currentLanguage === "ne"
                ? "ne-NP"
                : "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric"
            }
        );

    document.getElementById(
        "todayDate"
    ).textContent =
        formatted;

}


/* =========================================================
   SPECIALS
========================================================= */

function renderSpecials() {

    const specialIds =
        [21, 14, 56];

    const specials =
        specialIds
            .map(
                id =>
                    menuItems.find(
                        item =>
                            item.id === id
                    )
            )
            .filter(Boolean);

    specialGrid.innerHTML =
        specials.map(item => {

            return `
                <article class="special-card">

                    <div class="special-card-image">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >

                        <span class="special-badge">
                            TODAY'S PICK
                        </span>

                    </div>

                    <div class="special-info">

                        <h3>${item.name}</h3>

                        <p>
                            ${item.description}
                        </p>

                        <div class="special-bottom">

                            <span class="rating">
                                <i class="fa-solid fa-star"></i>
                                ${item.rating}
                            </span>

                            <strong class="special-price">
                                Rs. ${item.price}
                            </strong>

                        </div>

                    </div>

                </article>
            `;

        }).join("");

}


/* =========================================================
   OPEN MENU
========================================================= */

function openMenu() {

    selectedCategory = "all";

    selectedSubcategory = "all";

    searchTerm = "";

    searchInput.value = "";

    clearSearch.classList.add(
        "hidden"
    );

    updateCategoryButtons();

    renderSubcategories();

    renderMenu();

    showScreen(menuScreen);

}


/* =========================================================
   SUBCATEGORIES
========================================================= */

function renderSubcategories() {

    let subcategories = [];

    if (
        selectedCategory === "all"
    ) {

        subcategories = [];

    } else {

        subcategories =
            categoryStructure[
                selectedCategory
            ] || [];

    }

    subcategoryRow.innerHTML =
        subcategories.map(
            ([id, name]) => {

                return `
                    <button
                        class="subcategory-button ${
                            selectedSubcategory === id
                                ? "active"
                                : ""
                        }"
                        data-subcategory="${id}"
                    >
                        ${name}
                    </button>
                `;

            }
        ).join("");


    document
        .querySelectorAll(
            "[data-subcategory]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedSubcategory =
                        button.dataset.subcategory;

                    renderSubcategories();

                    renderMenu();

                }
            );

        });

}


/* =========================================================
   MENU
========================================================= */

function renderMenu() {

    let filtered =
        [...menuItems];


    if (
        selectedCategory !== "all"
    ) {

        filtered =
            filtered.filter(
                item =>
                    item.category ===
                    selectedCategory
            );

    }


    if (
        selectedSubcategory !== "all"
    ) {

        filtered =
            filtered.filter(
                item =>
                    item.subcategory ===
                    selectedSubcategory
            );

    }


    if (searchTerm) {

        filtered =
            filtered.filter(item => {

                const text = [

                    item.name,
                    item.description,
                    item.subcategory,
                    ...item.ingredients

                ]
                    .join(" ")
                    .toLowerCase();

                return text.includes(
                    searchTerm
                );

            });

    }


    updateResultInfo(
        filtered.length
    );


    if (!filtered.length) {

        menuGrid.innerHTML = "";

        emptyState.classList.remove(
            "hidden"
        );

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    menuGrid.innerHTML =
        filtered
            .map(createMenuCard)
            .join("");


    attachCardEvents();

}


/* =========================================================
   MENU CARD
========================================================= */

function createMenuCard(item) {

    return `
        <article
            class="menu-card"
            data-item-id="${item.id}"
        >

            <div class="menu-card-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="card-category">
                    ${getCategoryName(item.category)}
                </span>

                <button
                    class="favourite-button ${
                        item.favourite
                            ? "active"
                            : ""
                    }"
                    data-favourite="${item.id}"
                >
                    <i class="${
                        item.favourite
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>
                </button>

            </div>


            <div class="menu-card-content">

                <h3>
                    ${item.name}
                </h3>

                <p class="menu-description">
                    ${item.description}
                </p>


                <div class="card-meta">

                    <strong class="card-price">
                        Rs. ${item.price}
                    </strong>

                    <span class="card-rating">
                        <i class="fa-solid fa-star"></i>
                        ${item.rating}
                    </span>

                </div>


                <div class="card-bottom">

                    <button
                        class="add-button"
                        data-add="${item.id}"
                    >
                        <i class="fa-solid fa-plus"></i>
                        ${
                            translations[
                                currentLanguage
                            ].addCart
                        }
                    </button>

                    <button
                        class="details-button"
                        data-details="${item.id}"
                    >
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   CARD EVENTS
========================================================= */

function attachCardEvents() {

    document
        .querySelectorAll(".menu-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(
                            ".add-button"
                        ) ||
                        event.target.closest(
                            ".favourite-button"
                        ) ||
                        event.target.closest(
                            ".details-button"
                        )
                    ) {
                        return;
                    }

                    openDetails(
                        Number(
                            card.dataset.itemId
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    addToCart(
                        Number(
                            button.dataset.add
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-details]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openDetails(
                        Number(
                            button.dataset.details
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-favourite]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavourite(
                        Number(
                            button.dataset.favourite
                        )
                    );

                }
            );

        });

}


/* =========================================================
   DETAILS SCREEN
========================================================= */

function openDetails(itemId) {

    const item =
        menuItems.find(
            menuItem =>
                menuItem.id === itemId
        );

    if (!item) return;

    selectedItemId = itemId;

    detailsQuantity = 1;

    document.getElementById(
        "detailsImage"
    ).src = item.image;

    document.getElementById(
        "detailsImage"
    ).alt = item.name;

    document.getElementById(
        "detailsCategory"
    ).textContent =
        `${getCategoryName(item.category)} · ${getSubcategoryName(item.subcategory)}`;

    document.getElementById(
        "detailsName"
    ).textContent =
        item.name;

    document.getElementById(
        "detailsRating"
    ).textContent =
        item.rating;

    document.getElementById(
        "detailsReviews"
    ).textContent =
        `(${item.reviews} reviews)`;

    document.getElementById(
        "detailsDescription"
    ).textContent =
        item.description;

    document.getElementById(
        "detailsPrice"
    ).textContent =
        `Rs. ${item.price}`;

    document.getElementById(
        "detailsIngredients"
    ).innerHTML =
        item.ingredients
            .map(
                ingredient =>
                    `<span>${ingredient}</span>`
            )
            .join("");

    updateDetailsQuantity();

    updateDetailsFavourite();

    showScreen(detailsScreen);

}


function updateDetailsQuantity() {

    document.getElementById(
        "detailsQuantity"
    ).textContent =
        detailsQuantity;

}


function updateDetailsFavourite() {

    const item =
        menuItems.find(
            menuItem =>
                menuItem.id ===
                selectedItemId
        );

    if (!item) return;

    document.getElementById(
        "detailsFavourite"
    ).innerHTML =
        `<i class="${
            item.favourite
                ? "fa-solid"
                : "fa-regular"
        } fa-heart"></i>`;

}


/* =========================================================
   FAVOURITES
========================================================= */

function toggleFavourite(itemId) {

    const item =
        menuItems.find(
            menuItem =>
                menuItem.id === itemId
        );

    if (!item) return;

    item.favourite =
        !item.favourite;

    renderMenu();

}


function toggleDetailsFavourite() {

    if (!selectedItemId) return;

    toggleFavourite(
        selectedItemId
    );

    updateDetailsFavourite();

}


/* =========================================================
   CART
========================================================= */

function addToCart(
    itemId,
    quantity = 1
) {

    const item =
        menuItems.find(
            menuItem =>
                menuItem.id === itemId
        );

    if (!item) return;


    const existing =
        cart.find(
            cartItem =>
                cartItem.id === itemId
        );


    if (existing) {

        existing.quantity +=
            quantity;

    } else {

        cart.push({
            id: itemId,
            quantity: quantity
        });

    }


    saveCart();

    updateCartCounts();

    renderCart();


    showToast(
        currentLanguage === "ne"
            ? `${item.name} कार्टमा थपियो`
            : `${item.name} added to cart`
    );

}


function addDetailsToCart() {

    if (!selectedItemId) return;

    addToCart(
        selectedItemId,
        detailsQuantity
    );

}


/* =========================================================
   CART RENDER
========================================================= */

function renderCart() {

    if (!cart.length) {

        cartItems.innerHTML = "";

        cartEmpty.classList.remove(
            "hidden"
        );

        cartSummary.classList.add(
            "hidden"
        );

        return;

    }


    cartEmpty.classList.add(
        "hidden"
    );

    cartSummary.classList.remove(
        "hidden"
    );


    cartItems.innerHTML =
        cart.map(
            cartItem => {

                const item =
                    menuItems.find(
                        menuItem =>
                            menuItem.id ===
                            cartItem.id
                    );

                if (!item) return "";

                const total =
                    item.price *
                    cartItem.quantity;


                return `
                    <div class="cart-item">

                        <div class="cart-item-image">

                            <img
                                src="${item.image}"
                                alt="${item.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${item.name}
                            </h4>

                            <p>
                                Rs. ${item.price} each
                            </p>


                            <div class="cart-quantity">

                                <button
                                    data-cart-minus="${item.id}"
                                >
                                    <i class="fa-solid fa-minus"></i>
                                </button>

                                <strong>
                                    ${cartItem.quantity}
                                </strong>

                                <button
                                    data-cart-plus="${item.id}"
                                >
                                    <i class="fa-solid fa-plus"></i>
                                </button>

                            </div>


                            <button
                                class="remove-item"
                                data-remove="${item.id}"
                            >
                                Remove
                            </button>

                        </div>


                        <strong class="cart-item-total">
                            Rs. ${total}
                        </strong>

                    </div>
                `;

            }
        ).join("");


    const subtotal =
        cart.reduce(
            (sum, cartItem) => {

                const item =
                    menuItems.find(
                        menuItem =>
                            menuItem.id ===
                            cartItem.id
                    );

                return sum +
                    (
                        item
                            ? item.price *
                              cartItem.quantity
                            : 0
                    );

            },
            0
        );


    document.getElementById(
        "cartSubtotal"
    ).textContent =
        `Rs. ${subtotal}`;

    document.getElementById(
        "cartTotal"
    ).textContent =
        `Rs. ${subtotal}`;


    attachCartEvents();

}


/* =========================================================
   CART EVENTS
========================================================= */

function attachCartEvents() {

    document
        .querySelectorAll(
            "[data-cart-minus]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        Number(
                            button.dataset.cartMinus
                        ),
                        -1
                    );

                }
            );

        });


    document
        .querySelectorAll(
            "[data-cart-plus]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeCartQuantity(
                        Number(
                            button.dataset.cartPlus
                        ),
                        1
                    );

                }
            );

        });


    document
        .querySelectorAll(
            "[data-remove]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(
                            button.dataset.remove
                        )
                    );

                }
            );

        });

}


function changeCartQuantity(
    itemId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === itemId
        );

    if (!item) return;

    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== itemId
            );

    }


    saveCart();

    updateCartCounts();

    renderCart();

}


function removeFromCart(itemId) {

    cart =
        cart.filter(
            cartItem =>
                cartItem.id !== itemId
        );

    saveCart();

    updateCartCounts();

    renderCart();

}


function saveCart() {

    localStorage.setItem(
        "foodlandCart",
        JSON.stringify(cart)
    );

}


function updateCartCounts() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    document.getElementById(
        "cartCount"
    ).textContent = count;

    document.getElementById(
        "menuCartCount"
    ).textContent = count;

    document.getElementById(
        "detailsCartCount"
    ).textContent = count;

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    renderCart();

    cartDrawer.classList.add(
        "open"
    );

    cartOverlay.classList.remove(
        "hidden"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart() {

    cartDrawer.classList.remove(
        "open"
    );

    cartOverlay.classList.add(
        "hidden"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   FILTERS
========================================================= */

function resetFilters() {

    selectedCategory = "all";

    selectedSubcategory = "all";

    searchTerm = "";

    searchInput.value = "";

    clearSearch.classList.add(
        "hidden"
    );

    updateCategoryButtons();

    renderSubcategories();

    renderMenu();

}


function clearSearchBox() {

    searchInput.value = "";

    searchTerm = "";

    clearSearch.classList.add(
        "hidden"
    );

    renderMenu();

}


function updateCategoryButtons() {

    document
        .querySelectorAll(
            ".main-category"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category ===
                selectedCategory
            );

        });

}


/* =========================================================
   RESULT INFORMATION
========================================================= */

function updateResultInfo(
    count
) {

    let title =
        translations[
            currentLanguage
        ].all;


    if (
        selectedSubcategory !==
        "all"
    ) {

        title =
            getSubcategoryName(
                selectedSubcategory
            );

    } else if (
        selectedCategory !==
        "all"
    ) {

        title =
            getCategoryName(
                selectedCategory
            );

    } else {

        title =
            currentLanguage === "ne"
                ? "सबै मेनु"
                : "All Menu";

    }


    document.getElementById(
        "resultTitle"
    ).textContent =
        title;

    document.getElementById(
        "resultCount"
    ).textContent =
        `${count} ${
            count === 1
                ? "item"
                : "items"
        }`;

}


/* =========================================================
   CATEGORY HELPERS
========================================================= */

function getCategoryName(
    category
) {

    const t =
        translations[
            currentLanguage
        ];

    const names = {

        all: t.all,
        food: t.food,
        drinks: t.drinks,
        bar: t.bar,
        desserts: t.desserts,
        combos: t.combos

    };

    return (
        names[category] ||
        category
    );

}


function getSubcategoryName(
    subcategory
) {

    for (
        const category in
        categoryStructure
    ) {

        const found =
            categoryStructure[
                category
            ].find(
                item =>
                    item[0] ===
                    subcategory
            );

        if (found) {

            return found[1];

        }

    }

    return subcategory;

}


/* =========================================================
   OPENING STATUS
========================================================= */

function updateOpeningStatus() {

    const now =
        new Date();

    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();

    const openingMinutes =
        9 * 60;

    const closingMinutes =
        23 * 60;

    const isOpen =
        currentMinutes >=
        openingMinutes &&
        currentMinutes <
        closingMinutes;


    const statusElements = [
        document.getElementById(
            "openingStatus"
        ),
        document.getElementById(
            "menuOpeningStatus"
        )
    ];

    const label =
        isOpen
            ? translations[
                currentLanguage || "en"
              ].openNow
            : translations[
                currentLanguage || "en"
              ].closedNow;


    const time =
        isOpen
            ? translations[
                currentLanguage || "en"
              ].closesAt
            : translations[
                currentLanguage || "en"
              ].opensAt;


    statusElements.forEach(
        status => {

            if (!status) return;

            status.classList.toggle(
                "closed",
                !isOpen
            );

        }
    );


    const statusLabel =
        document.getElementById(
            "statusLabel"
        );

    const statusTime =
        document.getElementById(
            "statusTime"
        );

    if (statusLabel) {

        statusLabel.textContent =
            label;

    }

    if (statusTime) {

        statusTime.textContent =
            time;

    }


    const menuStatusLabel =
        document.getElementById(
            "menuStatusLabel"
        );

    const menuStatusTime =
        document.getElementById(
            "menuStatusTime"
        );

    if (menuStatusLabel) {

        menuStatusLabel.textContent =
            label;

    }

    if (menuStatusTime) {

        menuStatusTime.textContent =
            time;

    }

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

    document.getElementById(
        "toastMessage"
    ).textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2400
        );

}