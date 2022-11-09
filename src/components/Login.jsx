import "./Login.css";

function Login() {
  return (
    <div className="w-full flex flex-col">
        <div className="w-full h-28 flex font-bluetea text-white bg-web-topBar justify-between items-center">
            <div className="pl-14">
                <a href="../index.html" className="text-5xl">SWEETDREAMS</a>
            </div>
            <div className="flex">
                <a href="../who/who.html" className="text-5xl mx-10">¿Quienes somos?</a>
                <a href="" className="text-5xl mx-10">Sign in</a>
                <a href="" className="text-5xl mx-10">Sign up</a>
            </div>
        </div>
        <div className="login-container h-screen w-full bg-cover flex flex-col justify-start items-center">
            <h2 className="font-bluetea text-8xl text-white mb-28 mt-36">SWEETDREAMS</h2>
            <form className="h-login w-login bg-white rounded-login flex flex-col justify-around items-center py-11 shadow-login" method="post" action="">
                <h3 className="font-bluetea text-3xl text-gray-500"> <strong className="text-black">Welcome.</strong> Please log in</h3>
                <input type="text" name="name" id="user-name" placeholder="User/email" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mt-8 px-5 font-bluetea text-xl" />
                <input type="password" name="pass" id="user-pass" placeholder="Password" className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input mb-8 px-5 font-bluetea text-xl" />
                <button className="w-auto h-auto bg-web-loginButton text-3xl font-bluetea py-6 px-9 rounded-3xl">Log in</button>
            </form>
            <div className="bg-blue-800 rounded-2xl py-1 px-6 bg-opacity-50 my-2 text-opacity-100"><p className="text-white">Forgot password? | Don’t have an acoount yet? <a href="" className="underline">Sign up</a></p></div>
        </div>
    </div>

  );
}

export default Login;
