import iso4217parse
import re


def parse_response(response):
    parsed_response = {}

    car_key = None
    for row in response.split("\n"):
        if row.startswith("##"):
            row = row.replace("<brand>", "").replace("</brand>", "").strip()
            key = row.replace("##", "").strip()
            parsed_response[key] = {}
            car_key = key
        elif row.startswith("<"):
            spec_key = row.split("<")[1].split(">")[0]
            spec_value = row.split(">")[1].split("<")[0].strip()

            if spec_key == "price" and spec_value != "N/A" and spec_value != "Not available":
                currency_symbol = re.search(r'[^\d.,]', spec_value).group()
                currency_amount = re.sub(r'[^\d.]', '', spec_value)

                if currency_symbol == "$":
                    currency_symbol = "USD"
                else:
                    currency_symbol = iso4217parse.parse(currency_symbol)[0].alpha3

                spec_value = currency_symbol + " " + currency_amount

            parsed_response[car_key][spec_key] = spec_value

    return parsed_response
