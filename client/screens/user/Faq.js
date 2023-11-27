import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../constants';

const FAQ = ({navigation}) => {
  const faqData = [
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
  ];

  const [expandedId, setExpandedId] = useState(0);

  const toggleAnswer = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity
            style={{
            position: 'absolute',
            left: 20,
            top: 35,
            }}
            onPress={() => {
                navigation.goBack();
            }}
            >
                <Ionicons
                    name="arrow-back-circle-outline"
                    size={30}
                    color={colors.light}
                />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, textAlign: 'center', color: '#fff', fontWeight: 500 }}>FAQ</Text>
        </View>
        <View style={styles.bodyContainer}>
            <ScrollView 
            style={{width: '100%'}} 
            contentContainerStyle={{
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'center',
                display: 'flex',
                }}>
                <Text style={styles.textStyle}>Leggi le nostre FAQ</Text>
                {faqData.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                    style={styles.question}
                    onPress={() => toggleAnswer(index)}
                    >
                    <Text style={{fontSize: 15, fontWeight: '600', color: colors.dark}}>{item.question}</Text>
                    {expandedId === index && <Text style={styles.answer}>{item.answer}</Text>}
                    </TouchableOpacity>
                ))}                
            </ScrollView>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 40,
    position: 'relative',
    height: 80,
    marginBottom: 0,
  },
  textStyle: {
    width: '100%',
    paddingHorizontal: 20,
    color: colors.muted,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 30,
    marginTop: 20,
  },
  bodyContainer: {
    backgroundColor: colors.light,
    padding: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '90%',
    position: 'fixed',
    bottom: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
  },
  question: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    width: '90%',
    shadowColor: colors.light_black,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 }, // Aggiorna la shadowOffset
    shadowOpacity: 0.4,  // Aggiorna la shadowOpacity
  },
  answer: {
    marginTop: 8,
    color: colors.muted,
  },
});

export default FAQ;