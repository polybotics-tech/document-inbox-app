import React from "react";
import { Keyboard } from "react-native";

export default function useKeyboardState(base: number = 0): {
  keyboardHeight: number;
  keyboardIsVisible: boolean;
} {
  //handle keyboard display
  const [keyboardHeight, setKeyboardHeight] = React.useState(base);
  const [keyboardIsVisible, setKeyboardIsVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(Number(event.endCoordinates.height) + base);
        setKeyboardIsVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(base);
        setKeyboardIsVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [base]);

  return { keyboardHeight, keyboardIsVisible };
}
