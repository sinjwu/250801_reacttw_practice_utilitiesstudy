import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="flex justify-between items-center max-w-2xl mx-auto bg-blue-100 font-semibold gap-6">
        <nav className="flex gap-11 py-5">
          <img src={logo} alt="멋쟁이사자처럼" />
          <ul className="flex gap-8">
            <li>전체 강의</li>
            <li className="flex items-center">
              부트캠프
              <p className="text-[#737373] text-xs px-1.5 py-0.5 bg-[#f5f5f5] ml-1.5 rounded-xs">
                국비지원
              </p>
            </li>
            <li>이벤트</li>
            <li>기업문의</li>
          </ul>
        </nav>
        <div>
          <button className="text-sm px-5 py-2.5 rounded-full border border-gray-300">
            로그인/회원가입
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
