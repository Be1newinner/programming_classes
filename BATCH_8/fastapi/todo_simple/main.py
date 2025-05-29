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

@app.patch("/todo/:{id}")
def update_todo(body: TodoInput, id: int):
    for item in todo_list:
        if item["id"] == id:
            if body.title is not None:
                item["title"] = body.title
            if body.completed is not None:
                item["completed"] = body.completed
        return {"message": "Todo updated!"}

@app.delete("/todo/:{id}")
def delete_todo(id: int):    
    for item in todo_list:
        if item["id"] == id:
            todo_list.remove(item)
    
    return {
        "message": "deleting todo!",
        "data": todo_list
        }