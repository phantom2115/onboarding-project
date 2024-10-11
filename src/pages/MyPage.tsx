import Button from "../components/Button";

const MyPage = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="w-48 flex justify-center items-center flex-col gap-3">
        <div className="text-xl">내 정보</div>
        <label>
          <input type="file" className="hidden" />
          <img className="border border-black w-24 h-24 rounded-full"></img>
        </label>
        <div>아이디</div>
        <div>이름</div>
        <Button>수정</Button>
      </div>
    </div>
  );
};

export default MyPage;
