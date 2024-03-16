import React from 'react';

import { View, Text, ScrollView ,StyleSheet } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={ menuItemsStyles.container}>
      <ScrollView 
        indicatorStyle={"black"}
        style={menuItemsStyles.innerContainer}>
        <Text style={menuItemsStyles.menuTitle}>
          View Menu
        </Text>
        <Text style={menuItemsStyles.itemText}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const menuItemsStyles = StyleSheet.create({
  container: {
    flex: 0.75
  },
  innerContainer :{
    paddingHorizontal: 30,
          paddingVertical: 30,
          backgroundColor: "#F4CE14",
  },
  menuTitle :{
    color: 'white', 
    fontSize: 24, 
    flexWrap: 'wrap'

  },
  itemText : {
    color: 'black', 
    fontSize: 20

  }
})