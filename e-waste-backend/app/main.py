
from fastapi import FastAPI
from app.routes import users, waste
from app.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router)
app.include_router(waste.router)

@app.get("/")
def read_root():
    return {"message": "E-Waste Management API is running"}
# from app.database import engine
# from app import models

# models.Base.metadata.create_all(bind=engine)
