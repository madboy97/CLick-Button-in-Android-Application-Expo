import React from 'react';
import {  View, Text, StyleSheet, } from 'react-native';


const user=({route})=>{
return(
<View>


<Text style={styles.Text}>Name:   {route.params.name} </Text>
<Text style={styles.Text}>Email:   {route.params.email} </Text>
<Text style={styles.Text}>Country:   {route.params.country} </Text>
<Text style={styles.Text}>Gender:   {route.params.gender}</Text>
<Text style={styles.Text}>Subjects:   {route.params.Phy}{route.params.chem}{route.params.bio}</Text>
<Text style={styles.Text}>Skills:   {route.params.skills}</Text>
<Text style={styles.Text}>Address:   {route.params.address}</Text>

</View>)


}
export{user};
const styles = StyleSheet.create({
    Text: {
        marginTop:40,
        fontSize: 20,

    }

   

})