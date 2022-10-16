import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import { useState, useRef, useEffect } from 'react';
//import Counter from './Counter';
export default function App() {
  let chat = [
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihv',
      sender: 1,
      receiver: 2,
      time: "12:35"
    },
    {
      chat: 'dgvndfivdiuvnibvdfbvdbvbihvidshiuhguhguhguhfughdughudfhgudhguhguhrugh',
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
  ]


  return (
    <View style={styles.container}>
      <ScrollView>
        {chat.map(i => {
          return (
            <View key={Math.random()} style={i.sender == 1 ? styles.chatbox : styles.chatbox1}>
              <View style= {{flex:1, flexDirection: 'column', textAlign: 'center'}}>
                <Text style={i.sender == 1 ? styles.text : styles.text1} key={Math.random()}>{i.chat}</Text>
              </View>
              <Text style={styles.time} key={Math.random()}>{i.time}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#eee',
    padding: 10,
  },
  chatbox: {
    position: 'realtive',
    backgroundColor: "#adcadc",
    borderWidth: 0,
    borderColor: '#adcadc',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 0,
    margin: 5,
    alignSelf: "flex-end",
    alignContent: 'center',



  },
  chatbox1: {
    backgroundColor: "#83ebc1",
    borderWidth: 2,
    borderColor: '#ccc',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 0,
    margin: 5,
    alignSelf: "flex-start",

  },
  text: {
    color: 'black',
    padding: 5,
    margin: 2,
    fontSize: 16

  },
  text1: {
    color: 'black',
    padding: 5,
    margin: 2,
    fontSize: 16
  },
  time: {
    color: 'black',
    margin: 0,
    fontSize: 10,
    textAlign: 'right',
    backgroundColor: "#dedede",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10

  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    backgroundColor: "blue",
    margin: 10,
    padding: 10,

  }
});
