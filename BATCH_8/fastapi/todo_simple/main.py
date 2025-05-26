from pydantic import BaseModel
from fastapi import FastAPI
app=FastAPI()

class TodoInput(BaseModel):
    title: str
    completed: bool = False

todo_list = [
    {
        "id": 1,
        "title": "Some Title",
        "completed" : False
    },
    {
        "id": 2,
        "title": "Some Title 2",
        "completed" : True
    }
]

@app.get("/")
def home():
    return {
        "message": "Welcome to todo!"
        }

@app.get("/todo")
def get_todo_list():
    return {
        "message": "fetching all todos!", 
        "data": todo_list
        }

@app.post("/todo")
def add_todo(body: TodoInput):
    todo_list.append({
        "title": body.title,
        "completed": body.completed
    })
    
    return {
        "message": "Adding todo!"
        }

@app.patch("/todo")
def update_todo():
    return {
        "message": "updating todo!"
        }

@app.delete("/todo")
def delete_todo():
    return {
        "message": "deleting todo!"
        }