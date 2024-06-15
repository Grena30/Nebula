def parse_response(response):
    parsed_response = {}

    car_key = None
    for row in response.split("\n"):
        if row.startswith("##"):
            key = row.replace("##", "").strip()
            parsed_response[key] = {}
            car_key = key
        elif row.startswith("<"):
            spec_key = row.split("<")[1].split(">")[0]
            spec_value = row.split(">")[1].split("<")[0].strip()
            parsed_response[car_key][spec_key] = spec_value

    return parsed_response
