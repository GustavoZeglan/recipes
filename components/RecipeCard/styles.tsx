import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingVertical: 8,
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#ccc", 
    },
    Image: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "none",
    }
});