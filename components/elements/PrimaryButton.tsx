import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }: any) {
  return (
    <View style={styles.outContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.inContainer, styles.press] : styles.inContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
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
    backgroundColor: Colors.primary500,
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
