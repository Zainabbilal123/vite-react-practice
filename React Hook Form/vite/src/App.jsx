
import { useForm } from "react-hook-form"
function App() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log('submitting the data' , data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          First name:</label>
        <input  {...register("Firstname", { required: true , minLength:{value:3, message: 'min length atleast 3'},
          maxlength:{value:6, message:"max length atmost 6"}
        })} />
        {errors.Firstname && <p>{errors.Firstname.message}</p>}
       
      </div>
      <br></br>
      <div>
        <label>
          miidle name: </label>
          <input  {...register("Middle name")} />
        
      </div>
      <br></br>
      <div>
        <label>
         last name: </label>
         <input  {...register("Last name" , {
          pattern: {
            value: /^[A-Za-z]*$/,
            message:"last name is not as per rule"
          }
         }
         
         )} />
         {errors.Lastname && <p>{errors.Lastname.message}</p>}
       
      </div>
      <input type="submit"/>
    </form>
  )
}

export default App
