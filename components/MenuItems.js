import React from 'react';

import { View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView 
        indicatorStyle={"black"}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 30,
          backgroundColor: "#F4CE14",
        }}>
        <Text style={{ color: 'white', fontSize: 24, flexWrap: 'wrap' }}>
          View Menu
        </Text>
        <Text style={{ color: 'black', fontSize: 20 }}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;