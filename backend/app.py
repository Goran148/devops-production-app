import os

import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DATABASE_HOST"),
        port=os.getenv("DATABASE_PORT"),
        database=os.getenv("DATABASE_NAME"),
        user=os.getenv("DATABASE_USER"),
        password=os.getenv("DATABASE_PASSWORD"),
    )

@app.route("/health")
def health():
    return jsonify({
        "status":"healthy"
    })

@app.route("/api")
def api():
    return jsonify({
        "message": "Devops Production App API",
        "version": "1.0"
    })

@app.route("/api/database")
def database():
    try:
            connection = get_db_connection()
            cursor = connection.cursor()
    
            cursor.execute("SELECT version();")
            db_version = cursor.fetchone()

            cursor.close()
            connection.close()

            return jsonify({
                 "database": "connected",
                  "version": db_version[0]
            })

    except Exception as error:
         return jsonify({
              "database": "error",
              "message": str(error)
         }), 500

if __name__ == "__main__":
     app.run(host="0.0.0.0", port=5000)
                