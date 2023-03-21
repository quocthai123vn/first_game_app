import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/elements/PrimaryButton";
import Title from "../components/elements/Title";
import NumberContainer from "../components/games/NumberContainer";
import { generateRandomNumber } from "../utils/generateRandomNumber";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(this: any, { target, onOver }: any) {
  const initialNumber = generateRandomNumber(1, 100, target);
  const [guessNumber, setGuessNumber] = useState(initialNumber);
  useEffect(() => {
    if(guessNumber === target){
      onOver();
    }
  }, [guessNumber, target, onOver]);
  const guessHandler = (isHigher: boolean) => {
    if (
      (isHigher && guessNumber > target) ||
      (!isHigher && guessNumber < target)
    ) {
      Alert.alert("Don't lie", "Stop xao l..", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (isHigher) {
      minBoundary = guessNumber;
    } else {
      maxBoundary = guessNumber - 1;
    }
    const newGuessNumber = generateRandomNumber(
      maxBoundary,
      minBoundary,
      guessNumber
    );
    setGuessNumber(newGuessNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessNumber}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <PrimaryButton onPress={guessHandler.bind(this, true)}>+</PrimaryButton>
      <PrimaryButton onPress={guessHandler.bind(this, false)}>-</PrimaryButton>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});

export default GameScreen;
