import sdk from './1-initialize-sdk.js'

const app = sdk.getAppModule('0x3D75272382b058f345E57130000b82Fdd81ca084')

;(async () => {
	try {
		// Deploy a standard ERC-20 contract.
		const tokenModule = await app.deployTokenModule({
			name: 'WagmiDAO Governance Token',
			symbol: 'WDGT',
		})
		console.log(
			'✅ Successfully deployed token module, address:',
			tokenModule.address
		)
	} catch (error) {
		console.error('failed to deploy token module', error)
	}
})()
