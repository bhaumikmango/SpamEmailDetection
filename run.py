import pickle
f=open('file.pkl', 'rb')
predictor=pickle.load(f)
res=predictor.predict(input)
if res[1]==1:
    print('Spam')
else:
    print('Not spam')