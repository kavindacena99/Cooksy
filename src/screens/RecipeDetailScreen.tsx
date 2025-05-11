import { View,Text,Image } from 'react-native';
import { Recipe } from '../data/recipes';
import { RouteProp, useRoute } from '@react-navigation/native';

type RecipeDetailRouteProp = RouteProp<{RecipeDetail: { recipe: Recipe } },'RecipeDetail'>;

function RecipeDetailScreen(){
    const route = useRoute<RecipeDetailRouteProp>();
    const { recipe } = route.params;

    return(
        <View className='flex-1 p-4 rounded-xl'>
            <Text style={{ marginTop:5,marginBottom:20,color:'orange',fontSize:35 }} className='font-bold mb-2'>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} className="h-40 w-full rounded-xl" />
            <Text style={{ marginTop:18,fontSize:18 }} className='text-base text-gray-700'>{recipe.description}</Text>
        </View>
    );
}

export default RecipeDetailScreen;
