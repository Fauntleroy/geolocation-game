/*

Scraped data from https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States using this simple script.

var national_parks = Array.prototype.map.call( document.querySelector('.wikitable').querySelectorAll('tbody tr'), function( row ){
    var name = row.querySelector('th a').innerText;
    var raw_coords = row.querySelector('.geo').innerText.split('; ');
    var coords = {
        lat: parseFloat( raw_coords[0], 10 ),
        long: parseFloat( raw_coords[1], 10 )
    };
    var image = 'https://maps.googleapis.com/maps/api/staticmap?center='+ coords.lat +','+ coords.long +'&size=400x400&maptype=satellite&zoom=9';
    return { name: name, coords: coords, image: image };
});
JSON.stringify( national_parks, null, 4 );

*/

var locations = [
    {
        "name": "Acadia",
        "coords": {
            "lat": 44.35,
            "long": -68.21
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=44.35,-68.21&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "American Samoa",
        "coords": {
            "lat": -14.25,
            "long": -170.68
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=-14.25,-170.68&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Arches",
        "coords": {
            "lat": 38.68,
            "long": -109.57
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.68,-109.57&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Badlands",
        "coords": {
            "lat": 43.75,
            "long": -102.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.75,-102.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Big Bend",
        "coords": {
            "lat": 29.25,
            "long": -103.25
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=29.25,-103.25&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Biscayne",
        "coords": {
            "lat": 25.65,
            "long": -80.08
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=25.65,-80.08&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Black Canyon of the Gunnison",
        "coords": {
            "lat": 38.57,
            "long": -107.72
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.57,-107.72&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Bryce Canyon",
        "coords": {
            "lat": 37.57,
            "long": -112.18
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.57,-112.18&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Canyonlands",
        "coords": {
            "lat": 38.2,
            "long": -109.93
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.2,-109.93&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Capitol Reef",
        "coords": {
            "lat": 38.2,
            "long": -111.17
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.2,-111.17&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Carlsbad Caverns",
        "coords": {
            "lat": 32.17,
            "long": -104.44
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=32.17,-104.44&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Channel Islands",
        "coords": {
            "lat": 34.01,
            "long": -119.42
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=34.01,-119.42&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Congaree",
        "coords": {
            "lat": 33.78,
            "long": -80.78
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=33.78,-80.78&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Crater Lake",
        "coords": {
            "lat": 42.94,
            "long": -122.1
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=42.94,-122.1&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Cuyahoga Valley",
        "coords": {
            "lat": 41.24,
            "long": -81.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=41.24,-81.55&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Death Valley",
        "coords": {
            "lat": 36.24,
            "long": -116.82
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.24,-116.82&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Denali",
        "coords": {
            "lat": 63.33,
            "long": -150.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=63.33,-150.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Dry Tortugas",
        "coords": {
            "lat": 24.63,
            "long": -82.87
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=24.63,-82.87&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Everglades",
        "coords": {
            "lat": 25.32,
            "long": -80.93
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=25.32,-80.93&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Gates of the Arctic",
        "coords": {
            "lat": 67.78,
            "long": -153.3
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=67.78,-153.3&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Glacier",
        "coords": {
            "lat": 48.8,
            "long": -114
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.8,-114&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Glacier Bay",
        "coords": {
            "lat": 58.5,
            "long": -137
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=58.5,-137&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Grand Canyon",
        "coords": {
            "lat": 36.06,
            "long": -112.14
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.06,-112.14&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Grand Teton",
        "coords": {
            "lat": 43.73,
            "long": -110.8
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.73,-110.8&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Great Basin",
        "coords": {
            "lat": 38.98,
            "long": -114.3
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.98,-114.3&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Great Sand Dunes",
        "coords": {
            "lat": 37.73,
            "long": -105.51
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.73,-105.51&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Great Smoky Mountains",
        "coords": {
            "lat": 35.68,
            "long": -83.53
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=35.68,-83.53&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Guadalupe Mountains",
        "coords": {
            "lat": 31.92,
            "long": -104.87
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=31.92,-104.87&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Haleakalā",
        "coords": {
            "lat": 20.72,
            "long": -156.17
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=20.72,-156.17&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Hawaii Volcanoes",
        "coords": {
            "lat": 19.38,
            "long": -155.2
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=19.38,-155.2&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Hot Springs",
        "coords": {
            "lat": 34.51,
            "long": -93.05
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=34.51,-93.05&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Isle Royale",
        "coords": {
            "lat": 48.1,
            "long": -88.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.1,-88.55&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Joshua Tree",
        "coords": {
            "lat": 33.79,
            "long": -115.9
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=33.79,-115.9&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Katmai",
        "coords": {
            "lat": 58.5,
            "long": -155
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=58.5,-155&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Kenai Fjords",
        "coords": {
            "lat": 59.92,
            "long": -149.65
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=59.92,-149.65&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Kings Canyon",
        "coords": {
            "lat": 36.8,
            "long": -118.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.8,-118.55&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Kobuk Valley",
        "coords": {
            "lat": 67.55,
            "long": -159.28
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=67.55,-159.28&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Lake Clark",
        "coords": {
            "lat": 60.97,
            "long": -153.42
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=60.97,-153.42&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Lassen Volcanic",
        "coords": {
            "lat": 40.49,
            "long": -121.51
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.49,-121.51&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Mammoth Cave",
        "coords": {
            "lat": 37.18,
            "long": -86.1
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.18,-86.1&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Mesa Verde",
        "coords": {
            "lat": 37.18,
            "long": -108.49
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.18,-108.49&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Mount Rainier",
        "coords": {
            "lat": 46.85,
            "long": -121.75
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=46.85,-121.75&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "North Cascades",
        "coords": {
            "lat": 48.7,
            "long": -121.2
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.7,-121.2&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Olympic",
        "coords": {
            "lat": 47.97,
            "long": -123.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=47.97,-123.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Petrified Forest",
        "coords": {
            "lat": 35.07,
            "long": -109.78
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=35.07,-109.78&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Pinnacles",
        "coords": {
            "lat": 36.48,
            "long": -121.16
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.48,-121.16&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Redwood",
        "coords": {
            "lat": 41.3,
            "long": -124
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=41.3,-124&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Rocky Mountain",
        "coords": {
            "lat": 40.4,
            "long": -105.58
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.4,-105.58&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Saguaro",
        "coords": {
            "lat": 32.25,
            "long": -110.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=32.25,-110.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Sequoia",
        "coords": {
            "lat": 36.43,
            "long": -118.68
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.43,-118.68&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Shenandoah",
        "coords": {
            "lat": 38.53,
            "long": -78.35
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.53,-78.35&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Theodore Roosevelt",
        "coords": {
            "lat": 46.97,
            "long": -103.45
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=46.97,-103.45&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Virgin Islands",
        "coords": {
            "lat": 18.33,
            "long": -64.73
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=18.33,-64.73&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Voyageurs",
        "coords": {
            "lat": 48.5,
            "long": -92.88
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.5,-92.88&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Wind Cave",
        "coords": {
            "lat": 43.57,
            "long": -103.48
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.57,-103.48&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Wrangell –St. Elias",
        "coords": {
            "lat": 61,
            "long": -142
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=61,-142&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Yellowstone",
        "coords": {
            "lat": 44.6,
            "long": -110.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=44.6,-110.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Yosemite",
        "coords": {
            "lat": 37.83,
            "long": -119.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.83,-119.5&size=400x400&maptype=satellite&zoom=9"
    },
    {
        "name": "Zion",
        "coords": {
            "lat": 37.3,
            "long": -113.05
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.3,-113.05&size=400x400&maptype=satellite&zoom=9"
    }
];

module.exports = locations;