import os
import random


FOLDER_PATH = "../images"

def find_car_image(car_brand, car_model):
    # Construct the folder path based on the car brand
    folder_path = os.path.join(FOLDER_PATH, car_brand)
    
    # Check if the folder exists
    if not os.path.exists(folder_path):
        print(f"No folder found for brand: {car_brand}")
        return None
    
    # Construct the expected filename pattern
    expected_pattern = f"{car_brand}-{car_model}"
    
    # List all files in the specified folder
    files = os.listdir(folder_path)
    
    # Search for the matching file
    for filename in files:
        # Check if the filename starts with the expected pattern
        if filename.startswith(expected_pattern):
            # Return the full path of the matched file
            return os.path.join(folder_path, filename)
    
    # If no match is found, return a random file from the folder
    if files:
        return os.path.join(folder_path, random.choice(files))
    
    # If the folder is empty, return None
    return None

# Example usage
car_brand = "bmw"
car_model = "530i-xdrive"

image_path = find_car_image(car_brand, car_model)
if image_path:
    print(f"Image found: {image_path}")
else:
    print("No images available.")