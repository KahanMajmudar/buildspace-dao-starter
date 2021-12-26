import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'

const sdk = new ThirdwebSDK('rinkeby')
const bundleDropModule = sdk.getBundleDropModule(
	'0x431396cBDB7Ed9bb1dC7c5F27a630a23411fca6f'
)

const App = () => {
	const { connectWallet, address, error, provider } = useWeb3()
	console.log('👋 Address', address)

	const signer = provider ? provider.getSigner() : undefined

	const [hasClaimedNFT, sethasClaimedNFT] = useState(false)
	const [isClaiming, setIsClaming] = useState(false)

	useEffect(() => {
		sdk.setProviderOrSigner(signer)
	}, [signer])

	useEffect(() => {
		async function fetchNFTBalance() {
			if (!address) return

			try {
				const balance = await bundleDropModule.balanceOf(address, 0)
				if (balance.gt(0)) {
					sethasClaimedNFT(true)
					console.log('🌟 this user has a membership NFT!')
				} else {
					sethasClaimedNFT(false)
					console.log("😭 this user doesn't have a membership NFT.")
				}
			} catch (error) {
				sethasClaimedNFT(false)
				console.error(`failed on NFT balance: $${error}`)
			}
		}

		fetchNFTBalance()
	}, [address])

	if (!address)
		return (
			<div className="landing">
				<h1>Welcome to WagmiDAO</h1>
				<button
					onClick={() => connectWallet('injected')}
					className="btn-hero"
				>
					Connect your wallet
				</button>
			</div>
		)

	if (hasClaimedNFT) {
		return (
			<div className="member-page">
				<h1>WagmiDAO Member Page</h1>
				<p>Congratulations on being a member</p>
			</div>
		)
	}

	const mintNFT = () => {
		setIsClaming(true)

		bundleDropModule
			.claim('0', 1)
			.catch((err) => {
				console.error(`Error on claim: ${err}`)
				setIsClaming(false)
			})
			.finally(() => {
				setIsClaming(false)
				sethasClaimedNFT(true)
				console.log(
					`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${bundleDropModule.address}/0`
				)
			})
	}

	return (
		<div className="mint-nft">
			<h1>Mint your free WagmiDAO Membership NFT</h1>
			<button disabled={isClaiming} onClick={() => mintNFT()}>
				{isClaiming
					? 'Minting...'
					: 'Mint your nft for FREE (with gas costs)'}
			</button>
		</div>
	)
}

export default App
