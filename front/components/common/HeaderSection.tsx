import { Gift } from "lucide-react";

export const HeaderSection = () => {
  return (
    <div className="space-y-4 text-center">
      <div className="relative mx-auto size-20 animate-bounce">
        <Gift className="size-full text-blue-600" />
      </div>
      <h1 className="text-2xl font-bold text-blue-600">취업 축하 이벤트!</h1>
      <p className="text-sm text-gray-600">
        당첨하시면 꼭 제대 취업 상금 3개월 이후
        <br />
        지급되게끔 500원씩을 지급됩니다.
      </p>
    </div>
  );
};
