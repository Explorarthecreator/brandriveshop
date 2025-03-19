import { WalletMoney } from "iconsax-react";
import React from "react";

const MetricsCard = () => {
  return (
    <div className="w-[19.56rem] h-[9.75rem]  border border-gray-200 rounded-md overflow-hidden shrink-0">
      <div className="h-[6.25rem] p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">Food</h1>
          <div className="h-8 w-8 rounded-[0.375rem] bg-accent flex items-center justify-center">
            <WalletMoney variant="Bold" size={16} className="fill-primary" />
          </div>
        </div>
      </div>
      <div className="h-[3.5rem] flex items-center justify-between px-5 bg-accent border-t border-gray-200">
        {/* {loading ? (
          <Skeleton className="w-[37px] h-[37px]" />
        ) : ( */}
        <>
          <h1 className="font-semibold text-xl">200</h1>
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default MetricsCard;
