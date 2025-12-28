import { login } from './actions';
import { FormButton } from '@/components/form/FormButton';
import { FormInput } from '@/components/form/FormInput';


const AdminLogin = async () => {

  return (
      <main className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-md flex-1'> 
        <h1 className='mt-12 md:mt-24 mb-4 md:mb-8 text-center'>
          Přihlášení do Admin sekce
        </h1>
        <form className='flex flex-col gap-2'>
          <FormInput id="email" name="email" type="email" placeholder='name@example.com' required />
          <FormButton formAction={login}>Pokračovat s emailem</FormButton>
        </form>
      </main>
    )
}

export default AdminLogin