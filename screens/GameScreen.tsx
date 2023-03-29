import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/elements/Card";
import Instruction from "../components/elements/Instruction";
import PrimaryButton from "../components/elements/PrimaryButton";
import Title from "../components/elements/Title";
import GuessLogItem from "../components/games/GuessLogItem";
import NumberContainer from "../components/games/NumberContainer";
import { generateRandomNumber } from "../utils/generateRandomNumber";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(this: any, { target, onOver }: any) {
  const initialNumber = generateRandomNumber(1, 100, target);
  const [guessNumber, setGuessNumber] = useState(initialNumber);
  const [guessList, setGuessList] = useState<number[]>([]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (guessNumber === target) {
      onOver(guessList.length);
    }
  }, [guessNumber, target, onOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
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
      minBoundary = guessNumber + 1;
    } else {
      maxBoundary = guessNumber;
    }
    const newGuessNumber = generateRandomNumber(
      maxBoundary,
      minBoundary,
      guessNumber
    );
    setGuessNumber(newGuessNumber);
    setGuessList((preGuess) => [...preGuess, guessNumber]);
  };

  let content = (
    <>
      <NumberContainer>{guessNumber}</NumberContainer>
      <Card>
        <Instruction style={styles.instructionText}>
          Higher or Lower?
        </Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessHandler.bind(this, true)}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessHandler.bind(this, false)}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessHandler.bind(this, false)}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{guessNumber}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessHandler.bind(this, true)}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessList}
          renderItem={(ele) => (
            <GuessLogItem roundNumber={ele.index + 1} guess={ele.item} />
          )}
          keyExtractor={(item: any) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default GameScreen;
