import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props: any) {
  return (
    <View style={styles.outContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.inContainer, styles.press] : styles.inContainer}
        onPress={() => {
          console.log("ok");
        }}
        android_ripple={{ color: "#644202" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outContainer: {
    margin: 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  inContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  // press effect for ios and android
  press: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
