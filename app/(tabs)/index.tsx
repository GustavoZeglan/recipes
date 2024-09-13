import Recipe from '@/models/Recipe';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [name, setName] = useState<string>("");

  const getRecipes = useCallback(async (query: string) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=dea213cec7414c7f86df23e4b995a954`, {});
    
    setRecipes(res.data.results);
  },[]);
  
  useEffect(() => {
    getRecipes(name);
  },[name]);

  return (
   <SafeAreaView style={styles.Container}>
      <TextInput style={styles.inputName}
                           placeholder={"Digite o nome da receita"}
                           placeholderTextColor={"white"} 
                           onChangeText={setName}></TextInput>
      <FlatList data={recipes} renderItem={(item) => <Text>{item.item.title}</Text>}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 24,
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
  inputName: {
    backgroundColor: "#7f8ea7",
    width: "90%",
    paddingVertical: 16,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    fontSize: 18,
    paddingLeft: 16,
},
});
