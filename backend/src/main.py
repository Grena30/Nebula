import cohere 
import dotenv

config = dotenv.dotenv_values()

co = cohere.Client(
  api_key=config['API_KEY'], # This is your trial API key
) 

# Prompt structure: 
# Given that I want a car with the following specifications, give me a list of cars that have these specifications.
# Additionally I would like to add:

def llm_prompt(car_filters, additional=None):
  prompt_message = "Given that I want a car with the following specifications, give me a list of cars that have these specifications. Specifications:\n"
  for k, v in car_filters.items():
    prompt_message += f"{k}: {v}\n"

  if (additional != None):
    prompt_message += "Additionally I would like to add: " + additional + ".\n"

  prompt_message += "Give me the details for each car following this structure:\n"
  # prompt_message += "Full Name, Price (only in american dollars),  Manufacturing year, Drive system, Transmission, Perfomance (acceleration 0-100), Range (maximum range), Additional info.\n"
  prompt_message += "<brand> Insert full name, model here</brand>"
  prompt_message += "<model> Insert model here</model>"
  prompt_message += "<body type> Insert body type here</body type>"
  prompt_message += "<manufacturing year> Insert manufacturing year here</manufacturing year>\n"
  prompt_message += "<class> Insert class here</class>"
  prompt_message += "<price> Insert here price </price>"
  prompt_message += "<powertrain> Insert powertrain here</powertrain>\n"
  prompt_message += "<drive system> Insert drive system here</drive system>\n"
  prompt_message += "<transmission> Insert transmission type here</transmissison>\n"
  prompt_message += "<perfomance> Insert performance from 0-100 in seconds here</perfomanec>\n"
  prompt_message += "<range> Insert range for consumption here</range>\n"
  prompt_message += "<additional> Insert any additional info here</additional>\n"
  prompt_message += "Important if you cannot specify exactly one category then approximate or give a range of values instead of not available. If you have any additional info for each car add the rest of the info to the additional part if not then leave empty\n"
  prompt_message += "Important look up cars manufacturer website for the most accurate information\n"
  prompt_message += "If you cannot find the price and random one, but don't specify whether it is random\n"
  prompt_message += """Here is an example:
  <brand>Brand: BMW</brand>
  <model>Model: 530i xDrive</model>
  <body type>Body Type: Sedan</body type>
  <manufacturing year>Manufacturing Year: 2024</manufacturing year>
  <class>Class: Luxury</class>
  <price>Price: $ 57 000</price>
  <powertrain>Powertrain: Petrol</powertrain>
  <drive system>Drive System: AWD</drive system>
  <transmission>Transmission: Automatic</transmission>
  <performance>Performance: 0-100 km/h in seconds</performance>
  <range>Range: 450 mi</range>
  <additional>Additional: suitable for 2 kids family</additional>
"""
  print(prompt_message)
  stream = co.chat_stream( 
    model='command-r-plus',
    message=prompt_message,
    temperature=0.3,
    chat_history=[],
    prompt_truncation='AUTO',
    connectors=[{"id":"web-search"}]
  ) 

  for event in stream:
    if event.event_type == "text-generation":
      print(event.text, end='')


car_filters = {"Brand": "Honda"}
additional = "Suitable for 2 kids"
llm_prompt(car_filters, additional)