import React, {useState, useContext} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, Keyboard  } from "react-native";
import ToDoListContext from '../list-context/toDoList-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const HomeScreen = ({ navigation }) => {
    const [title, onChangeTitle] = useState("");
    const [about, onChangeAbout] = useState("");
    const [isCheckedItem, onChangeIsCheckedItem] = useState('nothing');
    const toDoCtx = useContext(ToDoListContext)
    const addNewTodo = ()=> {
        toDoCtx.addItem({id: Date.now(), title: title, about: about})
        onChangeTitle('')
        onChangeAbout('')
        Keyboard.dismiss()
    }
    const addNew = (isChecked, id) => {
        onChangeIsCheckedItem(`${id} = ${isChecked}`)
    }

    return (
        <SafeAreaView>
            <Text>{isCheckedItem}</Text>
            <TextInput 
                onChangeText={onChangeTitle}
                value={title}
                style={styles.input}
                placeholder="Title: ToDo"
            />
            <TextInput 
                onChangeText={onChangeAbout}
                value={about}
                style={styles.input}
                placeholder="About: ToDo"
            />
            <Button
                onPress={addNewTodo}
                title="Add New Todo"
                color="#841584"
                />
            {toDoCtx.items ? toDoCtx.items.map(item => (
                <BouncyCheckbox
                    size={25}
                    text={item.title}
                    iconStyle={{ borderColor: "red" }}
                    textStyle={{ fontFamily: "JosefinSans-Regular" }}
                    unfillColor="#FFFFFF"
                    onPress={(isChecked) => {addNew(isChecked, item.id)}}
                />
            )) : 'There is nothing here'}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default HomeScreen;