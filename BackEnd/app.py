import pickle

# Load the model
with open('file.pkl', 'rb') as f:
    predictor = pickle.load(f)

# Input string
input_text = "hello there this is an input"

# Wrap the input string in a list
res = predictor.predict([input_text])  # Predictor expects an iterable

# Check the result
if res[0] == 1:  # Use res[0] because predict() returns an array
    print('Spam')
else:
    print('Not spam')
