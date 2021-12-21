# app.py
# Daniel Kogan 
# 12.14.2021

# flask
from flask import Flask, send_from_directory, jsonify, send_file
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from flask_executor import Executor
# async
import os, random, asyncio
# apology video generator
from main import *

app = Flask(__name__, static_url_path='', static_folder='react/build')
executor = Executor(app)
CORS(app) #comment this on deployment
api = Api(app)

app.config['EXECUTOR_TYPE'] = 'thread'
app.config['EXECUTOR_MAX_WORKERS'] = 5

def naming_convention(sor):
    conv = [" ","@","#","$","%","^",'*',"(",")","!","<",">","?","/","\\","\"","\'","~",":",";","`","=","+","{","}","|"]
    for i in conv:
        sor = sor.replace(i, "")
    return sor

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/generator/<sor>/start", methods=["GET", "POST"])
def avg_make(sor):
    ID = naming_convention(sor)
    executor.submit_stored('avg', main, True,ID,sor)
    return jsonify({'result':'success'})

@app.route("/generator/<sor>", methods=['GET','POST'])
def avg_status(sor):
    if not executor.futures.done('calc_power'):
        return jsonify({'status': executor.futures._state('avg')})
    future = executor.futures.pop('avg')
    ID = naming_convention(sor)
    print(f'Finished/apology{ID}.mp4')
    return send_file(f'Finished/apology{ID}.mp4')

@app.route("/generator/<sor>/get", methods=['GET','POST'])
def avg_get(sor):
    ID = naming_convention(sor)
    return send_file(f'Finished/apology{ID}.mp4')

@app.route("/loading", methods=['GET'])
def loading_screen():
    return send_file('Assets/loading/ytload.mp4')

@app.route("/clear")
def dont_do_this_lol():
    for i in os.listdir('Finished'):
        if not i=='.gitkeep':
            os.remove('Finished/' + i)
    return "it is done"
