import React from 'react';
import '../Componants/Style.css'
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons

export default function Login() {
    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" >
                        <div className="card-body">
                            <h1 className="text-center">Login</h1>
                            <form>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder="Password" required />
                                </div>
                                <a class="Wk9 CCY S9z eEj kVc xQ4 uCz iyn" href="/password/reset/" rel="">Forgot your password?</a>
                                <button aria-label="" class="btn btn-primary mt-3" type="submit"> Log in</button>
                            </form>
                            <div className="mt-3 d-flex text-center">
                                <button className="btn btn-danger mr-2 me-4">
                                    <FaGoogle className="mr-1" /> Log in with Google
                                </button>
                                <button className="btn btn-primary">
                                    <FaFacebook className="mr-1" /> Log in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
