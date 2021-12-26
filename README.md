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

---

Claimed NFTs on [OpenSea](https://testnets.opensea.io/assets/0x431396cbdb7ed9bb1dc7c5f27a630a23411fca6f/0)

---

7.  Run the command to setup an ERC-20 Goverance Token. The contract is deployed [here](https://rinkeby.etherscan.io/address/0x3786bb92ae0b2f998545f402930d591f4ea9baa1)

    ```
    node scripts/5-deploy-token.js
    ```

8.  Run the command to setup Goverance Token Total Supply. The contract interation is [here](https://rinkeby.etherscan.io/tx/0x8294245e379b8efeacc38a4f8a36bb406fa19c764fc0c614250046446cc71939)

    ```
    node scripts/6-print-money.js
    ```

9.  Run the command to airdrop goverance tokens to the NFT holders.

    ```
    node scripts/7-airdrop-token.js
    ```

10. Run the command to setup the goverance contract. The contract is deployed [here](https://rinkeby.etherscan.io/address/0xb2fd8482ed8b94de4cb9512d23b7e94846283f8b)

    ```
    node scripts/8-deploy-vote.js
    ```

11. Run the command to setup the treasury(The goverance token contract) as token minter so that it can mint new tokens and transfer tokens from our balance to it(the script transfers 50% to the treasury).

    a. [here](https://rinkeby.etherscan.io/tx/0x23e1837c9ade1fac96bb393ff360473284e13cb50d486e59158e6709811b4311) is the minter role transaction

    b. [here](https://rinkeby.etherscan.io/tx/0xf226160e701b68d75c7c21531614c08d132cdf5073d82c5169af95d78de1b2ba) is the token transfer transaction

    ```
    node scripts/9-setup-vote.js
    ```

12. Run the command to setup some proposals. Both transactions can be found [here](https://rinkeby.etherscan.io/tx/0x52796ee20985c243c30f02fc978df805db728edcdd573c8405d3d42d0f4a899a) and [here](https://rinkeby.etherscan.io/tx/0xf02fc825c7162ef37021a01d4307fa2cf70e055f5e1ef3ac0c2d1e3d77f45321)

    ```
    node scripts/10-create-vote-proposals.js
    ```
