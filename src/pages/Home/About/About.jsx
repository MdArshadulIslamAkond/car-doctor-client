import parson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-8 p-0">
          <div className='lg:w-2/5 relative'>
          <img
            src={parson}
            className="w-4/5 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 rounded-lg border-8 border-white shadow-2xl absolute right-0 top-1/2"
          />
          </div>
          <div className='lg:w-3/5 p-16'>
          <h3 className='font-bold text-xl text-[#ff3811]'>About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="pt-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="pt-5">
            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
            <button className="btn text-white hover:bg-[#ff3811] bg-[#ff3811] mt-8">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
