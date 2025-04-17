# Coding Challenge: Sales Dashboard with Next.js & FastAPI

## Overview
This project is a full-stack application featuring:
1. **Next.js** as the frontend framework.
2. **FastAPI** as the backend API layer.
3. **Dummy JSON Data** with sales-related information.

The application parses the provided **`backend/data/dummyData.json` : Source of all mock sales data.** and renders its nested structures in a user-friendly interface. It also includes an AI feature that allows users to ask questions about the sales data.

---

## Features

### **Frontend**
- Built with **Next.js**.
- Components include:
  - `Sidebar`: Allows navigation between different sections of the app.
  - `SalesSummaryCards`: Displays a summary of sales data.
  - `SalesCards`: Lists sales representatives with sorting functionality.
  - `ResponseCards`: Displays AI-generated responses.
  - `QuestionForm`: Allows users to ask questions to the AI.
  - `TotalSummaryChart`: Visualizes sales data and status breakdown using charts.
  - `ManageModelsCards`: Allows users to switch between AI models.
  - `UserList`: Displays a list of users with their roles.

### **Backend**
- Built with **FastAPI**.
- Endpoints include:
  - `/api/sales-reps`: Returns a list of sales representatives and their details.
  - `/api/sales-summary`: Returns a summary of sales data.
  - `/api/ai`: Accepts user questions and returns AI-generated responses.
- AI services supported:
  - **OpenAI**: Interacts with OpenAI's GPT model.
  - **Gemini**: Interacts with Google's Gemini AI model.
  - **Custom AI**: Interacts with a custom AI service.

---

## Implementation Details

### **Data Rendering**
- The backend serves data from `backend/data/dummyData.json` via REST endpoints.
- The frontend fetches this data asynchronously and displays it in a meaningful way (e.g., a list of sales representatives, their deals, skills, etc.).
- Handles nested JSON structures (e.g., deals, clients, and status breakdown).

### **UI/UX**
- Provides a clean, intuitive interface for viewing sales data.
- Includes loading states while data is being fetched and handles errors gracefully.

### **Backend API**
- Uses FastAPI to create well-structured and documented endpoints.
- Implements CORS to allow communication between the frontend and backend.

### **AI Feature**
- Allows users to ask questions about the sales data.
- Supports multiple AI models (OpenAI, Gemini, and Custom AI).
- Includes a form for user input and displays AI-generated responses.

---

## Using LLM APIs

This project integrates with various AI models. You can use free or trial APIs from the following providers:

- **OpenAI**: Requires an API key for GPT models.
- **Google Gemini API**: Provides a free tier for the Gemini model API.
- **Custom AI**: Allows integration with a custom AI service hosted at a specified endpoint.

---

## Submission Instructions

This repository contains the completed implementation of the Sales Dashboard project. It is ready for review.

### What Has Been Implemented:
1. **Frontend**:
   - Built with Next.js, featuring components such as `Sidebar`, `SalesSummaryCards`, `SalesCards`, `ResponseCards`, `QuestionForm`, `TotalSummaryChart`, `ManageModelsCards`, and `UserList`.
   - Integrated AI functionality to allow users to ask questions about sales data.
   - Implemented sorting, filtering, and visualization features.

2. **Backend**:
   - Built with FastAPI, providing endpoints for sales data and AI integration.
   - Integrated multiple AI services (OpenAI, Gemini, and Custom AI).
   - Served data from `backend/data/dummyData.json` and handled nested JSON structures.

3. **Testing**:
   - Unit tests for both frontend and backend components.
   - Verified functionality and error handling for all major features.

### Next Steps:
- Review the implementation for code quality, functionality, and adherence to requirements.
- Provide feedback or suggestions for further improvements.

### Repository Link:
- This repository is ready for review. Please explore the codebase and run the application as described in the **Getting Started** section.

---

## Deliverables

- **Forked Repository**: Contains all changes, with commits reflecting your development process.

---

## Evaluation Criteria

