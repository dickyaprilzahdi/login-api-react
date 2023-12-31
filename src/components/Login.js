import React from 'react'

const Login = () => {
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="columns is-4-dekstop">
                            {/* From */}
                            <form className='box'>
                                <div className="field">
                                    <label className="label">Email atau username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder='Username' />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder='*********' />
                                    </div>
                                </div>

                                <div className="field">
                                    <button className='button is-success is-fullwidth'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;