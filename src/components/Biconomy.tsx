import "@biconomy/web3-auth/dist/src/style.css"
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Biconomy() {

  const SocialLoginDynamic = dynamic(
    () => import("./scw").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </div>
  );
};
