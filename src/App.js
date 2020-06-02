import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import GroceryListItem from './GroceryListItem';

export default function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(['tomato', 'candy', 'banana']);
  const [textColor, setTextColor] = useState('white');
  const [counter, setCounter] = useState(0);

  addTodo = (text) => {
    if (value.length > 0) {
      setTodos([...todos, text]);
      setValue('');
    }
  };

  deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  handleColorChange = () => {
    const nextColor = textColor === 'black' ? 'red' : 'black';
    setTextColor(nextColor);
  };

  handleItem = (item) => {
    const newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i] === item) {
        setCounter(counter + 1);
      } else {
        setValue(item);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grocery Items</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Enter Your Item"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={(value) => handleItem(value)}
        />
        <View style={styles.buttonStyle}>
          <Button
            title="Add Item"
            color="#3f3160"
            onPress={() => addTodo(value)}></Button>
        </View>
      </View>

      <ScrollView style={{width: '100%'}}>
        {todos.map((item, index) => (
          <GroceryListItem
            text={item}
            key={item.key}
            index={index}
            color={textColor}
            counter={counter}
            handleColorChange={() => handleColorChange(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3f3160',
  },
  header: {
    width: '100%',
    backgroundColor: '#ddd',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f3160',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInputContainer: {
    height: 60,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  buttonStyle: {
    width: 80,
    height: 30,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },
});
