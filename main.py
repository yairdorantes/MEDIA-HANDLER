import os
from fastapi import FastAPI, UploadFile, File, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

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
