import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View
            style={littleLemonFooterStyles.container}>
            <Text
                style={littleLemonFooterStyles.footerText}>
                All rights reserved by Little Lemon, 2022 {' '}
            </Text>
        </View>
    );
}

const littleLemonFooterStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        marginBottom: 10
    },
    footerText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    }

})
