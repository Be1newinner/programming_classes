from pydantic import BaseModel
from typing import Optional

class ToDoBase(BaseModel):
    title: str
    completed: bool = False

class ToDoCreate(ToDoBase):
    pass

class ToDoUpdate(BaseModel):
    title: Optional[str] = None
    completed: Optional[bool] = None

class ToDoInDB(ToDoBase):
    id: int

    class Config:
        orm_mode = True
