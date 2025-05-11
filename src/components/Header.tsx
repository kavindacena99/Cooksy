import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Header(){
    return(
        <View>
            <Text style={{ color:'orange', fontSize:50, fontWeight:600, marginTop:30, marginBottom:30 }}>Cooksy</Text>
        </View>
    );
}

export default Header;