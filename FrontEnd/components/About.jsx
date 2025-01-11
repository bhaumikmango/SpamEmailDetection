import { useContext } from 'react'
import Navbar from './Navbar'
import Context from '../Context/ContextInit'

const About = () => {
  const context = useContext(Context);
  const {ref} = context;
  return (
    <>
      <Navbar />
      <div className='px-10 py-20 text-justify bg-white' ref={ref}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eos totam officia libero labore voluptatem, sunt commodi vitae exercitationem quasi fuga laudantium obcaecati alias accusantium quod magnam beatae, perferendis assumenda molestiae debitis mollitia enim? Nesciunt totam perspiciatis dolorem veritatis quasi odit exercitationem necessitatibus obcaecati et. Id obcaecati a natus unde est laborum, aut ab voluptatem, quasi mollitia tempore ea maiores, vero exercitationem? Praesentium autem facilis ratione id sed temporibus reprehenderit aspernatur enim ad, necessitatibus quidem quas ex. Ratione perspiciatis autem nam eveniet at saepe laborum omnis veniam quisquam? Animi nihil, corporis accusamus cupiditate iste velit ex incidunt nobis quis adipisci, deserunt, eos maiores. Provident, tempore alias! Alias non distinctio dolorum iste obcaecati libero, odio quis voluptatum reiciendis ullam quas asperiores tempora atque fugiat doloremque nihil. Accusantium voluptatem enim aliquam delectus beatae nesciunt exercitationem. Ex necessitatibus doloribus non atque amet impedit omnis! Sequi fugit ducimus molestiae, consequuntur, dolorem ex recusandae doloremque porro quos asperiores provident deleniti enim est cumque vitae qui natus esse vero! A nam molestiae laudantium perspiciatis accusantium iure neque assumenda dolores amet accusamus ipsam unde quasi et cupiditate quia sapiente minima eveniet at, porro suscipit voluptas doloribus sint? Delectus labore culpa autem accusamus suscipit eveniet quia libero dolor.
      </div>
    </>
  )
}

export default About