import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full rounded-xl" />
    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform -translate-y-1/2 left-0 right-5 top-1/2">
     <div className='space-y-4 w-1/3 pl-12'>
        <h2 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <button className="btn bg-orange-600 border-none text-white ">Discover More</button>
        <button className="btn btn-outline btn-error ml-5">Latest Project</button>
     </div> 
     
   
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="bg-orange-600  text-white border-none ml-2 btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2}className="w-full rounded-xl" />
    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform -translate-y-1/2 left-0 right-5 top-1/2">
     <div className='space-y-4 w-1/3 pl-12'>
        <h2 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <button className="btn bg-orange-600 border-none text-white ">Discover More</button>
        <button className="btn btn-outline btn-error ml-5">Latest Project</button>
     </div> 
     
   
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="bg-orange-600  text-white border-none ml-2 btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3}className="w-full rounded-xl" />
    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform -translate-y-1/2 left-0 right-5 top-1/2">
     <div className='space-y-4 w-1/3 pl-12'>
        <h2 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <button className="btn bg-orange-600 border-none text-white ">Discover More</button>
        <button className="btn btn-outline btn-error ml-5">Latest Project</button>
     </div> 
     
   
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn bg-orange-600  text-white border-none ml-2  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} className="w-full rounded-xl" />
    <div className="absolute rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform -translate-y-1/2 left-0 right-5 top-1/2">
     <div className='space-y-4 w-1/3 pl-12'>
        <h2 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h2>
        <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
        <button className="btn bg-orange-600 border-none text-white ">Discover More</button>
        <button className="btn btn-outline btn-error ml-5">Latest Project</button>
     </div> 
     
   
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn bg-orange-600  text-white border-none ml-2  btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;