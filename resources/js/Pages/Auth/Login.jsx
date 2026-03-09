import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Login({ errors }) {
    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen bg-[#f5f7f8] dark:bg-[#101c22] flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
            <Head title="Log in" />

            {/* Watermark */}
            <div className="fixed -bottom-[5%] -right-[5%] text-[15rem] md:text-[20rem] font-black opacity-[0.03] pointer-events-none z-0 text-sky-500 select-none leading-none">
                KARSA
            </div>

            <div className="relative z-10 w-full max-w-md px-6 py-12">
                <div className="flex flex-col items-center mb-10">
                    <div className="bg-sky-500/10 p-4 rounded-xl mb-6 ring-1 ring-sky-500/20 transform transition hover:scale-105">
                        <i className="ri-graduation-cap-line text-sky-500 text-5xl"></i>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2 text-center">
                        Karsa Academics
                    </h1>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 text-sky-500 rounded-full text-xs font-bold uppercase tracking-wider">
                        <i className="ri-lock-line text-sm"></i>
                        Portal Login
                    </div>
                </div>

                <div className="relative group">
                    {/* Animated Glowing Border */}
                    <div className="absolute -inset-[1px] rounded-2xl overflow-hidden opacity-80 group-hover:opacity-100 transition duration-500">
                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#0ba5e9_100%)]"></div>
                    </div>

                    <div className="bg-white dark:bg-[#18262d] py-8 px-6 sm:px-10 shadow-2xl rounded-2xl relative overflow-hidden backdrop-blur-sm w-full h-full border border-slate-200 dark:border-gray-800">
                        {/* Decorative gradient blur */}
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute top-0 left-0 -ml-8 -mt-8 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                        <form className="space-y-6 relative" onSubmit={submit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 ml-1">
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm group-focus-within:text-sky-500 transition-colors">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                                        <i className="ri-mail-line text-slate-400 dark:text-gray-500 text-lg"></i>
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-12 pr-4 sm:text-sm border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition duration-150 ease-in-out py-3 outline-none"
                                        placeholder="yourmail@mail.com"
                                        required
                                    />
                                </div>
                                {errors.email && <p className="mt-2 text-sm text-red-500 ml-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-gray-300 ml-1">
                                    Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm group-focus-within:text-sky-500 transition-colors">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                                        <i className="ri-lock-password-line text-slate-400 dark:text-gray-500 text-lg"></i>
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-12 pr-4 sm:text-sm border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition duration-150 ease-in-out py-3 outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center ml-1">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-slate-300 dark:border-gray-700 rounded bg-slate-50 dark:bg-[#101c22]"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-gray-300">
                                        Ingat saya
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-sky-500 hover:text-sky-400 transition-colors">
                                        Lupa Password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full mt-4 flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-sky-500/25 text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-white dark:focus:ring-offset-[#18262d] transition duration-150 ease-in-out disabled:opacity-50 transform hover:scale-[0.98]"
                                >
                                    {processing ? 'Memuat...' : 'Masuk'}
                                    {!processing && <i className="ri-login-box-line"></i>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-8 text-slate-500 text-xs font-medium tracking-wide z-10 text-center w-full">
                &copy; {new Date().getFullYear()} DIGITAL KREASI GLOBAL (DIKSIGO)
            </footer>
        </div>
    );
}
