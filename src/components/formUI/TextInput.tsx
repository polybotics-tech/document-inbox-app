import { Text, View } from "@/src/components/custom";
import { useColors, useDimensions } from "@/src/hooks";
import { CustomTextInputProps } from "@/src/types/components/form";
import { Eye, EyeClosed, Search, X } from "lucide-react-native";
import React, { RefObject } from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

const TextInput = ({
  label,
  placeholder = "Type here...",
  value,
  setValue = () => {},
  name = "",
  setValueAsForm = false,
  icon = <></>,
  isPassword = false,
  showLabel = true,
  isEmail = false,
  isSearch = false,
  isNumeric = false,
  backgroundColor,
}: CustomTextInputProps) => {
  const { colors } = useColors();
  const { padding, gap, font, icon: iconDimension } = useDimensions();

  const styles = StyleSheet.create({
    textInput: {
      height: "100%",
      paddingTop: 0,
      paddingBottom: 0,
      flex: 1,
      fontFamily: font.family.regular,
      fontSize: font.size.m,
      color: colors.black,
    },
  });

  //--states
  const textInputRef: RefObject<any> = React.useRef(null);
  const [valueIsHidden, setValueIsHidden] = React.useState(Boolean(isPassword));

  //--variables
  const inputValue = setValueAsForm ? value[name] : value;
  const valueLen = inputValue?.length;

  //--functions
  const _onChangeText = (text: string | number): void => {
    const escText = text;

    if (setValueAsForm) {
      setValue((prev: any) => ({ ...prev, [name]: escText }));
      return;
    }

    setValue(escText);
  };

  const _handlePasswordVisibility = (): void => {
    setValueIsHidden((prev) => !prev);
  };

  const _clearSearchInput = (): void => {
    _onChangeText("");

    textInputRef.current.focus(); //--keep text input active
  };

  return (
    <View gap={gap.s}>
      {inputValue && showLabel && (
        <Text size={font.size.s} color={colors.gray300} semibold>
          {label || placeholder}
        </Text>
      )}

      <View
        height={48}
        backgroundColor={backgroundColor || colors.gray100}
        round
        horizontal={padding.m}
        gap={gap.xs}
        flex
        alignItems={"center"}
      >
        {isSearch ? (
          <Search
            size={iconDimension.size.b}
            color={colors.gray200}
            strokeWidth={iconDimension.weight.regular}
          />
        ) : (
          icon
        )}
        <RNTextInput
          ref={textInputRef}
          placeholder={placeholder}
          placeholderTextColor={colors.gray200}
          value={inputValue}
          onChangeText={_onChangeText}
          style={styles.textInput}
          inputMode={
            isEmail
              ? "email"
              : isSearch
                ? "search"
                : isNumeric
                  ? "numeric"
                  : "text"
          }
          returnKeyLabel={isSearch ? "search" : "done"}
          returnKeyType={isSearch ? "search" : "done"}
          enterKeyHint={isSearch ? "search" : "done"}
          secureTextEntry={valueIsHidden}
          cursorColor={colors.primary}
          selectionColor={colors.primaryFaded(0.3)}
          selectionHandleColor={colors.primary}
        />

        {isSearch ? (
          <>
            {valueLen > 0 && (
              <View
                width={iconDimension.size.b}
                setHeightAsWidth
                round
                center
                onPress={_clearSearchInput}
                isClickable
              >
                <X
                  size={iconDimension.size.s}
                  color={colors.error}
                  strokeWidth={iconDimension.weight.regular}
                />
              </View>
            )}
          </>
        ) : (
          <>
            {isPassword && (
              <>
                {valueIsHidden ? (
                  <EyeClosed
                    size={iconDimension.size.b}
                    color={colors.gray200}
                    strokeWidth={iconDimension.weight.regular}
                    onPress={_handlePasswordVisibility}
                  />
                ) : (
                  <Eye
                    size={iconDimension.size.b}
                    color={colors.gray200}
                    strokeWidth={iconDimension.weight.regular}
                    onPress={_handlePasswordVisibility}
                  />
                )}
              </>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextInput);
