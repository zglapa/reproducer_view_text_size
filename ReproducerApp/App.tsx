import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutRectangle,
  PixelRatio,
} from 'react-native';

const print_height = (layout: LayoutRectangle, component: string) => {
  const {height} = layout;
  console.log(`${component}'s height = ${height}`);
};

const TestApp = () => {
  return (
    <View
      style={styles.View}
      onLayout={event => print_height(event.nativeEvent.layout, 'View')}>
      <Text
        style={styles.Text}
        onLayout={event => print_height(event.nativeEvent.layout, 'Text')}>
        {PixelRatio.get()} kkkkk
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 15,
    marginTop: 295,
  },
  Text: {
    fontSize: 8,
    overflow: 'hidden',
    height: 15,
    borderWidth: 0.5,
    borderRadius: 4,
  },
});

const App = () => {
  return <TestApp />;
};

export default App;
