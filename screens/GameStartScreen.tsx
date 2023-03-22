import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/elements/Card";
import Instruction from "../components/elements/Instruction";
import PrimaryButton from "../components/elements/PrimaryButton";
import Title from "../components/elements/Title";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }: any) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const inputNumberHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const num = +enteredNumber;
    if (isNaN(num) || num < 1 || num > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
    }
    onPickNumber(num);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter a number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputNumberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
