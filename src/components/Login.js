import React from 'react';
export default function Login({ onLogin }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (username === 'admin' && password === '222444') {
      const mockEmployee = {
        id: 1,
        full_name: 'Admin',
        username: 'admin',
      };

      const mockToken = 'mock-token-123';

      localStorage.setItem('pos_token', mockToken);
      localStorage.setItem('employee', JSON.stringify(mockEmployee));

      onLogin(mockEmployee, mockToken);
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* Left side */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-600/90 to-violet-700/90 text-white relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-20 -left-10 w-56 h-56 bg-white/10 rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-8">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium">POS Management System</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-4">
              Chào mừng trở lại 
            </h1>
            <p className="text-indigo-100 text-lg leading-8 max-w-md">
              Đăng nhập để quản lý bán hàng, theo dõi đơn hàng và vận hành cửa hàng dễ dàng hơn.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-indigo-100 mt-1">Hỗ trợ liên tục</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-indigo-100 mt-1">Dữ liệu bảo mật</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="bg-white p-8 sm:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <div className="w-14 h-14 mx-auto lg:mx-0 mb-4 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                P
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Đăng nhập</h2>
              <p className="text-slate-500 mt-2">
                Nhập tài khoản để truy cập hệ thống POS
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập username"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300" />
                  Ghi nhớ đăng nhập
                </label>

                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Quên mật khẩu?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Đăng nhập
              </button>
            </form>

            <div className="mt-8 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-800 mb-1">Tài khoản demo</p>
              <p>Username: admin</p>
              <p>Password: 222444</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
