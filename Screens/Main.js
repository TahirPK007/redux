import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigator from './AppNavigator';
import {useSelector, useDispatch} from 'react-redux';
import {addMyProducts} from '../reduxtoolkit/MyProductSlice';
let items = [
  {
    id: 0,
    image:
      'https://image3.mouthshut.com/images/ImagesR/2022/8/925640223-250730-1.png?rnd=82405',
    name: 'mobile phone',
    brank: 'nokia',
    price: 2500,
    qty: 0,
  },
  {
    id: 1,
    image:
      'https://image3.mouthshut.com/images/ImagesR/imageuser_l/2021/10/925640223-9165926-1.jpg?rnd=13032',
    name: 'My shoes',
    brank: 'Bata',
    price: 999,
    qty: 0,
  },
];
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);

  return <AppNavigator />;
};

export default Main;
