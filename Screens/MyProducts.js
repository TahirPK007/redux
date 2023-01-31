import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProductToMyCart} from '../reduxtoolkit/MyCartSlice';

const MyProducts = () => {
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <View style={{felx: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          backgroundColor: 'white',
          elevation: 5,
        }}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 600}}>
          Implementing Redux
        </Text>
      </View>
      <FlatList
        data={myProducts}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '95%',
                height: 120,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 10,
                elevation: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 100, height: 100, borderRadius: 10}}
              />
              <View style={{padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: 800, colo: 'black'}}>
                  {item.name}
                </Text>
                <Text>{item.brand}</Text>
                <Text style={{color: 'green', fontWeight: 800}}>
                  {`₨` + item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 7,
                        paddingRight: 10,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                      }}>
                      <Text style={{color: 'white'}}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : null}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 7,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}>
                      <Text style={{color: 'white'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontSize: 20, fontWeight: 700}}>
                      {'0'}
                    </Text>
                  )}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 7,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}>
                      <Text style={{color: 'white'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyProducts;
