import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import colors from '../constants/colors'
import { useSelector } from 'react-redux'
import CategoryItem from '../components/CategoryItem'
const AuthorScreen = (props) => {
  const categories = useSelector(state => state.category.categories);
  return (
    <View style={styles.screen}>
    
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={(itemData) =>
          <CategoryItem name={itemData.item.name} image={itemData.item.image} total={itemData.item.total} onViewDetail={() => {
            props.navigation.navigate('AuthorBook', {

              name: itemData.item.name,

            })
          }} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingBottom: 20,
    height:'100%',
  },
})
export default AuthorScreen;