import React, { useState } from 'react';
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Image,
  Center,
  CheckIcon,
  Select,
} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import Separator from '../components/separator';

const FindLocation = ({ navigation }) => {
  const [service, setService] = useState('');

  return (
    <Box flex={1} bg="#FFFFFF" safeArea={true}>
      <ScrollView px={'20px'} py={'30px'}>
        <Center>
          <Text fontSize={'26px'} color="#3E4450" textAlign="center">
            Panic Button
          </Text>
          <Separator height={'5'} />
        </Center>
        <Box w={'88%'} h={'7%'}>
          <HStack space={'5px'}>
          <Ionicons name="ios-location-sharp" size={23} color="black" />
          <Box py={'5px'}>
            <Text fontSize={'12px'} color="#3E4450" textAlign="left">
            Loading . . .
            </Text>
          </Box>
          </HStack>
        </Box>
        <Box w={'88%'} h={'5%'}>
          <HStack space={'5px'}>
          <Ionicons name="md-locate-sharp" size={23} color="black" />
          <Box py={'5px'}>
            <Text fontSize={'12px'} color="#3E4450" textAlign="left">
            Loading . . .
            </Text>
          </Box>
          </HStack>
        </Box>
        <Center>
          <Separator height={'10'} />
          <Separator height={'5'} />
          <Box w={'90%'} h={'40px'} borderRadius="md">
            <Select
              selectedValue={service}
              accessibilityLabel="Choose Service"
              placeholder="Pilih keadaan darurat"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="s" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}>
              <Select.Item label="Kebakaran" value="Kebakaran" />
              <Select.Item label="Kecelakaan" value="Kecelakaan" />
              <Select.Item label="Darurat Medis" value="Darurat_Medis" />
              <Select.Item label="Tindak Kejahatan" value="Tindak_Kejahatan" />
              <Select.Item label="Bencana Alam" value="Bencana_Alam" />
              <Select.Item label="Pencarian Pertolongan" value="Pencarian_Pertolongan" />
              <Select.Item label="Hewan Buas" value="Hewan_Buas" />
            </Select>
          </Box>
          <Separator height={'10'} />
          <Separator height={'5'} />
          <Center>
            <Pressable onPress={() => navigation.navigate('FindLocation2')}>
              <Box bg="#FEF6F7" w={'223px'} h={'223px'} borderRadius="full">
                <Box
                  bg="#FCE2E4"
                  w={'183px'}
                  h={'183px'}
                  borderRadius="full"
                  m={'20px'}>
                  <Box
                    bg="#F8B5BB"
                    w={'143px'}
                    h={'143px'}
                    borderRadius="full"
                    m={'20px'}></Box>
                </Box>
              </Box>
            </Pressable>
          </Center>
          <Separator height={'10'} />
          <Separator height={'3'} />
          <Text
            w={'85%'}
            fontSize={'12px'}
            color="#3E4450"
            textAlign="center">
            Klik tombol Tambahkan Bukti untuk menambahkan gambar kejadian
          </Text>
          <Separator height={'4'} />
          <Pressable onPress={() => navigation.navigate('SelectService')}>
            <Box
              mt={'10px'}
              w={'200px'}
              h={'40px'}
              borderRadius={'11px'}
              bg="#007DFE"
              p={'7px'}>
              <HStack space={'10px'} justifyContent={'center'}>
                <Ionicons name="camera" size={22} color="#FFFFFF" />
                <Text
                  fontSize={'14px'}
                  color="#FFFFFF"
                  textAlign="center"
                  fontWeight="medium"
                  py={'2px'}>
                  Tambahkan bukti
                </Text>
              </HStack>
            </Box>
          </Pressable>
          <Separator height={'10'} />
        </Center>
      </ScrollView>
    </Box>
  );
};

export default FindLocation;
