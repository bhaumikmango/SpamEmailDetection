import { useContext } from 'react'
import Navbar from './Navbar'
import Context from '../Context/ContextInit'

const Contact = () => {
  const context = useContext(Context);
  const {ref} = context;
  return (
    <>
    <Navbar/>
    <div className='px-10 py-20 text-justify bg-white' ref={ref}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui harum natus libero similique saepe sunt fuga enim temporibus sapiente eaque? Quaerat, molestias obcaecati sit error, non illo animi maxime natus explicabo alias nihil fugit perferendis sapiente nisi molestiae? Sed dolores labore laudantium magni. Magni sapiente, animi, perferendis illo sit laborum, illum dignissimos aliquam tenetur dolores veritatis! Rem recusandae exercitationem officiis, voluptatibus distinctio deserunt. Ea repudiandae, consequuntur voluptates facilis, magnam voluptatibus explicabo error velit aliquid itaque animi in voluptas. Aspernatur recusandae saepe officiis illo provident, odio tempora, quos minus, voluptatibus architecto modi. Consequuntur voluptatem voluptate nostrum, voluptates accusantium nobis nam ratione!
    </div>
    </>
  )
}

export default Contact