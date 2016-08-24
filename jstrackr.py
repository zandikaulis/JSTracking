#!/usr/bin/env python2.7

import requests
import jsbeautifier

files = [
    {'url': 'https://player.twitch.tv/js/player.js',
     'filename': 'player.js'}
]

for jsfile in files:
    print "Downloading", jsfile['url'], "to file", jsfile['filename']
    src = requests.get(jsfile['url']).content
    beatuified = jsbeautifier.beautify(src)
    open('js/%s' % jsfile['filename'], 'wb').write(beatuified)
