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

class Start extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={'10px'} py={'60px'}>
          <Center>
            <Box
              justifyContent="center"
              alignItems="center"
              flexDirection="row">
              <Text
                fontSize={'40px'}
                color="#F0F1F3"
                fontWeight="bold"
                textAlign="center"
                position="relative">
                PANIC BUTTON
              </Text>
              <Text
                fontSize={'25px'}
                color="#5F687B"
                fontWeight="bold"
                textAlign="center"
                zIndex={2}
                position="absolute"
                mt={'20px'}>
                PANIC BUTTON
              </Text>
            </Box>
            <Separator height={'5'} />
            <Text
              fontSize={'14px'}
              color="#3E4450"
              textAlign="center"
              fontWeight="medium">
              Sigap, Cepat, dan Tepat
            </Text>
            <Separator height={'2'} />
            <Text fontSize={'14px'} color="#3E4450" textAlign="center">
              Kami siap membantu masyarakat Sidoarjo di segala kejadian darurat
              dimana dan kapan saja
            </Text>
            <Separator height={'10'} />
            <Separator height={'5'} />
            <Image
              bg="#FFFFFF"
              w={'240px'}
              h={'247px'}
              borderRadius={'10px'}
              source={require('../assets/panicbutton.jpg')}
            />
            <Separator height={'10'} />
            <Separator height={'5'} />
            <Separator height={'10'} />
            <Pressable
              onPress={() => navigation.navigate('Login')}>
              <Box
                mt={'10px'}
                w={'120px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  Get Started
                </Text>
              </Box>
            </Pressable> 
            <HStack>
            <Pressable
              onPress={() => navigation.navigate('ImagePickerExample')}>
              <Box
                mt={'10px'}
                w={'120px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  camera
                </Text>
              </Box>
            </Pressable> 
            <Pressable
              onPress={() => navigation.navigate('CobaCamera')}>
              <Box
                mt={'10px'}
                w={'120px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  cobaCamera
                </Text>
              </Box>
            </Pressable> 
            </HStack>
            <Pressable
              onPress={() => navigation.navigate('CameraCoba')}>
              <Box
                mt={'10px'}
                w={'120px'}
                h={'40px'}
                borderRadius={'11px'}
                bg="#007DFE"
                p={'7px'}>
                <Text
                  fontSize={'16px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium">
                  cameraCoba2
                </Text>
              </Box>
            </Pressable>
          </Center>
        </ScrollView>
      </Box>
    );
  }
}

export default Start;
