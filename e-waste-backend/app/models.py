# from sqlalchemy import Column, Integer, String
# from app.database import Base

# class User(Base):
#     __tablename__ = "users"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, index=True)
#     email = Column(String, unique=True, index=True)
#     password = Column(String)

# class WasteItem(Base):
#     __tablename__ = "waste_items"

#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String, index=True)
#     category = Column(String, index=True)
#     description = Column(String)

from sqlalchemy import Column, Integer, String, ForeignKey, Date, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Followed by your model definitions...

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), index=True)
    email = Column(String(100), unique=True, index=True)
    password = Column(String(255))

    # Relationship to waste items
    waste_items = relationship("WasteItem", back_populates="user")


class WasteItem(Base):
    __tablename__ = "waste_items"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    item_name = Column(String(255), nullable=False)
    category = Column(String(100))
    quantity = Column(Integer, default=1)
    pickup_date = Column(Date)
    status = Column(String(50), default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship to user
    user = relationship("User", back_populates="waste_items")
