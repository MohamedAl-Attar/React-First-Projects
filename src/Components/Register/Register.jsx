import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form style={{ border: "1px solid black" }} className="d-flex flex-column align-items-center p-5 w-50 mx-auto mt-5 " onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-column" style={{ marginTop: '30px' }}>
                <label style={{ marginBottom: '10px' }} htmlFor="Email">Email</label>
                <input type="text" placeholder="example@test.com" id="Email"{...register("userEmail", { required: true , pattern:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} />
                {errors?.userEmail?.type === 'required' && <span className="text-danger">This field is required</span>}
                {errors?.userEmail?.type === 'pattern' && <span className="text-danger">invalid email</span>}
            </div>

            <div className="d-flex flex-column" style={{ marginTop: '30px' }}>
                <label style={{ marginBottom: '10px' }} htmlFor="Password">Password</label>
                <input type='password' id="Password" {...register("password", { required: true , pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{1,}$/, minLength: 6 })} />
                {errors?.password?.type === "required" && <span className="text-danger">This field is required</span>}
                {errors?.password?.type === "pattern" && <span className="text-danger">your password must include atleast 1 letter and 1 number</span>}
                {errors?.password?.type === "minLength" && <span className="text-danger">Password is to short</span>}
            </div>

            <div className="d-flex flex-column" style={{ marginTop: '30px' }}>
                <label style={{ marginBottom: '10px' }} htmlFor="PasswordConf">Password Confirmation</label>
                <input type='password' id="PasswordConf" {...register("passwordConf", { required: true ,  validate:(val)=>{
                            if(watch('password')!==val){
                                return "not found" 
                            }
                        } })} />
                {errors?.passwordConf?.type === 'required' && <span className="text-danger">This field is required</span>}
                {errors?.passwordConf?.type === 'validate' && <span className="text-danger">password doesn't match</span>}
            </div>

            <div className="d-flex flex-column mt-3">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="d-flex mt-3">
                <input {...register("checkbox" , { required: true }) } type="checkbox" style={{ width: '18px', marginRight: '5px' }} />
                <label htmlFor="checkbox">By Checking you are Accepting <Link>terms and conditions</Link> </label>
            </div>
            {errors.checkbox && <span className="text-danger">You have to accept terms and conditions</span>}


            <div className="d-flex flex-column" style={{ marginTop: '30px' }}>
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
        </form>
    );
}

export default Register