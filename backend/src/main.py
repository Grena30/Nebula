import cohere 
import dotenv

config = dotenv.dotenv_values()

co = cohere.Client(
  api_key=config['API_KEY'], # This is your trial API key
) 

stream = co.chat_stream( 
  model='command-r-plus',
  message='give me a list of cars that have this specifications outputting all the information about them: body type: sedan powertrain: diesel features: 4wd',
  temperature=0.3,
  chat_history=[],
  prompt_truncation='AUTO',
  connectors=[{"id":"web-search"}]
) 

for event in stream:
  if event.event_type == "text-generation":
    print(event.text, end='')