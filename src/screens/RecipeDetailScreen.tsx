import { View,Text,Image } from 'react-native';
import { Recipe } from '../data/recipes';
import { RouteProp, useRoute } from '@react-navigation/native';

type RecipeDetailRouteProp = RouteProp<{RecipeDetail: { recipe: Recipe } },'RecipeDetail'>;

function RecipeDetailScreen(){
    const route = useRoute<RecipeDetailRouteProp>();
    const { recipe } = route.params;

    return(
        <View className='flex-1 bg-white p-4'>
            <Image source={{ uri:recipe.image }} className='h-60 w-full rounded-xl mb-4' />
            <Text className='text-3xl font-bold text-purple-700 mb-2'>{recipe.title}</Text>
            <Text className='text-base text-gray-700'>This is a placeholder</Text>
        </View>
    );
}

export default RecipeDetailScreen;
