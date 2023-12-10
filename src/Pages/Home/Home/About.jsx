import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
   <div className='w-1/2 relative'>
   <img src={person}className="w-3/4 rounded-lg  shadow-2xl" />
   <img src={parts}className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
   </div>
    <div className='w-1/2 space-y-4 '>
        <h4 className='text-xl text-orange-600 font-bold'>About Us</h4>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6 text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
      <p className=' text-gray-400'>
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn bg-orange-600 text-white">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;