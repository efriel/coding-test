from fastapi import FastAPI
from middleware.cors import setup_cors
from api.routes import router as api_router

app = FastAPI()
setup_cors(app)
app.include_router(api_router)