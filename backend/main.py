"""
Main Application Entry Point

This module serves as the entry point for the FastAPI application. It initializes the application, 
sets up middleware, and registers API routes.

Key Components:
- FastAPI Application:
  The `FastAPI` instance is created and serves as the core of the application.

- Middleware:
  The `setup_cors` function is used to configure Cross-Origin Resource Sharing (CORS) settings, 
  allowing the frontend to communicate with the backend.

- Routers:
  The `api_router` is included to register all API endpoints defined in the `api.routes` module.

Example Usage:
To run the application, use the following command:
>>> uvicorn main:app --reload
"""

from fastapi import FastAPI
from middleware.cors import setup_cors
from api.routes import router as api_router

# Create the FastAPI application instance
app = FastAPI()

# Set up CORS middleware
setup_cors(app)

# Register API routes
app.include_router(api_router)