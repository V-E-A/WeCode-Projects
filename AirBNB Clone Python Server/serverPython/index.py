from flask import Flask, request
import json
from json import loads
from bson import json_util, ObjectId
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb://amit:amit00@ds149914.mlab.com:49914/abnb')
db = client.abnb


def obj_id_convert(arr):
    for doc in arr:
        oid = doc['_id']
        oid_str = str(oid)
        doc['_id'] = oid_str
    return arr


@app.route('/houses/', methods=['GET'])
def get_all():
    docs_list = list(db.houses.find())
    docs_list = obj_id_convert(docs_list)
    return json.dumps(docs_list, default=json_util.default)


@app.route('/houses/<string:house_id>', methods=['GET'])
def get_by_id(house_id):
    doc = [i for i in db.houses.find({"_id": ObjectId(house_id)})]
    doc = obj_id_convert(doc)
    doc = doc[0]
    return json.dumps(doc, default=json_util.default)


@app.route('/houses/<string:house_id>', methods=['GET','PUT'])
def update_booking(house_id):
    db.houses.update_one({"_id": ObjectId(house_id)}, {"$set": loads(request.data.decode('utf-8'))})
    doc = [i for i in db.houses.find({"_id": ObjectId(house_id)})]
    doc = obj_id_convert(doc)
    doc = doc[0]
    return json.dumps(doc, default=json_util.default)


if __name__ == '__main__':
    app.run(debug=True)
