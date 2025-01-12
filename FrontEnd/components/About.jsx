import { useContext } from 'react'
import Navbar from './Navbar'
import Context from '../Context/ContextInit'

const About = () => {
  const context = useContext(Context);
  const { ref } = context;
  return (
    <>
      <Navbar />
      <div className='px-10 py-20 text-justify bg-white' ref={ref}>
        Our Spam Email Detection System uses advanced machine learning techniques to automatically classify emails as spam or not spam based on their content. The system leverages the power of the Naive Bayes algorithm, a proven method for text classification tasks, to accurately detect unwanted or unsolicited emails.
        <br /><br />
        Built on a robust pipeline, the project starts with text preprocessing, where email content is transformed into numerical features using CountVectorizer. The processed data is then used to train the model, which is evaluated on critical metrics like precision, recall, and F1-score.
        <br /><br />
        Once the model is trained, it is deployed on Vercel as a serverless function, allowing real-time predictions for incoming emails through a simple API. Users can seamlessly interact with the system through a user-friendly frontend, which allows them to submit email text for classification.
        <br /><br />
        This project provides an efficient, scalable solution for email classification, and can be easily extended to incorporate advanced machine learning models or additional features for improved accuracy. Whether you're looking to filter spam or improve email management, our detection system offers a reliable and quick way to identify unwanted emails.
      </div>
    </>
  )
}

export default About