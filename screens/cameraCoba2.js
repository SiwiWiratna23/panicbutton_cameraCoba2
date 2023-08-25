import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image} from 'react-native';
import { Actionsheet, Root} from "native-base";
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-picker/picker';

const width = Dimensions.get('window').width;

export default class CameraCoba2 extends Component {
    constructor (props){
        super(props);
        this.state = {
            fileList: []
        }
    }

    onSelectedImage = (image) => {
        let newDataImg = this.state.fileList;
        const source = {uri: image.path};
        let item = {
            id: Date.now(),
            url: source,
            content: image.data
        }
        newDataImg.push(item);
        this.setState({fileList: newDataImg})
    };

    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.onSelectedImage(image);
            console.log(image);
          });
    };

    choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            this.onSelectedImage(image);
            console.log(image);
          });
    };

    onClickAddImage = () => {
        const BUTTONS =['Take Photo', 'Choose Photo Library', 'Cancel'];
        Actionsheet.show(
                {option: BUTTONS, 
                cancelButtonIndex: 2, 
                title:'Select a Photo'},
            buttonIndex => {
                switch (buttonIndex){
                    case 0:
                        this.takePhotoFromCamera();
                        break;
                    case 1:
                        this.choosePhotoFromLibrary();                        
                        break;
                    default:
                        break
                }
            }
            )
    };

    renderItem = ({item, index}) => {
        return(
            <View>
                <Image source={item.url} style={styles.itemImage}/>
            </View>
        )
    };

    render(){
        let {content, btnPressStyle, txtStyle} = styles;
        let {fileList} = this.state;
        return(
           <Root>
                <View style={content}>
                    <Text> Sample React Native Add Image</Text>
                    <FlatList
                        data={fileList}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString ()}
                        extraData={this.state}
                    />
                    <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
                        <Text style={txtStyle} >Press Add Image</Text>
                    </TouchableOpacity>
                </View>
           </Root>
        );
    }
}

const styles = StyleSheet.create ({
    content:{
        flex:1, alignItems:'center', marginTop:50,
        paddingLeft:30, paddingRight:30, marginBottom:30 
    },
    btnPressStyle:{
        backgroundColor: '#0080ff',
        height: 50,
        width: width-60,
        alignItems: 'center',
        justifyContent:'center'
    },
    txtStyle:{
        color: '#ffffff'
    },
    itemImage:{
        backgroundColor: '#2f455c',
        height: 150,
        width:width-60,
        borderRadius: 8,
        resizeMode: 'contain'
    }
});