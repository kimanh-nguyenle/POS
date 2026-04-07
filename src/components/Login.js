import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // 👉 MOCK LOGIN (KHÔNG GỌI API)
    if (username === 'admin' && password === '222444') {
      const mockEmployee = {
        id: 1,
        full_name: 'Admin',
        username: 'admin'
      };

      const mockToken = 'mock-token-123';

      localStorage.setItem('pos_token', mockToken);
      localStorage.setItem('employee', JSON.stringify(mockEmployee));

      onLogin(mockEmployee, mockToken);
    } else {
      setError('Đăng nhập thất bại');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl bg-white grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-10 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-8 text-sm font-medium">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
              POS Management
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-4">
              Chào mừng trở lại 👋
            </h1>

            <p className="text-indigo-100 leading-7 text-base">
              Đăng nhập để quản lý đơn hàng, doanh thu và hoạt động bán hàng của cửa hàng.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-indigo-100 mt-1">Hỗ trợ liên tục</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-indigo-100 mt-1">Bảo mật dữ liệu</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-10 lg:p-12 flex items-center justify-center bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-8 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mx-auto md:mx-0 mb-4 shadow-lg">
                P
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Đăng nhập hệ thống POS
              </h2>

              <p className="text-slate-500 text-sm">
                Vui lòng nhập tài khoản và mật khẩu của bạn.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 font-medium">
                {error}
              </div>
            )}

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username
              </label>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Nhập username"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 font-semibold transition duration-200 shadow-lg shadow-indigo-500/30"
            >
              Đăng nhập
            </button>

            <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600">
              <div className="font-semibold text-slate-800 mb-1">Tài khoản demo</div>
              <div>Username: admin</div>
              <div>Password: 222444</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
