import { Button, ModalBase, Text, View } from "@/src/components/custom";
import { TextInput } from "@/src/components/formUI";
import { BottomModalComponent } from "@/src/components/reuseableUI";
import { useColors, useDimensions } from "@/src/hooks";
import { FilterModalProps } from "@/src/types/components/page";
import { Search, SortDesc } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const TabHeaderMemoComponent = () => {
  const { colors } = useColors();
  const { padding, gap, icon, font } = useDimensions();

  const styles = StyleSheet.create({
    bottomLine: {
      borderWidth: 0,
      borderColor: "transparent",
      borderBottomColor: colors.gray100,
      borderBottomWidth: 0.5,
    },
  });

  //--states
  const [searchIsVisible, setSearchIsVisible] = React.useState(false);
  const [filterIsVisible, setFilterIsVisible] = React.useState(false);

  return (
    <View
      horizontal={padding.m}
      vertical={padding.s}
      gap={gap.m}
      backgroundColor={colors.white}
      style={styles.bottomLine}
    >
      <View width="100%" flex justifyContent={"space-between"}>
        {/**logo */}
        <Text size={font.size.m}>
          <Text color={colors.primary} semibold>
            Doc
          </Text>
          Inbox
        </Text>

        {/**action buttons */}
        <View width={null} flex gap={gap.m}>
          {/**search */}
          <View
            width={24}
            center
            isClickable
            onPress={() => setSearchIsVisible((prev) => !prev)}
          >
            <Search
              color={colors.gray200}
              size={icon.size.b}
              strokeWidth={icon.weight.regular}
            />
          </View>

          {/**filter */}
          <View
            width={24}
            center
            isClickable
            onPress={() => setFilterIsVisible((prev) => !prev)}
          >
            <SortDesc
              color={colors.gray200}
              size={icon.size.b}
              strokeWidth={icon.weight.regular}
            />
          </View>
        </View>
      </View>

      {/**search */}
      {searchIsVisible && <SearchBox />}

      {/**filter */}
      {filterIsVisible && (
        <FilterModal
          isVisible={filterIsVisible}
          setIsVisible={setFilterIsVisible}
        />
      )}
    </View>
  );
};
const TabHeaderComponent = React.memo(TabHeaderMemoComponent);

const SearchBox = () => {
  //--states
  const [query, setQuery] = React.useState("");

  return (
    <TextInput
      value={query}
      setValue={setQuery}
      placeholder="Search documents"
      showLabel={false}
      isSearch
    />
  );
};

const FilterModal = ({
  isVisible,
  setIsVisible = () => {},
}: FilterModalProps) => {
  const { colors } = useColors();
  const { gap, screenWidth } = useDimensions();

  return (
    <ModalBase isVisible={isVisible} setIsVisible={setIsVisible} placeBottom>
      <BottomModalComponent>
        {/**action buttons */}
        <View flex gap={gap.m}>
          <Button
            title="Reset"
            width={screenWidth.ratio(0.3)}
            backgroundColor={colors.errorFaded()}
            color={colors.error}
          />

          <Button title="Show results" />
        </View>
      </BottomModalComponent>
    </ModalBase>
  );
};

export { TabHeaderComponent };
