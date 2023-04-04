import { useEffect } from 'react'

// import { ethers } from 'ethers'
// import EthersAdapter from '@safe-global/safe-ethers-lib'
// import SafeServiceClient from '@safe-global/safe-service-client'
// import { SafeFactory } from '@safe-global/safe-core-sdk'
// import { SafeAccountConfig } from '@safe-global/safe-core-sdk'

// const txServiceUrl = 'https://safe-transaction-goerli.safe.global'
// // https://chainlist.org/?search=goerli&testnets=true
// const RPC_URL='https://eth-goerli.public.blastapi.io'
// const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

// const createSafe = async () => {

//     // Initialize signers
//     const owner1Signer = new ethers.Wallet(process.env.NEXT_PUBLIC_OWNER_1_PRIVATE_KEY!, provider)
//     const owner2Signer = new ethers.Wallet(process.env.NEXT_PUBLIC_OWNER_2_PRIVATE_KEY!, provider)
//     const owner3Signer = new ethers.Wallet(process.env.NEXT_PUBLIC_OWNER_3_PRIVATE_KEY!, provider)

//     const ethAdapterOwner1 = new EthersAdapter({
//     ethers,
//     signerOrProvider: owner1Signer    })

//     const safeService = new SafeServiceClient({ txServiceUrl, ethAdapter: ethAdapterOwner1 })
//     const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })
    
//     const safeAccountConfig: SafeAccountConfig = {
//         owners: [
//           await owner1Signer.getAddress(),
//           await owner2Signer.getAddress(),
//           await owner3Signer.getAddress()
//         ],
//         threshold: 2,
//         // ... (Optional params)
//       }
    
//     const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })
    
//     const safeAddress = safeSdkOwner1.getAddress()
    
//     console.log('Your Safe has been deployed:')
//     console.log(`https://goerli.etherscan.io/address/${safeAddress}`)
//     console.log(`https://app.safe.global/gor:${safeAddress}`)
// }

export default function Safe() {

    useEffect(() => {
        // createSafe();
    }, [])
  
    return (
        <div className="w-1/4 min-h-32 border mr-4 rounded-xl p-4">
            <h1 className="text-2xl font-bold">Create Safe MultiSig</h1>
            <p>Address 1:</p>
            <p>Address 2:</p>
            <p>Address 3:</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Create
            </button>
        </div>
    )
} 