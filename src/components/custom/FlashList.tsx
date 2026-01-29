import { Text, View } from "@/src/components/custom";
import { CustomFlashListProps } from "@/src/types/components/custom";
import {
  FlashListProps,
  FlashList as ShopifyFlashList,
} from "@shopify/flash-list";
import React from "react";
import { StyleSheet } from "react-native";
import { useDimensions, useKeyboardState } from "../../hooks";

const FlashList = ({
  data = [],
  refreshFunc = async () => {},
  loadMoreFunc = async () => {},
  canLoadMore = false,
  isLoading = false,
  ListEmptyComponent = (
    <View fullscreen center>
      <Text>No item found</Text>
    </View>
  ),
  ItemSeparatorComponent,
  gapSize,
  padding = 0,
  paddingTop = 0,
  paddingVertical = 0,
  paddingHorizontal = 0,
  ...props
}: FlashListProps<typeof ShopifyFlashList> & CustomFlashListProps) => {
  const { gap } = useDimensions();
  const { keyboardHeight } = useKeyboardState(64);

  const styles = StyleSheet.create({
    list: {
      padding: padding,
      paddingTop: paddingTop || paddingVertical || padding,
      paddingVertical: paddingVertical || padding,
      paddingHorizontal: paddingHorizontal || padding,
      paddingBottom: keyboardHeight,
    },
  });

  //--
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = React.useCallback(async () => {
    if (refreshing) return;

    setRefreshing(true);
    try {
      await refreshFunc();
    } catch (error) {
      //message: "Something went wrong. Please try again",
    } finally {
      setRefreshing(false);
    }
  }, [refreshing, refreshFunc]);

  const handleLoadMore = React.useCallback(() => {
    if (canLoadMore) {
      loadMoreFunc();
    }
  }, [canLoadMore, loadMoreFunc]);

  return (
    <ShopifyFlashList
      data={data}
      renderItem={props.renderItem}
      keyExtractor={props.keyExtractor}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5} // Trigger loadMoreFunc when 50% from the end
      refreshing={refreshing}
      onRefresh={handleRefresh}
      ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={
        Boolean(canLoadMore && isLoading) ? ListEmptyComponent : null
      }
      ItemSeparatorComponent={() =>
        ItemSeparatorComponent || <View height={gapSize || gap.m} />
      }
    />
  );
};

export default React.memo(FlashList);
