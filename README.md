# Spam Email Detection using Naive Bayes

This repository contains a machine learning model for detecting spam emails using the Naive Bayes classification technique. The model preprocesses text data, vectorizes it using the CountVectorizer from Scikit-learn, and then classifies emails as spam or not spam using the Multinomial Naive Bayes model.

# Overview
The project implements a spam email detection system that can classify whether an email is spam or not based on its content. The main steps involved in the process include:
- Text Preprocessing: The raw email text is converted into numerical features using CountVectorizer from Scikit-learn.
- Model Training: The processed data is then fed into a Multinomial Naive Bayes classifier to train the model.
- Model Evaluation: After training, the model's performance is evaluated using metrics such as precision, recall, and F1-score.

This simple and efficient spam detection system works well on text data and can be extended or improved further by adding more features or using advanced models.
