import React from 'react'
import { View,Text } from 'react-native'
import { createStore,combineReducers } from 'redux'
import bookReducer from './store/reducer/book'
import MainNavigator from './Navigation/Navigator'
import book from './store/reducer/book'
import {useFonts} from 'expo-font'
import { Provider } from 'react-redux'
import themeReducer from './store/reducer/theme'
import categorieReducer from './store/reducer/categories'
import favReducer from './store/reducer/favourite'
const rootReducer=combineReducers({
    book:bookReducer,
    theme:themeReducer,
    category:categorieReducer,
    favourite:favReducer,
   
})

const store =createStore(rootReducer)
const App = () => {
    const [loaded] = useFonts({
        'roboto': require('./assets/fonts/Roboto-Light.ttf'),
        'oswald':require('./assets/fonts/Oswald-Regular.ttf'),
        'mont':require('./assets/fonts/Montserrat-Light.ttf')
        
      });
  
      if (!loaded) {
        return null;
      }

    return(
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
       
       
    )
}

export default App;