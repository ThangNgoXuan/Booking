import React from 'react'

const Login = () => {
    return (
        <div className="login">
            <form>
                <h1>Đăng nhập</h1>
                <input type="email" className="email" placeholder="Địa chỉ email" />
                <input type="text" className="password" placeholder="Mật khẩu"/>
                <button>Đăng nhập</button>
                <p>Quên mật khẩu? <span>Nhấn vào đây</span> <br />
                Bạn chưa có tài khoản BookingHotel<span>Đăng ký</span> <br />
                Hoặc
                </p>
                <input type="text" placeholder="Đăng nhập với Facebook" />
                <input type="text" placeholder="Đăng nhập với Facebook" />
            </form>
        </div>
    )
}

export default Login