1. **Code Quality & Organization**  
   - Readability, maintainability, and modularity.  
   - Clear separation of concerns between frontend and backend.

2. **Data Handling**  
   - Ability to fetch, parse, and display nested data structures.  
   - Proper use of asynchronous operations and error handling.

3. **UI/UX**  
   - Clean, intuitive interface.  
   - Demonstration of loading states and helpful user feedback.

4. **AI Integration**  
   - Creativity and correctness of the AI feature.  
   - Proper request/response handling on both frontend and backend.

5. **Documentation**  
   - Clarity in the instructions to set up and run the project.  
   - Brief explanation of design choices and potential improvements.

---

## Getting Started

### **Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv ioenv
   source ioenv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```
5. Confirm the API works by visiting `http://localhost:8000/docs`.

### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` to view your Next.js app.

---

## Data

- The file `dummyData.json` is located in the `backend/data` directory.
- Adjust your API endpoint and frontend calls if you use different paths or filenames.

---

## AI Feature

1. **Backend**  
   - Add a POST endpoint to handle AI requests (e.g., `/api/ai`).
   - Use the `openai_service.py`, `gemini_service.py`, or `custom_service.py` modules to process AI requests.

2. **Frontend**  
   - Use the `QuestionForm` component to collect user questions.
   - Use the `ResponseCards` component to display AI-generated responses.

---

### **Environment Variables**

The backend requires the following environment variables to be set in a `.env` file located in the `backend` directory. These variables are used to configure API keys and default settings for the AI services.

Create a `.env` file in the `backend` directory and add the following:

```plaintext
OPENAI_API_KEY=OpEnAi-ApI-KeY
GEMINI_API_KEY=GeMiNi-ApI-KeY
CUSTOM_AI_URL=http://localhost:8000/api/chat
AI_DEFAULT_MODEL=custom
```

---

## Testing

### **Backend Tests**
- Unit tests for backend services and routes are located in the `backend/tests` folder.
- Run the tests using:
  ```bash
  pytest
  ```

### **Frontend Tests**
- Unit tests for frontend components and pages are located in the `frontend/tests` folder.
- Run the tests using:
  ```bash
  npm test
  ```

---

## Potential Improvements

1. **Feature for Setting Source Data via Stream**  
   - Add functionality to allow users to input an API endpoint in the "Manage AI Models" page.  
   - This endpoint would serve as the source for streaming data to be analyzed dynamically.

2. **Feature for User Data Upload**  
   - Add functionality to allow users to upload data files (e.g., JSON, XML, CSV) in the "Manage AI Models" page.  
   - The uploaded data would be processed and analyzed by the AI models.

---

## Tips for Completion

- **Start Small**: Fetch the data, display it, then expand to more complex UI or AI functionality.
- **Testing**: Add unit or integration tests to ensure your code works as expected.
- **UI Libraries**: Use any UI library or styling approach (e.g., Tailwind CSS) to enhance the interface.
- **Extensions**: Add charts, filters, or sorting to demonstrate extra skills.

---

**Good luck, and have fun building your Sales Dashboard!**

---

## Review Checklist

This section outlines the key areas to focus on while reviewing the implementation:

1. **Code Quality & Organization**  
   - Ensure the code is readable, maintainable, and modular.  
   - Verify clear separation of concerns between frontend and backend.

2. **Data Handling**  
   - Confirm the ability to fetch, parse, and display nested data structures.  
   - Check the proper use of asynchronous operations and error handling.

3. **UI/UX**  
   - Assess the interface for cleanliness and intuitiveness.  
   - Verify the presence of loading states and helpful user feedback.

4. **AI Integration**  
   - Evaluate the creativity and correctness of the AI feature.  
   - Ensure proper request/response handling on both frontend and backend.

5. **Documentation**  
   - Confirm the clarity of instructions for setting up and running the project.  
   - Review the explanation of design choices and potential improvements.

---

This checklist ensures a thorough review of the project and highlights areas for potential feedback or suggestions.
