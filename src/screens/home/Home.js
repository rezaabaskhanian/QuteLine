import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Main from '../../components/template/home/Main'
import Header from '../../components/template/home/Header';
import Footer from '../../components/template/home/Footer';


const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Main/>
        {/* <Footer/> */}
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})