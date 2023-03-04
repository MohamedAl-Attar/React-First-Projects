import { useForm } from "react-hook-form";

const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form style={{border : "1px solid black"}} className="d-flex flex-column align-items-center p-5 w-50 mx-auto mt-5 " onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-column" style={{marginTop:'30px'}}>
          <label style={{marginBottom:'10px'}} htmlFor="Email">Email</label>
          <input type="text" placeholder="example@test.com" id="Email"{...register("userEmail" , { required: true })} />
          {errors.userEmail && <span className="text-danger">This field is required</span>}
          </div>
          
          <div className="d-flex flex-column" style={{marginTop:'30px'}}>
          <label style={{marginBottom:'10px'}} htmlFor="Password">Password</label>
          <input type='password' id="Password" {...register("password", { required: true })} />
          {errors.password && <span className="text-danger">This field is required</span>}
          </div>
          <div className="d-flex flex-column" style={{marginTop:'30px'}}>
            <input className="btn btn-primary" type="submit" value="Log in" />
          </div>
        </form>
      );
}

export default LogIn