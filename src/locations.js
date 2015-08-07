/*

Scraped data from https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States using this simple script.

var national_parks = Array.prototype.map.call( document.querySelector('.wikitable').querySelectorAll('tbody tr'), function( row ){
    var name = row.querySelector('th a').innerText;
    var raw_coords = row.querySelector('.geo').innerText.split('; ');
    var coords = {
        lat: parseFloat( raw_coords[0], 10 ),
        lon: parseFloat( raw_coords[1], 10 )
    };
    var image = 'https://maps.googleapis.com/maps/api/staticmap?center='+ coords.lat +','+ coords.lon +'&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM';
    return { name: name, coords: coords, image: image };
});
JSON.stringify( national_parks, null, 4 );

*/

var locations = [
    {
        "name": "Acadia",
        "coords": {
            "lat": 44.35,
            "lon": -68.21
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=44.35,-68.21&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "American Samoa",
        "coords": {
            "lat": -14.25,
            "lon": -170.68
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=-14.25,-170.68&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Arches",
        "coords": {
            "lat": 38.68,
            "lon": -109.57
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.68,-109.57&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Badlands",
        "coords": {
            "lat": 43.75,
            "lon": -102.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.75,-102.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Big Bend",
        "coords": {
            "lat": 29.25,
            "lon": -103.25
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=29.25,-103.25&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Biscayne",
        "coords": {
            "lat": 25.65,
            "lon": -80.08
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=25.65,-80.08&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Black Canyon of the Gunnison",
        "coords": {
            "lat": 38.57,
            "lon": -107.72
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.57,-107.72&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Bryce Canyon",
        "coords": {
            "lat": 37.57,
            "lon": -112.18
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.57,-112.18&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Canyonlands",
        "coords": {
            "lat": 38.2,
            "lon": -109.93
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.2,-109.93&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Capitol Reef",
        "coords": {
            "lat": 38.2,
            "lon": -111.17
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.2,-111.17&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Carlsbad Caverns",
        "coords": {
            "lat": 32.17,
            "lon": -104.44
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=32.17,-104.44&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Channel Islands",
        "coords": {
            "lat": 34.01,
            "lon": -119.42
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=34.01,-119.42&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Congaree",
        "coords": {
            "lat": 33.78,
            "lon": -80.78
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=33.78,-80.78&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Crater Lake",
        "coords": {
            "lat": 42.94,
            "lon": -122.1
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=42.94,-122.1&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Cuyahoga Valley",
        "coords": {
            "lat": 41.24,
            "lon": -81.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=41.24,-81.55&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Death Valley",
        "coords": {
            "lat": 36.24,
            "lon": -116.82
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.24,-116.82&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Denali",
        "coords": {
            "lat": 63.33,
            "lon": -150.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=63.33,-150.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Dry Tortugas",
        "coords": {
            "lat": 24.63,
            "lon": -82.87
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=24.63,-82.87&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Everglades",
        "coords": {
            "lat": 25.32,
            "lon": -80.93
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=25.32,-80.93&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Gates of the Arctic",
        "coords": {
            "lat": 67.78,
            "lon": -153.3
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=67.78,-153.3&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Glacier",
        "coords": {
            "lat": 48.8,
            "lon": -114
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.8,-114&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Glacier Bay",
        "coords": {
            "lat": 58.5,
            "lon": -137
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=58.5,-137&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Grand Canyon",
        "coords": {
            "lat": 36.06,
            "lon": -112.14
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.06,-112.14&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Grand Teton",
        "coords": {
            "lat": 43.73,
            "lon": -110.8
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.73,-110.8&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Great Basin",
        "coords": {
            "lat": 38.98,
            "lon": -114.3
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.98,-114.3&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Great Sand Dunes",
        "coords": {
            "lat": 37.73,
            "lon": -105.51
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.73,-105.51&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Great Smoky Mountains",
        "coords": {
            "lat": 35.68,
            "lon": -83.53
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=35.68,-83.53&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Guadalupe Mountains",
        "coords": {
            "lat": 31.92,
            "lon": -104.87
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=31.92,-104.87&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Haleakalā",
        "coords": {
            "lat": 20.72,
            "lon": -156.17
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=20.72,-156.17&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Hawaii Volcanoes",
        "coords": {
            "lat": 19.38,
            "lon": -155.2
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=19.38,-155.2&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Hot Springs",
        "coords": {
            "lat": 34.51,
            "lon": -93.05
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=34.51,-93.05&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Isle Royale",
        "coords": {
            "lat": 48.1,
            "lon": -88.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.1,-88.55&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Joshua Tree",
        "coords": {
            "lat": 33.79,
            "lon": -115.9
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=33.79,-115.9&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Katmai",
        "coords": {
            "lat": 58.5,
            "lon": -155
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=58.5,-155&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Kenai Fjords",
        "coords": {
            "lat": 59.92,
            "lon": -149.65
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=59.92,-149.65&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Kings Canyon",
        "coords": {
            "lat": 36.8,
            "lon": -118.55
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.8,-118.55&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Kobuk Valley",
        "coords": {
            "lat": 67.55,
            "lon": -159.28
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=67.55,-159.28&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Lake Clark",
        "coords": {
            "lat": 60.97,
            "lon": -153.42
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=60.97,-153.42&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Lassen Volcanic",
        "coords": {
            "lat": 40.49,
            "lon": -121.51
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.49,-121.51&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Mammoth Cave",
        "coords": {
            "lat": 37.18,
            "lon": -86.1
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.18,-86.1&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Mesa Verde",
        "coords": {
            "lat": 37.18,
            "lon": -108.49
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.18,-108.49&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Mount Rainier",
        "coords": {
            "lat": 46.85,
            "lon": -121.75
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=46.85,-121.75&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "North Cascades",
        "coords": {
            "lat": 48.7,
            "lon": -121.2
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.7,-121.2&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Olympic",
        "coords": {
            "lat": 47.97,
            "lon": -123.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=47.97,-123.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Petrified Forest",
        "coords": {
            "lat": 35.07,
            "lon": -109.78
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=35.07,-109.78&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Pinnacles",
        "coords": {
            "lat": 36.48,
            "lon": -121.16
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.48,-121.16&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Redwood",
        "coords": {
            "lat": 41.3,
            "lon": -124
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=41.3,-124&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Rocky Mountain",
        "coords": {
            "lat": 40.4,
            "lon": -105.58
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=40.4,-105.58&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Saguaro",
        "coords": {
            "lat": 32.25,
            "lon": -110.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=32.25,-110.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Sequoia",
        "coords": {
            "lat": 36.43,
            "lon": -118.68
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=36.43,-118.68&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Shenandoah",
        "coords": {
            "lat": 38.53,
            "lon": -78.35
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=38.53,-78.35&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Theodore Roosevelt",
        "coords": {
            "lat": 46.97,
            "lon": -103.45
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=46.97,-103.45&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Virgin Islands",
        "coords": {
            "lat": 18.33,
            "lon": -64.73
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=18.33,-64.73&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Voyageurs",
        "coords": {
            "lat": 48.5,
            "lon": -92.88
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=48.5,-92.88&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Wind Cave",
        "coords": {
            "lat": 43.57,
            "lon": -103.48
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=43.57,-103.48&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Wrangell –St. Elias",
        "coords": {
            "lat": 61,
            "lon": -142
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=61,-142&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Yellowstone",
        "coords": {
            "lat": 44.6,
            "lon": -110.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=44.6,-110.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Yosemite",
        "coords": {
            "lat": 37.83,
            "lon": -119.5
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.83,-119.5&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    },
    {
        "name": "Zion",
        "coords": {
            "lat": 37.3,
            "lon": -113.05
        },
        "image": "https://maps.googleapis.com/maps/api/staticmap?center=37.3,-113.05&size=400x400&maptype=satellite&zoom=9&key=AIzaSyDSIp9pblkkr5nxfRhujeBvVe27JzwHlTM"
    }
];

module.exports = locations;