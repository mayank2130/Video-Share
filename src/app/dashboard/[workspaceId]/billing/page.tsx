import { getPaymentInfo } from "@/actions/user";
import React from "react";

type Props = {};

const BillingPage = async (props: Props) => {
  const payment = await getPaymentInfo();

  return (
    <div className="flex flex-col gap-y-8 p-5 rounded-xl bg-[#1D1D1D]">
      <div className="">
        <h2 className="text-2xl">Current Plan</h2>
        <p className="text-[#9D9D9D]">Your Payment History</p>
      </div>
      <div>
        <h2 className="text-2xl">
          ${payment?.data?.subscription?.plan === "PRO" ? "99" : "0"}/Month
        </h2>
        <p className="text-[#9D9D9D]">{payment?.data?.subscription?.plan}</p>
      </div>
    </div>
  );
};

export default BillingPage;