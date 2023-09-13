from email.policy import HTTP
from http.client import HTTPResponse
import os
from fastapi import FastAPI, UploadFile, File, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

# import uvicorn
from DBConnection import make_connection

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific origins
    allow_credentials=True,
    allow_methods=[
        "*"
    ],  # You can specify specific HTTP methods (e.g., ["GET", "POST"])
    allow_headers=["*"],  # You can specify specific HTTP headers
)
conn = make_connection()
cursor = conn.cursor()


@app.get("/")
def read_root():
    return {"message": "Hello, World"}


@app.get("/images/{user_id}")
def get_images(user_id: int):
    try:
        query = f"CALL sp_get_images({user_id})"
        cursor.execute(query)
        rows = cursor.fetchall()
        # Create a list of dictionaries with the desired structure
        formatted_rows = []
        for row in rows:
            formatted_row = {
                "id_file": row[0],
                "owner_name": row[1],
                "file_type": row[2],
                "file_name": row[3],
                "file_size": row[4],
                "upload_time": row[5],
                "source": row[6],
                "category": row[7],
            }
            formatted_rows.append(formatted_row)
        # Return the formatted result as JSON
        return JSONResponse(content=formatted_rows)
    except Exception as e:
        return {"error": str(e)}


# CALL sp_upload_file(1, 'Image', 'example.jpg', 1024, 'C:\example.jpg');

upload_dir = "/home/yair/Desktop/xd/media/"


@app.post("/upload_file")
async def upload_chunk(file: UploadFile = File(...)):
    try:
        os.makedirs(upload_dir, exist_ok=True)

        # Construct the full path to save the file
        file_path = os.path.join(upload_dir, file.filename)

        with open(file_path, "wb") as f:
            f.write(await file.read())
        # return {"message": "Chunk uploaded successfully"}
    except Exception as e:
        return {"error": str(e)}


@app.delete("/del_file")
async def del_file(request: Request):
    json_data = await request.json()
    file_path = json_data.get("path")
    file_id = json_data.get("file_id")
    try:
        os.remove(file_path)
        print(f"File '{file_path}' has been successfully deleted.")
        query = f"DELETE FROM Files where id_file={file_id};"
        cursor.execute(query)
        conn.commit()
        return 200
    except OSError as e:
        print(f"Error deleting '{file_path}': {e}")
        raise HTTPException(status_code=500)


@app.post("/file_data")
async def file_data(request: Request):
    try:
        json_data = await request.json()
        file_name = json_data.get("fileName")
        file_size = json_data.get("fileSize")
        file_type = json_data.get("fileType")
        file_comming = (
            1,
            file_type,
            file_name,
            file_size,
            f"http://192.168.1.2/files/{file_name}",
        )
        query = "CALL sp_upload_file(%s, %s, %s, %s, %s)"
        cursor.execute(query, file_comming)
        conn.commit()
        # cursor.close()
        # Perform processing with the JSON data
        result = {"message": "nice"}
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid JSON data: {str(e)}")


# uvicorn.run(app, host="192.168.1.2", port=8000)
