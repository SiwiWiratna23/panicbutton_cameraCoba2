import React, { Component } from 'react';
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  FlatList,
  Image,
  View,
  Input,
  NBBox,
  Divider,
  Center,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Separator from '../components/separator';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'60px'}>
          <Text
            fontSize={'20px'}
            color="#3E4450"
            textAlign="center"
            fontWeight="Bold">
            Login
          </Text>
          <Separator height={'10'} />
          <Separator height={'10'} />
          <Center h={'150px'}>
            <Image
              bg="#FFFFFF"
              w={'250px'}
              h={'202px'}
              borderRadius={'10px'}
              source={require('../assets/Login.png')}
            />
          </Center>
          <Separator height={'10'} />
          <Separator height={'5'} />
          <VStack>
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              No Telepon
            </Text>
            <Input
              w={'100%'}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
            />
            <Text p={'5px'} fontSize={'12px'} color="#3E4450" textAlign="left">
              Password
            </Text>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              h={'40px'}
              borderRadius={'13px'}
              bg="#F5F5F5"
              alignSelf="center"
              type={this.state.show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={this.toggleShow}>
                  <Ionicons
                    as={Ionicons}
                    name={this.state.show ? 'eye' : 'eye-off'}
                    size={18}
                    marginRight={15}
                    color="muted.400"
                  />
                </Pressable>
              }
            />
          </VStack>
          <Separator height={'5'} />
          <HStack space={'5px'} alignSelf="center">
            <Text fontSize={'12px'} color="#3E4450" textAlign="center">
              Belum punya akun?
            </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text fontSize={'12px'} color="#007DFE" textAlign="center">
                Register
              </Text>
            </Pressable>
          </HStack> 
          <Separator height={'1'} />
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text fontSize={'12px'} color="#ACACAC" textAlign="center">
              Lupa password?
            </Text>
          </Pressable>
          <Separator height={'10'} />
          <Center>
            <Pressable onPress={() => navigation.navigate('LoginSucced_Submitted')}>
              <Box
                mt={'10px'}
                w={'168px'}
                h={'42px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Login
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default Login;
