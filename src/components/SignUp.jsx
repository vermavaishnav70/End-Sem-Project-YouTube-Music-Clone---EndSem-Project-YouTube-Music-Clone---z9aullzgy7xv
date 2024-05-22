import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function InputField({ label, type, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col justify-center p-1 mt-3 rounded-xl bg-black bg-opacity-0 text-neutral-500">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                aria-label={label}
                className="justify-center items-start px-3 py-4 bg-white rounded-md border border-solid border-stone-300 max-md:pr-5"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const nav = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name: name, email: email, password: password, appType: 'music' };
        try {
            const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'projectID': 'z9aullzgy7xv',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (result.status === 'success') {

                nav('/signin');
            }
            else {
                alert(result.message);
                nav('/signin');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse({ error: 'Failed to sign up. Please try again.' });
        }
    };


    return (
        <div className="flex flex-col justify-center py-20 bg-black min-h-screen">
            <main className="flex justify-center items-center px-16 py-20 mt-16 w-full bg-black bg-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <section className="px-9 py-8 mt-7 rounded-2xl bg-zinc-600 w-[814px] bg-opacity-70 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://s3-alpha-sig.figma.com/img/3f13/f45e/752db8f22839e06d0ea07ec6b4dae04a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAxkcJE8CM8soM5yJd-7OK7MXp0VwT7IhixC4I3HJjJTqFPVq7iEmMQqMVopygV5vISazTN0kFvZw2s9j1uHVSdddNuS9Bryi2wPYrT2YNUN2C8Qif1LR5cou7us1K-6gcnPujeoRn-YHl1OnZLbbpx90Eis7L-lJ66epAPQQpZRO0mjfNef~Mi0YXTrmipmfkr4ha3Vw08ekYEMaKN6WSriMDeMI8iNoVSOxvGXxl67RPpLDuwjQJ-LkPXfzgCTJ01PNOgvxz0PGb9kIGW4~68vaWDKjXSOBW5ErzU0VjRfCtONbivkCGP-DEV1uDCZxY8zu98XkhjW4jzBUEkxdw__"
                                    alt="Account creation icon"
                                    className="aspect-[0.97] w-[33px]"
                                />
                                <h1 className="mt-9 text-2xl text-white">Create an account</h1>
                                <div className="flex gap-1.5 mt-48 text-sm max-md:mt-10">
                                    <p className="grow text-neutral-400"> Already Have an account? </p>
                                    <Link to="/signin" replace={true} className="text-blue-500">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <form className="flex flex-col grow mt-14 text-xs max-md:mt-10" onSubmit={handleSubmit}>
                                <InputField
                                    label="Enter name"
                                    type="text"
                                    id="nameInput"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <InputField
                                    label="Enter Email"
                                    type="email"
                                    id="emailInput"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputField
                                    label="Enter Password"
                                    type="password"
                                    id="passwordInput"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex flex-col justify-center self-end px-px py-1 mt-8 text-xs text-blue-200 whitespace-nowrap bg-black bg-opacity-0 w-[75px]">
                                    <button type="submit" className="justify-center items-start px-4 py-3 bg-blue-700 rounded-2xl border border-indigo-300 border-solid max-md:pr-5">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            {response && <div className="text-white">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default SignUp;