from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Users(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    points = db.Column(db.Integer)

    def __init__(self,id,first_name,last_name,points):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.points = points

class UserSchema(ma.Schema):
    class Meta:
        fields=('id','first_name', 'last_name','points')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route('/get',methods=['GET'])
def get_users():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)

@app.route('/get/<id>',methods=['GET'])
def get_user(id):
    user = Users.query.get(id)
    return user_schema.jsonify(user)

@app.route('/add',methods=['POST'])
def add_user():
    id = request.json['id']
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    points = request.json['points']

    added_user = Users(id,first_name,last_name,points)
    db.session.add(added_user)
    db.session.commit()

    return user_schema.jsonify(added_user)

@app.route('/delete/<id>',methods=['DELETE'])
def delete_user(id):
    deleted_user = Users.query.get(id)
    db.session.delete(deleted_user)
    db.session.commit()

    return user_schema.jsonify(deleted_user)

@app.route('/update/<id>',methods=['PUT'])
def update_user(id):
    user = Users.query.get(id)
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    points = request.json['points']

    user.first_name = first_name
    user.last_name = last_name
    user.points = points

    db.session.commit()
    return user_schema.jsonify(user)

@app.route('/get_points',methods=['GET'])
def get_points():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    user = Users.query.filter_by(first_name = first_name,last_name = last_name).first()
    return  {"points" : f"{user.points}"}


if __name__=="__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)