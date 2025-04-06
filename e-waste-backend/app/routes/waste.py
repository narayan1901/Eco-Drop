from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import crud, schemas

router = APIRouter(prefix="/waste", tags=["Waste"])

@router.post("/", response_model=schemas.WasteResponse)
def create_waste(waste: schemas.WasteCreate, db: Session = Depends(get_db)):
    return crud.create_waste(db, waste)