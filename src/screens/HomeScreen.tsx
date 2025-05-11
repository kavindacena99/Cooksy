import React from 'react';
import { Text,View,ScrollView } from 'react-native';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { Recipe } from '../data/recipes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

type RootStackParamList = {
    Home: undefined;
    RecipeDetail: { recipe: Recipe };
};

function HomeScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <ScrollView className='flex-1 p-4'>
            <Header />
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} onPress={() => navigation.navigate('RecipeDetail',{ recipe })} />
            ))}
            <View style={{ marginBottom:20 }} />
        </ScrollView>
    );
}

export default HomeScreen;