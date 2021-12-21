# Flickr Displayr

The project built to search for Flickr public photo database.

## Clone & Deployment

### 1.
Get to a directory and type these commands into the terminal
``` Linux
$ git clone https://github.com/nhatnguyen9813/human-detection-app.git
$ cd flickr-displayr
$ npm i
```

### 2.
The app uses [Flickr API](https://www.flickr.com/services/api/); hence, you will need their API key in order to run it. After getting [Flickr API key](https://www.flickr.com/services/api/misc.api_keys.html), simply create the ``.env`` file in the root directory and type in

``process.env.REACT_APP_API_KEY="<your-API-key-here>"``

### 3.
Start running the app by using the command
``` Linux
$ npm start
```
