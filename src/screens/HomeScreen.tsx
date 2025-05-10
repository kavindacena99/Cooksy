import React from 'react';
import { Text,View,ScrollView } from 'react-native';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../data/recipes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    RecipeDetail: { recipe: Recipe };
};

function HomeScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <ScrollView className='flex-1 bg-gray-50 p-4'>
            <Text className='text-3xl font-bold text-purple-700 mb-4 text-center'>Cooksy</Text>
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} onPress={() => navigation.navigate('RecipeDetail',{ recipe })} />
            ))}
        </ScrollView>
    );
}

export default HomeScreen;