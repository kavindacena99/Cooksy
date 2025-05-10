// src/components/RecipeCard.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Recipe } from '../data/recipes';

type Props = {
  recipe: Recipe;
  onPress?: () => void;
};

export default function RecipeCard({ recipe, onPress }: Props) {
  return (
    <TouchableOpacity
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden"
      onPress={onPress}
    >
      <Image source={{ uri: recipe.image }} className="h-40 w-full" />
      <View className="p-4">
        <Text className="text-lg font-semibold">{recipe.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
