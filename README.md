# Spam Email Detection using Naive Bayes

This project implements a **spam email detection system** using the **Naive Bayes** classification technique. The system preprocesses email text data, vectorizes it, and classifies emails as **spam** or **not spam** based on their content. The model is trained and deployed as a serverless function on **Vercel**, providing an API that can classify new emails in real-time.

## Project Overview

The goal of this project is to detect spam emails from non-spam emails using machine learning techniques, specifically the **Multinomial Naive Bayes** classifier.

### Key Steps Involved:

1. **Text Preprocessing**: 
   - The raw email text is processed using **CountVectorizer** from **Scikit-learn** to convert the text into numerical features (bag-of-words representation).

2. **Model Training**: 
   - The **Multinomial Naive Bayes** classifier is trained on the processed text data to classify whether an email is spam or not.

3. **Model Evaluation**: 
   - The model's performance is evaluated using precision, recall, and F1-score to assess how well it identifies spam and non-spam emails.

4. **Deployment**:
   - The trained model is saved as a `.pkl` file, deployed using **Vercel** as a serverless function. The API can classify incoming emails sent through the frontend interface.

---

## Setup Instructions

### 1. **Prerequisites**
> [!NOTE]
Make sure you have the following installed:

- Python 3.8
- `pip` for package management
- **Node.js** and **npm**

### 2. **Install Dependencies**

To run the backend locally or set up a serverless function, install the necessary Python packages:
Create a `requirements.txt` file.

### 3. **Train the Model**

- First, train the Naive Bayes model and save it to a `.pkl` file.

### 4. **Backend API**

The backend is a **Flask** app (or serverless function on Vercel) that loads the trained model and vectorizer to classify incoming email texts.


### 5. **Deploy on Vercel**

To deploy the model on Vercel:

1. Create a directory for your serverless function, e.g., `api/spam_detection.py`.
2. In the `vercel.json` file, configure the function runtime. 
3. Deploy using the Vercel CLI.

### 6. **Frontend Integration**

The frontend allows users to input email text for classification. The frontend makes a POST request to the API for classification.


## Model Evaluation

After training, the model's performance was evaluated using the following metrics:

- **Precision**: The ratio of correctly predicted spam emails to all predicted spam emails.
- **Recall**: The ratio of correctly predicted spam emails to all actual spam emails.
- **F1-Score**: The harmonic mean of precision and recall, providing a balanced measure of performance.

---

## Future Improvements

- **Advanced Models**: Experimenting with more complex models like **Logistic Regression**, **SVM**, or **Deep Learning** (e.g., LSTM or BERT) to potentially improve classification accuracy.
- **Additional Features**: Incorporating features like email metadata (subject line, sender info) for better classification.
- **UI Enhancements**: Improving the frontend user interface for better interaction and experience.

---

## Conclusion

This project demonstrates a simple yet efficient method for detecting spam emails using machine learning techniques. By utilizing a **Multinomial Naive Bayes** classifier and deploying the model as a serverless function on **Vercel**, this system is capable of classifying emails as spam or not spam in real-time.

If you found this project insightful, feel free to give it a star on GitHub!

