import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLoginAuth } from '../../store/useLoginAuth';
import { isAuthenticated } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';
import '../auth/AuthStyle.scss';

const Login = () => {
    const { handleLogin, isLoading } = useLoginAuth();
    const username = useSelector((state) => state.login.user);
    const token = useSelector((state) => state.login.accessToken);
    const isAuth = useSelector(isAuthenticated);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData.email || !formData.password) {
            setError('Email and password are required.');
            return;
        }

        try {
            const responseData = await handleLogin(formData);
            console.log("login response",responseData)
            
            
            console.log("isauth",isAuth)
            console.log("token at jsx",token)

            if (responseData) {
                // navigate('/home');  // Navigate to the home page on successful login
            }
        } catch (err) {
            setError(err.message || 'An error occurred during login.');
        }
    };
    if (token) {
        console.log("token at if",token)
        navigate('/home');
    }

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                    <button type="button" className="btn btn-primary btn-floating mx-1">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/"
                                        className="link-danger">Register</a></p>
                                       
                                        <p>{token}</p>
                                </div>
                                {error && <div className="alert alert-danger mt-3">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
