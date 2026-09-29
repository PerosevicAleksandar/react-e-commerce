import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginPage/LoginForm';

function LoginPage() {
    return(
        <div>
            <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-6">
                <div className="text-sm md:text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/register">Login</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold py-6'>Login</h1>
                    <LoginForm />
                </div> 
            </div>
        </div>
    )
}

export default LoginPage;