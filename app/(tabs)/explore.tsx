import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const artist = {
    artworks: [
        { id: '1', title: "Зоряна ніч", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
        { id: '2', title: "Соняшники", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/1200px-Vincent_Willem_van_Gogh_128.jpg" },
        { id: '3', title: "Автопортрет", image: "https://print4you.com.ua/upload/iblock/191/191de264c00a39e38559dd70f374535a.jpg" },
    ]
};

export default function GalleryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Галерея картин</Text>
            <FlatList
                data={artist.artworks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.artContainer}>
                        <Image source={{ uri: item.image }} style={styles.artImage} />
                        <Text style={styles.artTitle}>{item.title}</Text>
                    </View>
                )}
            />
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
    artContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    artImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
    artTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
});
