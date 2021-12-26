# buildspace x thirdweb - Build your own DAO with just Javascript

### **Welcome 👋**

To get started with this course, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### **Questions?**

Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766) and link your Discord account so you can get access to helpful channels and your instructor!

---

### Steps

1. Visit [thirdweb](thirdweb.com) and create a project on Rinkeby. Approve the [contract](https://ipfs.io/ipfs/bafkreibazvtkhkwb5a5sgyf7rtbrd4yspe2yhtb7biyow5jl44c3tcpimu) interaction as data is stored on chain, and the project data it is stored on [ipfs](https://ipfs.io/ipfs/bafkreibazvtkhkwb5a5sgyf7rtbrd4yspe2yhtb7biyow5jl44c3tcpimu).

2. Create an .env file with

    ```
    PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
    WALLET_ADDRESS=YOUR_WALLET_ADDRESS
    ALCHEMY_API_URL=YOUR_ALCHEMY_API_URL
    ```

3. Run the command to print your app's address

    ```
    node scripts/1-initialize-sdk.js
    ```

4. Run the command to setup the membership ERC1155 NFTs. The contract is deployed [here](https://rinkeby.etherscan.io/address/0x431396cBDB7Ed9bb1dC7c5F27a630a23411fca6f) and the contract metadata file [here](https://cloudflare-ipfs.com/ipfs/bafkreihpndgniv6tyvmhwyl4smpc4a52js4uq7g4cl4js2jmivltfr52fu)

    ```
    node scripts/2-deploy-drop.js
    ```

5. Run the command to setup the NFT data. The contract interaction is [here](https://rinkeby.etherscan.io/tx/0x4f340c43913e51a21876dd21fbd71fcd06057a2137ef370412509141556ce5d2) and the metadata file [here](https://cloudflare-ipfs.com/ipfs/Qme25EQzHm5UUXeeDVVmsBo14d5X64o5Xxh5rAa5dKESh3/0)

    ```
    node scripts/3-config-nft.js
    ```

6. Run the command to setup NFT Claim conditions. The contract interaction is [here](https://rinkeby.etherscan.io/tx/0x73462614609503e90f0a444caeba832b3a335c674153f6d522249b1eae7bdbf8)

    ```
    node scripts/4-set-claim-condition.js
    ```
