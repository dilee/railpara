var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/railpaara';

 var places = [{
        name: "Gangaramaya Temple",
        place_description: "The Gangaramaya Buddhist temple is a beautiful and vibrant temple with a history that dates back over 2,000 years. This temple was said to have been built in the 19th century by a trader and ship owner named Don Bastion, who had played a leading role in reviving Buddhism. Located beside a Holy Bo Tree on the waters of Beira Lake, the temple is only accessible by crossinga wooden bridge. According to historical records, the Lord Buddha is reputed to have preached under this Bo tree which is considered as a sapling of the Sri Maha Bodhi and is over 100 years old. This Temple is famous for its imposing buildings, and is complete with a chetiya, bo tree, image house, Simamalaka, relic chamber containing the relics of the Buddha and Arahat Seevali, museum, library, pirivena, and residential, education and alms halls. The Nawam Perahera, conducted by the Gangarama temple is a major tourist attraction. The perehara was initially started in 1979 and has been held uninterrupted in the month of February since then. This beautiful festival of arts has over 1,000 performers and over 100 elephants brought from different parts of the island is the highlight of the pageant.",
        is_liked: false,
        images: ["images/places/gangaramaya/gangaramaya_slider_01.png", "images/places/gangaramaya/gangaramaya_slider_02.png", "images/places/gangaramaya/gangaramaya_slider_03.png"]

    },
    {
        name: "Independence Square",
        place_description: "Independence Commemoration Hall located on Independence Square (formally Torrington Square) in Cinnamon Gardens, is a national monument in Sri Lanka. This was built long after independence was gained from the British rule on February 4, 1948. The structure is made of concrete, and bear columns similar to what is found in ancient Sri Lankan architecture and it was designed to resemble a Kandyan audience hall. The rows of stone lions that guard this great monument are a unique feature of this Commemoration Hall. This is also an impressive piece of art that clearly signifies the ancient architecture and the elaborate stone carvings and painting found at the memorial hall are simply breathtaking. Other than a momentum it is commonly used as a place to conduct annual national day celebrations and other significant national celebrations and cultural activities that mark national unity. Currently Independence Square and its surroundings is considered to be one of the most prestigious locations in Colombo are to be converted into an exclusive for cultural activities, recreation and academic and research excellence. This remarkable site in Colombo has become a major tourist attraction due to its historical significance and extraordinary work of architecture. It is one of the significant heritage sites of the city that you must visit.",
        is_liked: false,
        images: ["images/places/independence_square/independence_square_slider_01.jpg", "images/places/independence_square/independence_square_slider_02.jpg"]
    }
    ];

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    // createCollection(db, 'location');
    // dropCollection(db, 'users');

    insertItems(db, 'place', places, function(result) {
        
        console.log(result);
        db.close();
    }, function(err){
        console.log(err);
        db.close();
    });

    
});

var insertItems = function (db, collectionName, items, callback, error) {
    // Get the documents collection
    var collection = db.collection(collectionName);
    // Insert some documents
    collection.insertMany(items, function (err, result) {
        if (!err) {
            assert.equal(err, null);
            assert.equal(items.length, result.result.n);
            assert.equal(items.length, result.ops.length);
            console.log("Inserted " + items.length + " items into the collection");
            callback(result);
        }
        else {
            error(err);
        }
    });
};

var createCollection = function (db, collectionName) {
    // Get the documents collection
    var collection = db.collection(collectionName);
    // Insert some documents
    collection.createIndex({ "email": "text" }, { unique: true });
};

var dropCollection = function (db, collectionName) {
    // Get the documents collection
    // Insert some documents
    var collection = db.collection('users');
    collection.drop();
};