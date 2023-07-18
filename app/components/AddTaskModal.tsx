import {  Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{FC, useState} from 'react'
import Modal from 'react-native-modal'
import colors from '../values/colors'

interface IModalProps{
    isVisible:boolean,
    onClose:()=>void;
    
    onAddTask:(taskContent:string)=>void;
}

const AddTaskModal:FC<IModalProps> = ({isVisible,onClose,onAddTask}) => {


    const [taskValue,setTaskValue]=useState<string>()


    const handleAddTask=()=>{
        if(taskValue){
            onAddTask(taskValue)
        }

        onClose()

        setTaskValue('')
       
    }



  return (
    <Modal isVisible={isVisible} style={styles.modalContainer} onBackdropPress={onClose}>
    <View style={styles.innerContainer}>
      <Text style={styles.title}>Add a Task Your List</Text>
      <TextInput value={taskValue} multiline onChangeText={(text)=>setTaskValue(text)} style={styles.input} placeholder='Task...' placeholderTextColor={colors.white}/>
      <TouchableOpacity onPress={handleAddTask} style={styles.btn}>
        <Text style={styles.btnText}>
            Add the Task
        </Text>
      </TouchableOpacity>
    </View>
    </Modal>
  )
}

export default AddTaskModal


const deviceSize=Dimensions.get("window")

const styles = StyleSheet.create({
    modalContainer:{
        justifyContent:"flex-end",
        margin:0
    },
    innerContainer:{
        backgroundColor:colors.gray,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/2,
        padding:10
    },
    title:{
        color:colors.white,
        textAlign:"center"
    },
    input:{
        borderWidth:1,
        borderRadius:10,
        borderColor:colors.white,
        marginTop:10,
        color:colors.white,
        height:45,
        paddingLeft:15
    },
    btn:{
        height:45,
        backgroundColor:colors.green,
        borderRadius:10,
        marginTop:35,
        justifyContent:"center",
        alignItems:"center"
    },
    btnText:{
        color:colors.textBlack,
        fontSize:15
    }
})