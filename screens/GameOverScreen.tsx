import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/elements/PrimaryButton";
import Title from "../components/elements/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: any) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone need{" "}
        <Text style={styles.highlightNumber}>{roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlightNumber}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.primary800,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "space-mono-regular",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlightNumber: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
