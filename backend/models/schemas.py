from typing import Optional
from pydantic import BaseModel

class AIRequest(BaseModel):
    question: str
    model: Optional[str] = None
    
class AIResponse(BaseModel):
    answer: str
