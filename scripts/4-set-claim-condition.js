import sdk from './1-initialize-sdk.js'

const bundleDrop = sdk.getBundleDropModule(
	'0x431396cBDB7Ed9bb1dC7c5F27a630a23411fca6f'
)

;(async () => {
	try {
		const claimConditionFactory = bundleDrop.getClaimConditionFactory()
		// Specify conditions.
		claimConditionFactory.newClaimPhase({
			startTime: new Date(),
			maxQuantity: 100,
			maxQuantityPerTransaction: 1,
		})

		// 0 is the NFT Token ID
		await bundleDrop.setClaimCondition(0, claimConditionFactory)
		console.log(
			`✅ Sucessfully set claim condition on bundle drop: ${bundleDrop.address}`
		)
	} catch (error) {
		console.error('Failed to set claim condition', error)
	}
})()
