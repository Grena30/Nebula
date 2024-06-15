import os
import random


FOLDER_PATH = "../images"

def find_car_image(car_brand, car_model):
    folder_path = os.path.join(FOLDER_PATH, car_brand)
    
    if not os.path.exists(folder_path):
        print(f"No folder found for brand: {car_brand}")
        return None
    
    expected_pattern = f"{car_brand}-{car_model}"
    
    # List all files in the specified folder
    files = os.listdir(folder_path)
    
    # Search for the matching file
    for filename in files:
        # Check if the filename starts with the expected pattern
        if filename.startswith(expected_pattern):
            return os.path.join(folder_path, filename)
    
    if files:
        return os.path.join(folder_path, random.choice(files))
    
    return None

# Example usage
car_brand = "bmw"
car_model = "530i-xdrive"

image_path = find_car_image(car_brand, car_model)
if image_path:
    print(f"Image found: {image_path}")
else:
    print("No images available.")