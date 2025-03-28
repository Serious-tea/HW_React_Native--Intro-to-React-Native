import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const artist = {
    name: "Вінсент ван Гог",
    bio: "Голландський постімпресіоніст, відомий своїми виразними мазками та яскравими кольорами.",
    image: "https://thesketchline.com/wp-content/uploads/2019/04/11.jpg",
};

export default function HomeScreen() {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{artist.name}</Text>
            <Image source={{ uri: artist.image }} style={styles.image} />
            <Text style={styles.bio}>{artist.bio}</Text>
            <Button title="Переглянути галерею" onPress={() => router.push('/explore')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    bio: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
});
