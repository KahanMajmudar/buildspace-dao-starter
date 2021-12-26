import { ethers } from 'ethers'
import { readFileSync } from 'fs'
import sdk from './1-initialize-sdk.js'

// your app address
const app = sdk.getAppModule('0x3D75272382b058f345E57130000b82Fdd81ca084')

;(async () => {
	try {
		const bundleDropModule = await app.deployBundleDropModule({
			name: 'WagmiDAO Membership',
			description: 'A DAO for all who think they are gonna make it!',
			image: readFileSync('scripts/assets/dao.png'),
			// We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
			// We're planning on not charging people for the drop, so we'll pass in the 0x0 address
			// you can set this to your own wallet address if you want to charge for the drop.
			primarySaleRecipientAddress: ethers.constants.AddressZero,
		})

		console.log(
			'✅ Successfully deployed bundleDrop module, address:',
			bundleDropModule.address
		)
		console.log(
			'✅ bundleDrop metadata:',
			await bundleDropModule.getMetadata()
		)
	} catch (error) {
		console.log('failed to deploy bundleDrop module', error)
	}
})()
