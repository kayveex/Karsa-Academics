import { useForm, Link } from '@inertiajs/react';

export default function Topbar({ setIsSidebarOpen }) {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
    };

    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-4">
                <button 
                    className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <i className="ri-menu-line text-xl"></i>
                </button>
                
                {/* Breadcrumb replacement for Semester view */}
                <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <Link href="/dashboard" className="hover:text-sky-500 transition-colors flex items-center gap-1">
                        <i className="ri-home-line text-lg"></i>
                    </Link>
                    <i className="ri-arrow-right-s-line text-slate-400"></i>
                    <span className="text-slate-900 dark:text-white font-semibold">Dashboard Utama</span>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                {/* <div className="relative w-64 hidden sm:block">
                    <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
                    <input 
                        className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-sky-500/50 transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400" 
                        placeholder="Cari sesuatu..." 
                        type="text"
                    />
                </div> */}
                
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative transition-colors">
                    <i className="ri-notification-3-line text-xl"></i>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
                
                <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                    <i className="ri-settings-4-line text-xl" title="Settings"></i>
                </button>

                <button 
                    onClick={handleLogout}
                    className="ml-2 p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Log out"
                >
                    <i className="ri-logout-box-r-line text-xl"></i>
                </button>
            </div>
        </header>
    );
}
