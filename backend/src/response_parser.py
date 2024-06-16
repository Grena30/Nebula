import iso4217parse
import re


def parse_response(response):
    pattern = re.compile(r"<(.*?)>(.*?)</\1>", re.DOTALL)
    matches = pattern.findall(response)
    car_list = []
    current_car = {}

    for tag, value in matches:
        tag = tag.strip()
        value = value.strip()
        if tag == 'brand' and current_car:
            car_list.append(current_car)
            current_car = {}
        current_car[tag] = value

    if current_car:
        car_list.append(current_car)
    return car_list
