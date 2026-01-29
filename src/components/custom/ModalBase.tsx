import { useDimensions } from "@/src/hooks";
import { CustomModalBaseProps } from "@/src/types/components/custom";
import React from "react";
import { StyleSheet } from "react-native";
import RNModal from "react-native-modal";

const ModalBase = ({
  children,
  isVisible = false,
  setIsVisible = () => {},
  canClose = true,
  onClose = () => {},
  canSwipe = true,
  style = {},
  placeCenter = false,
  placeBottom = false,
  backdropOpacity = 0.8,
  backdropColor = "#000000",
  ...props
}: CustomModalBaseProps) => {
  const { screenWidth, screenHeight } = useDimensions();

  const styles = StyleSheet.create({
    modal: {
      width: screenWidth.full,
      height: screenHeight.full,
      padding: 0,
      margin: 0,
    },
    placement: {
      alignItems: "center",
      justifyContent: placeCenter
        ? "center"
        : placeBottom
          ? "flex-end"
          : "space-between",
    },
  });

  //--functions
  const _closeModal = () => {
    if (!canClose) return;

    setTimeout(() => {
      onClose();
    }, 100);
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <RNModal
          isVisible={isVisible}
          onBackButtonPress={_closeModal}
          swipeDirection={canSwipe ? "down" : undefined}
          onSwipeComplete={_closeModal}
          style={[styles.modal, styles.placement, style]}
          hasBackdrop={true}
          backdropColor={backdropColor}
          backdropOpacity={backdropOpacity}
          hideModalContentWhileAnimating={true}
          propagateSwipe={true}
          {...props}
        >
          {children}
        </RNModal>
      )}
    </>
  );
};

export default React.memo(ModalBase);
