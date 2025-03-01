from pymongo import MongoClient
import os
from dotenv import load_dotenv

print("Script started")

# Load environment variables
try:
    print("Attempting to load .env file")
    load_dotenv(dotenv_path="C:\\Users\\hp\\school-platform\\server\\.env")
    print(".env file loaded successfully")
except Exception as e:
    print(f"Error loading .env file: {str(e)}")
    exit(1)

# Connect to MongoDB
mongodb_uri = os.getenv('MONGODB_URI')
print(f"MONGODB_URI from .env: {mongodb_uri}")
if not mongodb_uri:
    print("MONGODB_URI not found in .env file. Using default connection string.")
    mongodb_uri = "mongodb://localhost:27017/moroccan_education_platform"

print(f"Connecting to MongoDB with URI: {mongodb_uri}")

try:
    client = MongoClient(mongodb_uri)
    db = client["moroccan_education_platform"]  # Database name
    institutions = db["institutions"]  # Collection name
    print("Connected to MongoDB successfully")
except Exception as e:
    print(f"Error connecting to MongoDB: {str(e)}")
    exit(1)

# Define sample data
institutions_data = [
    {
        "name": "University of Casablanca",
        "type": "University",
        "city": "Casablanca",
        "isPrivate": False,
        "fields": ["Computer Science", "Engineering", "Business"],
        "tuitionFee": 5000,
        "website": "http://www.uc.edu",
        "coordinates": {
            "lat": 33.5731,
            "lng": -7.5898
        }
    },
    {
        "name": "Rabat Business School",
        "type": "Business School",
        "city": "Rabat",
        "isPrivate": True,
        "fields": ["Business Administration", "Finance", "Marketing"],
        "tuitionFee": 15000,
        "website": "http://www.rbs.edu",
        "coordinates": {
            "lat": 34.0209,
            "lng": -6.8416
        }
    }
]

# Insert sample data
for institution in institutions_data:
    try:
        existing = institutions.find_one({"name": institution["name"]})
        if not existing:
            result = institutions.insert_one(institution)
            print(f"Inserted: {institution['name']} with ID: {result.inserted_id}")
        else:
            print(f"Skipped (already exists): {institution['name']}")
    except Exception as e:
        print(f"Error processing {institution['name']}: {str(e)}")

print("Script execution completed.")