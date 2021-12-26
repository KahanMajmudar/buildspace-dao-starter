import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule(
	'0x431396cBDB7Ed9bb1dC7c5F27a630a23411fca6f'
)

;(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: 'Success Kid WAGMI',
				description: 'This NFT will give you access to WagmiDAO!',
				image: readFileSync('scripts/assets/nft.jpg'),
			},
		])
		console.log('✅ Successfully created a new NFT in the drop!')
	} catch (error) {
		console.error('failed to create the new NFT', error)
	}
})()
