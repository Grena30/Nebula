import json
import os


FOLDER_PATH = "../images"

def find_car_image(car_brand, car_model):
    folder_path = os.path.join(FOLDER_PATH, car_brand)
    
    if not os.path.exists(folder_path):
        print(f"No folder found for brand: {car_brand}")
        return None
    if car_brand.lower() == "mercedes-benz":
        print(car_model)
        trunc_pos = min(car_model.find(" "), car_model.find("-"))
        if trunc_pos == -1:
            trunc_pos = max(car_model.find(" "), car_model.find("-"))
        if trunc_pos != -1:
            car_model = car_model[:trunc_pos]
        car_model = car_model.replace(" ", "-").replace("-", "-")
        expected_pattern = f"{car_brand}-{car_model.upper()}.png"
    else:
        expected_pattern = f"{car_brand}-{car_model}"  
    print(expected_pattern)
    files = os.listdir(folder_path)
    
    # Search for the matching file
    for filename in files:
        # Check if the filename starts with the expected pattern
        if filename.startswith(expected_pattern):
            return os.path.join(folder_path, filename)
    
    # if files:
    #     return os.path.join(folder_path, random.choice(files))
    
    return None

# car_brand = "bmw"
# car_model = "series5"
for i in range(0, 9):
    with open ("example1.json", "r") as file:
        data = json.load(file)
        car_brand = data[i]["brand"].lower()
        car_model = data[i]["model"].lower().replace(" ", "") 
        print(car_brand, car_model)

    image_path = find_car_image(car_brand, car_model)
    if image_path:
        print(f"Image found: {image_path}")
    else:
        print("No images available.")