import json
import cohere 
import dotenv
from src.response_parser import parse_response

config = dotenv.dotenv_values()

co = cohere.Client(
  api_key=config['API_KEY'],
) 

# Prompt structure: 
# Given that I want a car with the following specifications, give me a list of cars that have these specifications.
# Additionally I would like to add:

def llm_prompt(car_filters, additional=None):
  prompt_message = "Given that I want a car with the following specifications, give me a list of 10 cars that have these specifications. Specifications:\n"
  for k, v in car_filters.items():
    prompt_message += f"{k}: {v}\n"

  if (additional != None):
    prompt_message += "Additionally I would like to add: " + additional + ".\n"

  prompt_message += "Give me the details for each car following this structure:\n"
  # prompt_message += "Full Name, Price (only in american dollars),  Manufacturing year, Drive system, Transmission, Perfomance (acceleration 0-100), Range (maximum range), Additional info.\n"
  prompt_message += "<brand> Insert brand name here</brand>\n"
  prompt_message += "<model> Insert model name here</model>\n"
  prompt_message += "<body type> Insert body type here</body type>\n"
  prompt_message += "<manufacturing year> Insert manufacturing year here</manufacturing year>\n"
  prompt_message += "<class> Insert class here</class>\n"
  prompt_message += "<price> Insert here price </price>\n"
  prompt_message += "<powertrain> Insert powertrain here</powertrain>\n"
  # prompt_message += "<drive system> Insert drive system here</drive system>\n"
  # prompt_message += "<transmission type> Insert transmission type here</transmissison type>\n"
  # prompt_message += "<perfomance> Insert performance from 0-100 in seconds here</perfomanec>\n"
  # prompt_message += "<range> Insert range for consumption here</range>\n"
  prompt_message += "<additional> Insert non-technical details with an intriguing pitch about the car</additional>\n"
  # prompt_message += "<pros and cons> Insert popular pros and cons of this car</pros and cons>\n"
  # prompt_message += "Important if you cannot specify exactly one category then approximate or give a range of values instead of not available. If you have any additional info for each car add the rest of the info to the additional part if not then leave empty\n"
  prompt_message += "Important! look up cars manufacturer website, or official dealer data for the most accurate information, search different kind of sources in order to find all the information\n"
  # prompt_message += "Important rule! If you cannot find the price in dollars do not show the car and respect the customer price ranges\n"
  prompt_message += """Here is an example:
  <brand>Brand: BMW</brand>
  <model>Model: series5-sedan</model>
  <body type>Body Type: Sedan</body type>
  <manufacturing year>Manufacturing Year: 2024</manufacturing year>
  <class>Class: Luxury</class>
  <price>Price: $ 57 000</price>
  <powertrain>Powertrain: Petrol</powertrain>
"""
  print(prompt_message)
  stream = co.chat_stream( 
    model='command-nightly',
    message=prompt_message,
    temperature=0.3,
    chat_history=[],
    prompt_truncation='AUTO',
    connectors=[{"id":"web-search"}]
  ) 

  result = ""
  for event in stream:
    if event.event_type == "text-generation":
      result += event.text
  return result    

if __name__ == "__main__":
  car_filters = {"Body Type": "Sedan"}
  additional = "I want a economic car for city that will not exceed 50 000 dollars"
  data=llm_prompt(car_filters)
  parsed_data=parse_response(data)

