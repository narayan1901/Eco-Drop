# from pydantic import BaseSettings

# class Settings(BaseSettings):
#     DATABASE_URL: str

#     class Config:
#         env_file = ".env"

# settings = Settings()
# # app/config.py

# from pydantic_settings import BaseSettings

# class Settings(BaseSettings):
#     DB_HOST: str
#     DB_PORT: int
#     DB_USER: str
#     DB_PASSWORD: str
#     DB_NAME: str

#     class Config:
#         env_file = ".env"

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DB_HOST: str
    DB_PORT: int
    DB_USER: str
    DB_PASSWORD: str
    DB_NAME: str

    model_config = SettingsConfigDict(env_file=".env")

    @property
    def DATABASE_URL(self):
        return (
            f"mysql+pymysql://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )
settings = Settings()
