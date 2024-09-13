import Recipe from "@/models/Recipe";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";


export default function RecipeCard({id, title, image} : Recipe) {
    return (
        <View style={styles.Container}>
            <ImageBackground source={{uri: image}} style={styles.Image} resizeMode="cover"/>
            <Text>{title}</Text>
        </View>
    )
}