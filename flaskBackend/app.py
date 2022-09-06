from __future__ import unicode_literals
from __future__ import unicode_literals

import atexit
import json
import os
import time

import requests
#from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, jsonify
from flask_cors import CORS

FEED_EXPORT_ENCODING = 'utf-8'
app = Flask(__name__)
CORS(app)


@app.route('/')
def get_Data():
    open('product.json', 'w', ).close()
    params = {
        'spider_name': 'product1',
        'start_requests': True
    }
    response = requests.get('http://localhost:9080/crawl.json', params)
    data = json.loads(response.text)
    with open('product.json', 'w') as outfile:
        json.dump(data['items'], outfile)
    return "succes"


@app.route('/getProduct')
def get():
    if os.path.getsize("product.json") != 0:

        f = open('product.json')
        x = f.read()
        data = json.loads(x.encode('utf-8'))
        newData = []
        i = 0

        while i < len(data):

            if data[i]['name'] is None:
                data.pop(i)
            else:
                i = i + 1
        i = 0
        while i < len(data):

            if data[i]['site'] == 'Brikos':
                dict = {
                    'name': data[i]['name'],
                    'site': [
                        {'name': data[i]['site'],
                         'price': data[i]['price'],
                         'productUrl': data[i]['productUrl'],
                         'stock': data[i]['stock']
                         }]}
                dictionary_copy = dict.copy()
                newData.append(dictionary_copy)
                data.pop(i)
            else:
                i = i + 1
        d = 0

        while d < len(newData):
            i = 0
            while i < len(data):
                if newData[d]['name'] == data[i]['comparedName']:
                    newData[d]['site'].append({
                        'name': data[i]['site'],
                        'price': data[i]['price'],
                        'productUrl': data[i]['productUrl'],
                        'stock': data[i]['stock']
                    })
                i = i + 1
            d = d + 1
        return jsonify(newData)
    else:
        return "Error"






def print_date_time():
    print(time.strftime("%A, %d. %B %Y %I:%M:%S %p"))


#scheduler = BackgroundScheduler()
#scheduler.add_job(func=get_Data, trigger="interval", hours=12)
#scheduler.start()

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())


if __name__ == '__main__':
    app.run()

