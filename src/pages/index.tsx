import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="my-4">
          <h1 className="text-3xl font-bold underline">lil 4337</h1>
          <p className="text-xl">Building Blocks for Account Abstraction</p>
        </div>

        <div className="flex">
          <div className="w-1/4 min-h-32 border mr-4 rounded-xl p-4">
            <h1 className="text-2xl font-bold">Create Safe MultiSig</h1>
            <p>Address 1:</p>
            <p>Address 2:</p>
            <p>Address 3:</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Create
            </button>
          </div>
          <div className="w-1/4 h-32 border mr-4">
            <h1 className="text-2xl font-bold underline">
              Social Login with Web3Auth
            </h1>
          </div>
          <div className="w-1/4 h-32 border mr-4">
            <h1 className="text-2xl font-bold underline">
              MPC Login with Web3Auth
            </h1>
          </div>
          <div className="w-1/4 h-32 border">
            <h1 className="text-2xl font-bold underline">
              OnRamp with Stripe API
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
