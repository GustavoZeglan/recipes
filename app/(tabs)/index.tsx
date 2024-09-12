import Recipe from '@/models/Recipe';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>(); 

  const getRecipes = useCallback(async () => {
    const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=dea213cec7414c7f86df23e4b995a954", {});
    
    setRecipes(res.data.results);
  },[]);
  
  useEffect(() => {
    getRecipes();
  },[]);

  return (
   <SafeAreaView>
      <Text>Bah...</Text>
      <FlatList data={recipes} renderItem={(item) => <Text>{item.item.title}</Text>}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
