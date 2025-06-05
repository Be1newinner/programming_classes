from fastapi import FastAPI, Depends, HTTPException
from contextlib import asynccontextmanager
from sqlalchemy.ext.asyncio import AsyncSession

from db import engine, Base, get_db
from service import get_all_todos, create_todo, update_todo, delete_todo
from schemas import ToDoCreate, ToDoUpdate, ToDoInDB

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(lifespan=lifespan)

@app.get("/todos", response_model=list[ToDoInDB])
async def list_todos(db: AsyncSession = Depends(get_db)):
    return await get_all_todos(db)

@app.post("/todos", response_model=ToDoInDB)
async def add_todo(todo: ToDoCreate, db: AsyncSession = Depends(get_db)):
    return await create_todo(db, todo)

@app.put("/todos/{todo_id}", response_model=ToDoInDB)
async def edit_todo(todo_id: int, todo: ToDoUpdate, db: AsyncSession = Depends(get_db)):
    updated = await update_todo(db, todo_id, todo)
    if not updated:
        raise HTTPException(status_code=404, detail="ToDo not found")
    return updated

@app.delete("/todos/{todo_id}")
async def remove_todo(todo_id: int, db: AsyncSession = Depends(get_db)):
    deleted = await delete_todo(db, todo_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="ToDo not found")
    return {"message": "Deleted successfully"}
