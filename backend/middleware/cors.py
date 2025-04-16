"""
CORS Middleware Module

This module is responsible for configuring Cross-Origin Resource Sharing (CORS) settings for the FastAPI application. 
CORS is a security feature implemented by web browsers to restrict how resources on a web page can be requested 
from another domain. This middleware allows the frontend application to communicate with the backend API.

Key Features:
- Allows requests from specified origins.
- Supports credentials (e.g., cookies, authorization headers).
- Configures allowed HTTP methods and headers.

Functions:
- setup_cors: Adds the CORS middleware to the FastAPI application with the specified configuration.
"""

from fastapi.middleware.cors import CORSMiddleware

def setup_cors(app):
    """
    Configures CORS middleware for the FastAPI application.

    Parameters:
    - app (FastAPI): The FastAPI application instance to which the middleware is added.

    Configuration:
    - allow_origins: A list of origins that are allowed to make requests. Use ["*"] to allow all origins.
    - allow_credentials: Whether to allow cookies and other credentials in requests.
    - allow_methods: A list of HTTP methods that are allowed. Use ["*"] to allow all methods.
    - allow_headers: A list of HTTP headers that are allowed. Use ["*"] to allow all headers.
    """
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Allow all origins (can be restricted to specific domains)
        allow_credentials=True,  # Allow credentials such as cookies and authorization headers
        allow_methods=["*"],  # Allow all HTTP methods (e.g., GET, POST, PUT, DELETE)
        allow_headers=["*"],  # Allow all HTTP headers
    )
