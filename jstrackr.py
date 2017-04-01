#!/usr/bin/env python2.7

import requests
import jsbeautifier
import re
import random


def get_url_from_page(url, pat):
    content = requests.get(url).content
    name = re.search(pat, content).group(1)
    return url + name

if __name__ == '__main__':
    files = [
        {'url': 'https://player.twitch.tv/js/player.js',
         'filename': 'player.js'},
        {'url': 'https://www.twitch.tv/site_options.js',
         'filename': 'site_options.js'},
        {'url': 'https://web-cdn.ttvnw.net/global.js',
         'filename': 'global.js'},
        {'url': get_url_from_page("https://www.twitch.tv", r'"(.*/emberhelper-[a-zA-Z0-9]+.js)'),
         'filename': 'emberhelper.js'},
        {'url': get_url_from_page("https://player.twitch.tv/", r'"([a-z0-9]+/vendor.[a-zA-Z0-9]+.js)'),
         'filename': 'vendor.js'},
        {'url': 'https://web-cdn.ttvnw.net/emberapp.js',
         'filename': 'emberapp.js'},
        # {'url': 'https://web-cdn.ttvnw.net/game-details.js',
        #  'filename': 'game-details.js'},
        # {'url': 'https://web-cdn.ttvnw.net/premium.js',
        #  'filename': 'premium.js'},
        {'url': 'https://www.twitch.tv/tmilibs/tmi-v3.js',
         'filename': 'tmi-v3.js'}
    ]

    for jsfile in files:
        cachebuster = random.getrandbits(100)
        jsfile['url'] += "?%x" % cachebuster
        print "Downloading", jsfile['url'], "to file", jsfile['filename']
        r = requests.get(jsfile['url'])
        if 'last-modified' in r.headers:
            print "Last Modified:", r.headers['last-modified']
        else:
            print "No Last-Modified header!"
        src = r.content
        beatuified = jsbeautifier.beautify(src)
        if jsfile['filename'] == 'site_options.js':
            # Avoid spam
            if '"experiments": null' in beatuified:
                continue
        open('js/%s' % jsfile['filename'], 'wb').write(beatuified)
