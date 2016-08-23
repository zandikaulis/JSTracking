#!/usr/bin/env python2.7

import requests
import jsbeautifier

files = [
    "https://player.twitch.tv/js/player.js"
]

for jsfile in files:
    src = requests.get(jsfile).content
    beatuified = jsbeautifier.beautify(src)
    open('js/%s' % jsfile.split('/')[-1], 'wb').write(beatuified)
