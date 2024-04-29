import { Image, Pressable, StyleSheet, View } from "react-native";

const styles=StyleSheet.create({

});
export default function PlaceItem({place ,onSelect}){
return(
<Pressable onPress={onSelect}>
        <Image source={{uri:place.imageURI}}/>
        <View>
            <Text>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
                
            </Text>
        </View>
    </Pressable>
)
}