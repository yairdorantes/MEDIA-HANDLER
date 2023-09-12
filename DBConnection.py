import MySQLdb


def make_connection():
    # Database configuration
    db_config = {
        "host": "localhost",
        "user": "root",
        "passwd": "1",
        "db": "MediaCloudDB",
    }
    # Create a connection to the database
    conn = MySQLdb.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("USE MediaCloudDB")
    return conn


make_connection()
