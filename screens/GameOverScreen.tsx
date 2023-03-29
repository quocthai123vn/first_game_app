import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/elements/PrimaryButton";
import Title from "../components/elements/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: any) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
