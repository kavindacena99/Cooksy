export interface Recipe{
    id: string;
    title: string;
    description: string;
    image: string;
}

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Spaghetti Bolognese',
        description: 'Start by boiling spaghetti until al dente. In a separate pan, sauté chopped onions and minced garlic, then add ground beef and cook until browned. Pour in tomato sauce, season with salt and pepper, and let it simmer for 15–20 minutes. Finally, serve the sauce over the cooked spaghetti and garnish with grated cheese or herbs if desired.',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: '2',
        title: 'Chicken Curry',
        description: 'Start by sautéing onions, garlic, and ginger in oil. Add chicken pieces and cook until lightly browned. Stir in curry powder (or spices like turmeric, cumin, and chili), then add tomatoes or coconut milk. Let it simmer until the chicken is tender and the sauce thickens. Serve hot with rice or naan.',
        image: 'https://images.pexels.com/photos/6113813/pexels-photo-6113813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: '3',
        title: 'Milk Rice',
        description: 'Cook white rice with water until soft, then add thick coconut milk and a pinch of salt. Simmer until the mixture becomes creamy and sticky. Once done, spread it onto a tray, flatten, and let it cool slightly before cutting into diamond or square shapes. Often served with lunu miris (spicy onion sambol) or jaggery for a sweet version.',
        image: 'https://images.pexels.com/photos/19856579/pexels-photo-19856579/free-photo-of-mango-and-rice-with-dipping-sauce-on-a-white-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: '4',
        title: 'Cheese Pizza',
        description: 'Spread pizza dough on a tray, then layer with tomato sauce and generous amounts of mozzarella cheese. Bake in a hot oven until the crust is golden and the cheese is bubbly and slightly browned. Serve hot with optional herbs or chili flakes.',
        image: 'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        id: '5',
        title: 'Apple Pie',
        description: 'Slice fresh apples and mix with sugar, cinnamon, and a bit of flour. Fill a pastry-lined pie dish with the apple mixture, cover with a top crust, and bake until golden brown. Let it cool slightly before serving—perfect with a scoop of vanilla ice cream.',
        image: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        id: '6',
        title: 'Lasagna',
        description: 'Start by preparing a rich meat or tomato sauce. In a baking dish, layer cooked lasagna noodles with sauce, ricotta or béchamel, and shredded cheese. Repeat the layers and top with cheese. Bake until golden and bubbling. Let it cool slightly before serving.',
        image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
];