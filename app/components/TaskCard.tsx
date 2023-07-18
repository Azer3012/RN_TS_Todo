import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import colors from '../values/colors'

interface ICardProps {
    isCompleted: boolean
    item:any
}

const TaskCard: FC<ICardProps> = ({ item,isCompleted }) => {
    return (
       
        isCompleted ?
            (<View style={styles.completedContainer}>
                <Text style={styles.completedTaskText}>{item.task}</Text>
            </View> )
            : (<View style={styles.container}>
                <Text style={styles.taskText}>{item.task}</Text>
                </View>)

      
    )
}

export default TaskCard

const baseStyles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    },
    taskText: {
        fontSize: 17
    }
})


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        ...baseStyles.container

    },
    taskText: {
        color: colors.textBlack,
        ...baseStyles.taskText

    },
    completedContainer:{
        ...baseStyles.container,
        backgroundColor:colors.gray
    },
    completedTaskText:{
        ...baseStyles.taskText,
        color:colors.white,
        textDecorationLine:'line-through'
    }
})