import { Link } from '@inertiajs/react';

export default function Sidebar({ user, isSidebarOpen, setIsSidebarOpen }) {
    return (
        <aside className={`fixed md:relative inset-y-0 left-0 z-50 w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-sky-500 p-1.5 rounded-lg flex items-center justify-center">
                        <i className="ri-graduation-cap-line text-white text-xl"></i>
                    </div>
                    <h1 className="text-l font-bold tracking-tight text-slate-900 dark:text-white">Karsa Academics</h1>
                </div>
                <button 
                    className="md:hidden text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg p-1 transition-colors"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <i className="ri-close-line text-2xl"></i>
                </button>
            </div>
            
            <nav className="flex-1 px-3 space-y-1">
                <div className="pb-2 px-3 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Main Menu</div>
                
                <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sky-500/10 text-sky-500 border-l-4 border-sky-500 group">
                    <i className="ri-home-9-line text-xl"></i>
                    <span className="font-medium">Home</span>
                </Link>

                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i className="ri-menu-add-fill text-xl"></i>
                    <span className="font-medium">Isi CP/TP</span>
                </Link>
                
                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i className="ri-table-line text-xl"></i>
                    <span className="font-medium">Daftar Nilai</span>
                </Link>
                
                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i className="ri-gitbook-line text-xl"></i>
                    <span className="font-medium">Master Data</span>
                </Link>
                
                <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i className="ri-group-fill text-xl"></i>
                    <span className="font-medium">Portal Siswa</span>
                </Link>
            </nav>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3 p-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md overflow-hidden">
                        {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">{user?.username || 'User'}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate capitalize">{user?.role || 'Teacher'}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
