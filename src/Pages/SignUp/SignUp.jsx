import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const{createUser}=useContext(AuthContext)

    const handleSignIn=e=>{
        e.preventDefault();
        const form= e.target;
        const name=form.name.value;
        const email= form.email.value;
        const password= form.password.value;
       createUser(email,password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error)
       })
       
        
    }
    return (
        <div>
            <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
     <img src={login} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
      <h1 className="text-3xl font-bold text-center">Sign Up </h1>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input type="submit" value="SignUp" className="btn bg-orange-600 text-white" />
        </div>
        <p className='text-center my-4'>Already Have An Account?<Link to='/login' className='text-orange-600 font-bold'>Log In</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SignUp;