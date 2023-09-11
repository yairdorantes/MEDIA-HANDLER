from fastapi import FastAPI, Request, UploadFile, File
from typing import Annotated
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/")
def read_root():
    return {"message": "Hello, World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, query_param: str = None):
    return {"item_id": item_id, "query_param": query_param}


@app.post("/upload-chunk")
async def upload_chunk(file: UploadFile = File(...)):
    try:
        with open(file.filename, "ab") as f:
            f.write(await file.read())
        return {"message": "Chunk uploaded successfully"}
    except Exception as e:
        return {"error": str(e)}


# if __name__ == "__main__":
import uvicorn

uvicorn.run(app, host="192.168.1.2", port=8000)
