import { useContext } from 'react'
import Navbar from './Navbar'
import Context from '../Context/ContextInit'
import { Link } from 'react-router';

const Contact = () => {
  const context = useContext(Context);
  const { ref } = context;
  return (
    <>
      <Navbar />
      <div className='px-10 py-20 text-center bg-white w-fit mx-auto' ref={ref}>
        <p>
          If you have any questions or feedback regarding the Spam Email Generator project, feel free to reach out!
        </p>
        <p>
          Connect with us on LinkedIn:
        </p>
        <div className="LinkedIns flex space-x-10 my-4 w-full justify-center">
          <div className="first">
            <Link to={"https://www.linkedin.com/in/theprofessional-bhaumik-yadav/"} target='blank'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="logo" className='w-40 hover:w-44 transition-all' />
            </Link>
            <p className='text-2xl font-semibold'>Bhaumik Yadav</p>
            <p className='text-sm'>(FrontEnd Developer)</p>
            <p></p>
          </div>
          <div className="second">
            <Link to={"https://www.linkedin.com/in/gaurav-joshi-b3b1322a8/"} target='blank'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="logo" className='w-40 hover:w-44 transition-all' />
            </Link>
            <p className='text-2xl font-semibold'>Gaurav Joshi</p>
            <p className='text-sm'>(FrontEnd Developer)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact