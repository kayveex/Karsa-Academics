import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import Sidebar from '../components/molecules/Sidebar';
import Topbar from '../components/molecules/Topbar';

export default function Dashboard({ user }) {
    const { post } = useForm();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-[#f5f7f8] dark:bg-[#101c22] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 relative overflow-hidden">
            <Head title="Dashboard" />
            
            {/* Watermark */}
            <div className="fixed -bottom-[5%] -right-[5%] text-[15rem] md:text-[20rem] font-black opacity-[0.03] pointer-events-none z-0 text-sky-500 select-none leading-none">
                KARSA
            </div>

            <div className="flex h-screen overflow-hidden relative z-10 w-full">
                {/* Mobile overlay */}
                {isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                {/* Separated Sidebar Component */}
                <Sidebar user={user} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                {/* Main Content Wrapper */}
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                    
                    {/* Separated Topbar Component */}
                    <Topbar setIsSidebarOpen={setIsSidebarOpen} />

                    {/* Main Scrollable Content */}
                    <main className="flex-1 overflow-y-auto p-8 bg-slate-50/50 dark:bg-transparent">
                        <div className="max-w-7xl mx-auto">
                            
                            <div className="relative group">
                                {/* Animated Glowing Border like Login */}
                                <div className="absolute -inset-[1px] rounded-3xl overflow-hidden opacity-80 group-hover:opacity-100 transition duration-500 pointer-events-none">
                                    <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#0ba5e9_100%)]"></div>
                                </div>

                                <div className="bg-white dark:bg-[#18262d] overflow-hidden shadow-2xl rounded-3xl border border-slate-200 dark:border-gray-800 mb-8 relative backdrop-blur-sm z-10">
                                    {/* Decorative gradient blur based on login */}
                                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
                                    <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

                                    <div className="absolute top-0 right-0 p-8 opacity-50 dark:opacity-50 pointer-events-none">
                                        <i className="ri-building-line text-9xl text-sky-500"></i>
                                    </div>
                                    <div className="p-8 sm:p-10 relative z-20">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-sky-500/10 rounded-2xl ring-1 ring-sky-500/20">
                                                <i className="ri-medal-fill text-sky-500 text-3xl"></i>
                                            </div>
                                            <h1 className="text-3xl font-extrabold sm:text-4xl text-slate-900 dark:text-white">
                                                Selamat Datang, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">{user?.username || 'User'}</span> 👋
                                            </h1>
                                        </div>
                                        <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl pl-1">
                                            Anda telah berhasil login menggunakan sistem UUID unik khusus. Berikut adalah ringkasan profil akademik Anda.
                                        </p>
                                        
                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="bg-slate-50 dark:bg-[#101c22] rounded-2xl p-6 border border-slate-100 dark:border-gray-800 relative group overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                                    <div className="p-2.5 bg-sky-500/10 rounded-xl">
                                                        <i className="ri-fingerprint-line text-sky-500 dark:text-sky-400 text-xl"></i>
                                                    </div>
                                                    <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">System UUID</p>
                                                </div>
                                                <p className="text-2xl font-black font-mono tracking-widest text-slate-900 dark:text-white relative z-10">{user?.id}</p>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-[#101c22] rounded-2xl p-6 border border-slate-100 dark:border-gray-800 relative group overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                                    <div className="p-2.5 bg-indigo-500/10 rounded-xl">
                                                        <i className="ri-shield-user-line text-indigo-500 dark:text-indigo-400 text-xl"></i>
                                                    </div>
                                                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Role</p>
                                                </div>
                                                <p className="text-2xl font-bold capitalize text-slate-900 dark:text-white relative z-10">{user?.role || 'Teacher'}</p>
                                            </div>
                                            <div className="bg-slate-50 dark:bg-[#101c22] rounded-2xl p-6 border border-slate-100 dark:border-gray-800 relative group overflow-hidden">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full pointer-events-none"></div>
                                                <div className="flex items-center gap-3 mb-3 relative z-10">
                                                    <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                                                        <i className="ri-mail-send-line text-emerald-500 dark:text-emerald-400 text-xl"></i>
                                                    </div>
                                                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Email Address</p>
                                                </div>
                                                <p className="text-lg font-bold truncate text-slate-900 dark:text-white relative z-10">{user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            
            <footer className="absolute bottom-4 left-64 md:left-[17rem] right-0 text-slate-500/50 text-[10px] font-bold tracking-widest z-0 text-left pointer-events-none">
                &copy; {new Date().getFullYear()} DIGITAL KREASI GLOBAL (DIKSIGO)
            </footer>
        </div>
    );
}
