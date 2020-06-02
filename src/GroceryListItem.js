import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function GroceryListItem(props) {
  return (
    <View style={styles.listContainer}>
      <Text
        style={{
          color: props.color,
          fontSize: 18,
          paddingTop: 10,
          width: 300,
        }}
        onPress={props.handleColorChange}>
        {props.text}
      </Text>

      <Text
        style={{
          color: props.color,
          fontSize: 18,
        }}>
        {props.counter}
      </Text>

      <Button
        title="Delete"
        color="red"
        style={styles.deleteStyle}
        onPress={props.deleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    minHeight: 40,
  },
  listItem: {
    width: 400,
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'green',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  deleteStyle: {
    paddingRight: 20,
    marginRight: 10,
    width: 30,
  },
});
