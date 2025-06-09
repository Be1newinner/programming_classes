from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from sqlalchemy.exc import NoResultFound
from model import ToDo
from schemas import ToDoCreate, ToDoUpdate

async def get_all_todos(db: AsyncSession):
    result = await db.execute(select(ToDo))
    return result.scalars().all()

async def create_todo(db: AsyncSession, todo_data: ToDoCreate):
    todo = ToDo(**todo_data.dict())
    db.add(todo)
    await db.commit()
    await db.refresh(todo)
    return todo

async def update_todo(db: AsyncSession, todo_id: int, todo_data: ToDoUpdate):
    result = await db.execute(select(ToDo).where(ToDo.id == todo_id))
    todo = result.scalar_one_or_none()

    if not todo:
        return None

    for key, value in todo_data.model_dump(exclude_unset=True).items():
        print(key," := ", value)
        setattr(todo, key, value)

    await db.commit()
    await db.refresh(todo)
    return todo

async def delete_todo(db: AsyncSession, todo_id: int):
    result = await db.execute(select(ToDo).where(ToDo.id == todo_id))
    todo = result.scalar_one_or_none()

    if not todo:
        return None

    await db.delete(todo)
    await db.commit()
    return todo
