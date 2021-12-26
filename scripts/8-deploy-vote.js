import sdk from './1-initialize-sdk.js'

// Grab the app module address.
const appModule = sdk.getAppModule('0x3D75272382b058f345E57130000b82Fdd81ca084')

;(async () => {
	try {
		const voteModule = await appModule.deployVoteModule({
			// Give your governance contract a name.
			name: "WagmiDAO's Epic Proposals",

			// This is the location of our governance token, our ERC-20 contract!
			votingTokenAddress: '0x3786bb92ae0b2f998545f402930d591f4ea9baa1',

			// After a proposal is created, when can members start voting?
			proposalStartWaitTimeInSeconds: 0,

			// How long do members have to vote on a proposal when it's created?
			proposalVotingTimeInSeconds: 24 * 60 * 60,

			// In order for a proposal to pass, a minimum x % of token must be used in the vote
			votingQuorumFraction: 0,

			// What's the minimum # of tokens a user needs to be allowed to create a proposal?
			minimumNumberOfTokensNeededToPropose: '0',
		})

		console.log(
			'✅ Successfully deployed vote module, address:',
			voteModule.address
		)
	} catch (err) {
		console.log('Failed to deploy vote module', err)
	}
})()
