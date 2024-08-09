import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

container: {
    flex: 1,
    /*alignItems: 'center',*/
    /*justifyContent: 'center',*/
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
},
item1: {
    width: 100,
    height: 100,
    backgroundColor: '#f10a34',
},
item2: {
    width: 100,
    height: 100,
    backgroundColor: '#0ddd1b84',
},
item3: {
    width: 100,
    height: 100,
    backgroundColor: '#d92bdc84',
},

});

export default styles;