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

class ForgotPassword extends Component {
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
            Lupa Password
          </Text>
          <Text p={'5px'} fontSize={'12px'} color="#ACACAC" textAlign="center">
            Masukkan nomor telepon Anda dan kami mengirimkan kode OTP ke nomor Anda
          </Text>
          <Separator height={'10'} />
          <Separator height={'10'} />
          <Center h={'150px'}>
            <Image
              bg="#FFFFFF"
              w={'250px'}
              h={'202px'}
              borderRadius={'10px'}
              source={require('../assets/ForgotPassword.png')}
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
          </VStack>
          <Separator height={'5'} />
          {/* <VStack space={'3px'} alignSelf="center">
            <Text fontSize={'12px'} color="#3E4450" textAlign="center">
            Belum menerima kode verifikasi?
            </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text fontSize={'12px'} color="#007DFE" textAlign="center">
              Kirim ulang kode
              </Text>
            </Pressable>
          </VStack> */}
          <Separator height={'10'} />
          <Separator height={'10'} />
          <Separator height={'6'} />
          <Center>
            <Pressable onPress={() => navigation.navigate('ForgotPassword2')}>
              <Box
                mt={'10px'}
                w={'143px'}
                h={'42px'}
                borderRadius={'11px'}
                bg="#B3D8FF"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Selanjutnya
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default ForgotPassword;
