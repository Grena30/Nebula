import requests
import json

url = "https://api.awanllm.com/v1/chat/completions" # Can also use /v1/completions endpoint

payload = json.dumps({
  "model": "Awanllm-Llama-3-8B-Dolfin",

  # Use messages for /chat/completions
  "messages": [
    {"role": "user", "content": """You are a car expert that knows any detail about any aspect of a car for cars dealerships and you need to describe cars to the customer based on the following client specifications, give me a list of cars that have these specifications. Specifications:
Brand: Honda
Additionally I would like to add: Suitable for 2 kids.
Give me the details for each car following this structure:
<brand> Insert full name, model here</brand><model> Insert model here</model><body type> Insert body type here</body type><manufacturing year> Insert manufacturing year here</manufacturing year>
<class> Insert class here</class><price> Insert here price </price><powertrain> Insert powertrain here</powertrain>
<drive system> Insert drive system here</drive system>
<transmission> Insert transmission type here</transmissison>
<perfomance> Insert performance from 0-100 in seconds here</perfomanec>
<range> Insert range for consumption here</range>
<additional> Insert any additional info here</additional>
Important! look up cars manufacturer website, or official dealer data for the most accurate information, search different kind of sources in order to find all the information
Here is an example:
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
  <additional>Additional: suitable for 2 kids family</additional>"""}
  ],
  # NOTE: Some models might not accept system prompts.

  # Use prompt for /completions
  "prompt": "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are an assistant AI.<|eot_id|><|start_header_id|>user<|end_header_id|>\n\nHello there!<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
  # NOTE: Make sure to use the suggested prompt format for each model when using completions. Example shown is Llama 3 Instruct format.

  # Most important parameters
  "repetition_penalty": 1.1,
  "temperature": 0.7,
  "top_p": 0.9,
  "top_k": 40,
  "max_tokens": 1024,
  "stream": True,

  # Extra parameters
  "seed": 0,
  "presence_penalty": 0.6,
  "frequency_penalty": 0.6,
  "dynatemp_range": 0.5,
  "dynatemp_exponent": 1,
  "smoothing_factor": 0.0,
  "smoothing_curve": 1.0,
  "top_a": 0,
  "min_p": 0,
  "tfs": 1, # Tail-Free Sampling.
  "eta_cutoff": 1e-4, # Eta Sampling. Adapts the cutoff threshold based on the entropy of the token probabilities
  "epsilon_cutoff": 1e-4, # Epsilon Sampling. Sets a simple probability threshold for token selection.
  "typical_p": 1,
  "mirostat_mode": 0, # The mirostat mode to use. Only 2 is currently supported.
  "mirostat_tau": 1, # The target "surprise" value that Mirostat works towards.
  "mirostat_eta": 1, # Learning rate for mirostat.
  "use_beam_search": False, # Whether to use beam search.
  "length_penalty": 1.0, # Penalize sequences based on their length. Used in beam search.
  "early_stopping": False, # Controls the stopping condition for beam search.
  "stop": [],
  "stop_token_ids": [],
  "include_stop_str_in_output": False,
  "ignore_eos": False,
  "logprobs": 5,
  "prompt_logprobs": 0,
  "custom_token_bans": [],
  "skip_special_tokens": True,
  "spaces_between_special_tokens": True,
  "logits_processors": []
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': f"Bearer 372e69ee-d04d-4554-ae75-cb451f263c0e"
}

response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)