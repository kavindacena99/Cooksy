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
        description: 'A classic Italian pasta dish with a rich meat sauce.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    },
    {
        id: '2',
        title: 'Chicken Curry',
        description: 'A flavorful curry made with tender chicken pieces and spices.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    },
    {
        id: '3',
        title: 'Vegetable Stir Fry',
        description: 'A quick and healthy stir fry with mixed vegetables.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    },
    {
        id: '4',
        title: 'Vegetable Stir Fry',
        description: 'A quick and healthy stir fry with mixed vegetables.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    },
    {
        id: '5',
        title: 'Vegetable Stir Fry',
        description: 'A quick and healthy stir fry with mixed vegetables.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    },
    {
        id: '6',
        title: 'Vegetable Stir Fry',
        description: 'A quick and healthy stir fry with mixed vegetables.',
        image: 'https://media-hosting.imagekit.io/a3c7a3909ed140f9/d.jpg?Expires=1841500949&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vOisV60epR9~jb3UBhDeGegrZQsw9fMz23qfsj75exlCFgV7YT9VKxGo9XKSea~0RSAsfJJYOaZpgmf0F1jGIrmYyJ4TRer6vCtxeT-kNkV8mAr1y1wPi7WZtECjoFEv~80uYfnxPx5itkAdM1POTlCytuXTtVB57uiz5UczQP3-VwpxsTFuAQDLRrkPWEZerdpyf9JHBwN8zfJ9D6cDh0oTryXoNNjw2CUFHIqe2-So8JZ~U63swCeqAk~YhTN8ED1~sc5J42-B7uVMuhpeBKxwBLfPe0uI8AIO~gOylPMvRAmIaY2grhyY8vHDocG0nXB8vDyZVC~7IidRKl8yEw__',
    }
];