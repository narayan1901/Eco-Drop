from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

    class Config:
        from_attributes = True

class WasteCreate(BaseModel):
    name: str
    category: str
    description: str

class WasteResponse(WasteCreate):
    id: int

    class Config:
        from_attributes = True