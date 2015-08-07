# Geolocation Game
A simple game using the geolocation API. This game uses satellite photos of US National Parks as its source of data.

Live demo: http://fauntleroy.github.io/geolocation-game/

## Developing

In order to build this application, you must have [Node.js](http://nodejs.org) installed. This will automatically install [NPM](http://npmjs.org), which is required to install some dependencies. Source files are stored in `/src`, and compiled files are output to `/dist`.

To install the dependencies:

```
npm install
```

To build the app:

```
npm run build
```

To automatically rebuild the app as you update the code in the `/src` directory:

```
npm run dev
```

If you'd like to run the compiled application locally, you'll need to run a webserver (since the geolocation API will not work with the file:// protocol). In order to emulate the behavior of GitHub pages, I used [Jekyll](http://jekyllrb.com/). Here's the command I used while developing:

```
jekyll serve --watch --source dist
```

## Todo

- Clean up browser-specific flexbox CSS with mixins
- Add timer and score tracking
- Eliminate images from the pool as they're used in questions (don't repeat images)
- Create an end state and score reporting
- Handle cases where users do not accept the Geolocation request
- Various interface tweaks