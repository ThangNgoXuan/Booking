const valid = ({fistname, lastname, email, phonenumber, password, cf_password}) => {
    const err = {}

    if(!fistname) {
        err.fistname = "Vui lòng nhập tên của bạn."
    } else if(fistname.length > 25) {
        err.fistname = "Tên của bạn không hợp lệ."
    }

    if(!lastname) {
        err.lastname = "Vui lòng nhập họ và tên đệm của bạn."
    }

    if(!email) {
        err.email = "Vui lòng nhập email của bạn."
    } else if (!validateEmail(email)) {
        err.email = "Email của bạn không hợp lệ."
    }

    if(!phonenumber) {
        err.phonenumber = "Vui lòng nhập số điện thoại của bạn."
    } else if(phonenumber.length !== 10 ) {
        err.phonenumber = "Số điện thoại của bạn không hợp lệ"
    }

    if(!password) {
        err.password = "Vui lòng nhập mật khẩu của bạn." 
    } else if (password.length < 16) {
        err.password = "Mật khẩu của bạn quá ngắn tối thiểu 16 kí tự."
    }

    if(!cf_password) {
        err.cf_password = "Vui lòng xác nhận mật khẩu."
    } else if (cf_password !== password) {
        err.cf_password = "Xác nhận mật khẩu không chính xác."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}

function validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

export default valid