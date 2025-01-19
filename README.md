# Spam Email Detection using Naive Bayes

This project implements a **spam email detection system** using the **Naive Bayes** classification technique. The system preprocesses email text data, vectorizes it, and classifies emails as **spam** or **not spam**. The app made is deployed on **Vercel**, offering a user-friendly interface accessible anytime, anywhere.

---

## Project Overview

The primary objective of this project is to identify spam emails from non-spam emails using machine learning, specifically the **Multinomial Naive Bayes** classifier.

---

## Tech Stack Used

- **Backend**: Flask (Python framework for web development)  
- **Frontend**: React.js (JavaScript library for building UIs) and Tailwind CSS (A utility-first CSS framework)

---

## Key Steps Involved

1. **Text Preprocessing**  
   - Raw email text is processed using **CountVectorizer** from **Scikit-learn**, converting text data into numerical features (bag-of-words representation).

2. **Model Training**  
   - The **Multinomial Naive Bayes** classifier is trained on the processed text data to classify emails as spam or not spam.

3. **Model Evaluation**  
   - The model's performance is evaluated using key metrics: precision, recall, and F1-score.

---

## Model Evaluation

The model was evaluated on a test dataset using the following metrics:

- **Precision**: Measures the proportion of correctly predicted spam emails out of all predicted spam emails.
- **Recall**: Measures the proportion of correctly predicted spam emails out of all actual spam emails.
- **F1-Score**: The harmonic mean of precision and recall, providing a balanced measure of classification performance.

---

## Future Improvements

- **Advanced Models**: Explore other machine learning techniques like **Logistic Regression**, **SVM**, or **Deep Learning** models (e.g., **LSTM**, **BERT**) to improve classification accuracy.
- **Additional Features**: Include features such as email metadata (e.g., subject lines, sender information) for better predictions.
- **UI Enhancements**: Enhance the frontend interface for a more interactive and user-friendly experience.

---

## Conclusion

This project demonstrates an effective approach to detecting spam emails using a **Multinomial Naive Bayes** classifier. It highlights the importance of preprocessing and model evaluation in building a reliable classification system. With its real-time email classification capabilities, this system provides a practical solution for email filtering.

---

## Links

- https://spam-email-detection-bhaumiks-projects-006c20ba.vercel.app/
- https://spam-email-detection-git-main-bhaumiks-projects-006c20ba.vercel.app/

---

## Star This Project ⭐

If you found this project insightful, consider giving it a star on [GitHub](#)!
