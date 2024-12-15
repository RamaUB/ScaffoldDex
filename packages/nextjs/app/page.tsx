"use client";

import Link from "next/link";
import type { NextPage } from "next";

import { DebugContracts } from "./debug/_components/DebugContracts";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

import { useAccount } from "wagmi";
import { BugAntIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">SimpleDex</span>
            <span className="block text-2m">(Made possible thanks to Scaffold-ETH)</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

        </div>

        <DebugContracts />
      </div>
    </>
  );
};

export default Home;
