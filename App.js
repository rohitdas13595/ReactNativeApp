import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import { useState, useRef, useEffect } from 'react';
//import Counter from './Counter';
export default function App() {
  let chat = [
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 1
    },

    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 2,
      receiver: 2
    },
  ]


  return (
    <View style={styles.container}>
      <ScrollView>
        {chat.map(i => {
          return (
            <View  key ={Math.random()} style = {i.sender == 1?styles.chatbox : styles.chatbox1}>
              <Text style={i.sender == 1 ?styles.text : styles.text1} key={Math.random()}>{i.chat}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eee',
    padding: 10,
    justifyContent: "center"
  },
  chatbox:{
    alignContent: "center",
    alignItems: "left",
  },
  chatbox1:{
    alignContent: "space-around",
    alignItems: "right",

    
  },
  text: {
    color: 'black',
    backgroundColor: "white",
    borderWidth: 1,
    padding: 5,
    borderColor: '#6564hg',
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5,
    margin: 2,
    fontSize: 16
  },
  text1: {
    color: 'black',
    backgroundColor: "#83ebc1",
    borderWidth: 1,
    padding: 5,
    borderColor: '#ccc',
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    borderTopRightRadius:5,
    margin: 2,
    fontSize: 16,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    backgroundColor: "blue",
    margin: 10,
    padding: 10
  }
});
