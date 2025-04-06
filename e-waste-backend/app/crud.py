from sqlalchemy.orm import Session
from app import models, schemas

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(name=user.name, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_waste(db: Session, waste: schemas.WasteCreate):
    db_waste = models.WasteItem(**waste.dict())
    db.add(db_waste)
    db.commit()
    db.refresh(db_waste)
    return db_waste

