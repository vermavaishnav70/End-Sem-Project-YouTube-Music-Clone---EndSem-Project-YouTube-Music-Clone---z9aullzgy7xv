import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormInput({ label, type, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col justify-center p-1 mt-3 text-xs bg-black bg-opacity-0 text-neutral-400">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                aria-label={label}
                value={value}
                onChange={onChange}
                className="justify-center items-start px-3.5 py-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5"
            />
        </div>
    );
}

function MyComponent({setIsLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'https://academics.newtonschool.co/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'z9aullzgy7xv',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password, appType: 'music' }),
                }
            );
            const data = await response.json();
            if (data.status === 'success') {
                nav('/');
                setIsLogin(true);
            }
            else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col justify-center py-20 bg-black min-h-screen">
            <section className="flex justify-center items-center px-16 py-20 mt-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start px-8 pt-8 pb-5 mt-6 mb-1.5 max-w-full rounded-3xl bg-zinc-600 w-[814px]  bg-opacity-70 max-md:flex-wrap max-md:px-5">
                    <div className="flex flex-col self-start text-2xl text-white">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/3f13/f45e/752db8f22839e06d0ea07ec6b4dae04a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAxkcJE8CM8soM5yJd-7OK7MXp0VwT7IhixC4I3HJjJTqFPVq7iEmMQqMVopygV5vISazTN0kFvZw2s9j1uHVSdddNuS9Bryi2wPYrT2YNUN2C8Qif1LR5cou7us1K-6gcnPujeoRn-YHl1OnZLbbpx90Eis7L-lJ66epAPQQpZRO0mjfNef~Mi0YXTrmipmfkr4ha3Vw08ekYEMaKN6WSriMDeMI8iNoVSOxvGXxl67RPpLDuwjQJ-LkPXfzgCTJ01PNOgvxz0PGb9kIGW4~68vaWDKjXSOBW5ErzU0VjRfCtONbivkCGP-DEV1uDCZxY8zu98XkhjW4jzBUEkxdw__"
                            alt=""
                            className="aspect-square w-[34px]"
                        />
                        <div className="mt-7">Sign in</div>
                    </div>
                    <form className="flex flex-col self-end mt-14 max-md:mt-10" onSubmit={handleSubmit}>
                        <FormInput
                            label="Enter Your Email"
                            type="email"
                            id="emailInput"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormInput
                            label="Enter Your Password"
                            type="password"
                            id="passwordInput"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="flex gap-5 self-end mt-12 max-w-full w-[183px] max-md:mt-10">
                            <button className="my-auto text-xs text-white" type="button">

                                <Link to="/signup" className="text-blue-500">
                                    Create account
                                </Link>
                            </button>
                            <button
                                className="flex flex-col flex-1 justify-center px-1 py-1 text-xs text-indigo-200 whitespace-nowrap bg-black bg-opacity-0"
                                type="submit"
                            >
                                <div className="justify-center items-start px-5 py-3 bg-blue-700 rounded-2xl max-md:pr-5">
                                    Submit
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default MyComponent;