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

class LoginSucced_Submitted extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'20px'} py={'80px'}>
          <Center>
            <Text fontSize={'26px'} color="#3E4450" textAlign="center">
            Login Berhasil
            </Text>
            <Separator height={'2'} />
            <Text fontSize={'14px'} color="#ACACAC" textAlign="center">
            Kode OTP terverifikasi, Anda berhasil Login!
            </Text>
            <Separator height={'10'} />
            <Pressable onPress={() => navigation.navigate('FindLocation')}>
              <Box bg="#F2F8FF" w={'223px'} h={'223px'} borderRadius="full">
                <Box
                  bg="#DAECFF"
                  w={'183px'}
                  h={'183px'}
                  borderRadius="full"
                  m={'20px'}>
                  <Box
                    bg="#007DFE"
                    w={'143px'}
                    h={'143px'}
                    borderRadius="full"
                    m={'20px'}>
                      <Center py={'15px'}>
                    <Ionicons
                      name="checkmark-sharp"
                      size={100}
                      color="#FFFFFF"
                    />
                    </Center>
                  </Box>
                </Box>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default LoginSucced_Submitted;
