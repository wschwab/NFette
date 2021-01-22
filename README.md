# NFette
#### a tool built by [Linum Labs](https://linumlabs.com)

NFette is a tool for minting an NFT, then wrapping an ERC20 market around it, with the token prices being determined by a bonding curve. The original NFette concept was headed by [Michal Shachman](https://twitter.com/MichalShachman) at ETHGlobal's ETHOnline Hackathon in October 2020, along with Linum Labs member [Gerhard Steenkamp](https://twitter.com/gerhardsteenka4), and also with [Santiago Toval](https://santteegt.github.io/).

The project has been scaffolded using [Austin Griffith](https://twitter.com/austingriffith)'s [Scaffold-Eth](https://github.com/austintgriffith/scaffold-eth), and some components remain from that, even if they are not in use. Scaffold-Eth is documented extensively in their README. If there's something in the codebase that you don't understand, and can't find where it's used, it may be from there.

## Basic Structure

Scaffold-Eth uses [yarn workspaces](https://yarnpkg.com/features/workspaces) in order to create multiple environments that can be installed and run through the root `package.json`. It fuses a [Hardhat](https://hardhat.org/) contract development environment with an Ethereum-enabled React App ([this one](https://github.com/paulrberg/create-eth-app), if I recall correctly), along with the tools to launch a [subgraph](https://thegraph.com/docs/introduction#what-the-graph-is). There is quite a bit baked into yarn scripts, and you should take a look at the root `package.json` just to get a feel for what you can do. [This](https://www.youtube.com/watch?v=ShJZf5lsXiM&feature=youtu.be&t=19) video is a very quick tutorial about how to get the environment running on an older version of Scaffold-Eth, but may be useful. We'll give a quick runthrough here, too.

You'll find a `packages` directory in the root directory. In that directory you'll find a `hardhat` and `react-app` directory (and some other stuff). The former is where most of the contract development happens, the latter is where the web app lives. We'll dive in to both of those.

(Just for reference, the `docker` directory in the root is for subgraph stuff. You'll need Docker and Docker Compose if you're interested in running an NFette subgraph, but otherwise, no Docker needed.)

## Getting Started

You'll need a bunch of terminals. You'll need one for the frontend, one for the dev chain, one for contracts, and if you're doing subgraph stuff, one for that too.

* to start the frontend: `yarn start`
* to start a Hardhat dev chain: `yarn chain`
* to compile and deploy the contracts: `yarn deploy`
* to turn on hot contract reload: `yarn watch`
* to run a subgraph: `yarn graph-run-node`

for more commands, look at the root `package.json`, or refer to the [Scaffold-Eth README](https://github.com/austintgriffith/scaffold-eth).

## Hardhat

`hardhat.config.js` contains a number of general configuration settings for the Hardhat environment. Since we're looking at a Rinkeby deployment, it would be good to switch out Autin's Infura for either our own or yours on line 51 when we deploy.

The end of the file also contains settings for the Solidity compiler, including which version is being used.

Contract tests go in the `test` directory. There is a suite of tests for the contracts that is not, as of this writing, a part of the repo, though we hope to reintegrate them. Hardhat uses a custom implementation of [Waffle](https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html).

`scripts` contains a deployment script (`deploy.js`) which currently deploys a NFette factory, a test NFT contract, and a mock ERC20 token for testing. (`publish.js` handles some subgraph integration, and `watch.js` integrates a hot reload feature that while running recompiles and deploys the contracts any time a change is made and saved, and injects the abi and address into the frontend.)

`contracts` is where the NFette contract suite lives. At the root level there are four contracts. We'll detail them briefly here and dive deeper on them below. 

`Curve` contains most of the math for using a bonding curve to determine token buy and sell values, though there are some parameters passed in from the ERC20 marketplaces. This allows the Curve contract to map any curve, and isn't restricted to just one.

`ERC20Mock` is a ERC20-compliant token used for testing. It does little other than inherit from OpenZeppelin's contracts.

`NFetteNFT` is the NFT contract NFette generates. We may not be using this functionality of NFette, instead importing NFTs from Mintbase, so it can be largely ignored. In any event, it inherits an OpenZeppelin NFT, and gives it a mint function.

`NFTMarketFactory` is the factory contract that deploys an ERC20 market around the NFT. There is also a v1 contract in the directory. (`NFTMarketFactoryv2` is the beginnings of a refactor, but has barely been started, and is not in scope before the event.)

The `interfaces` directory contains interface contracts in order to enable cross-contract communication more efficiently, and the `market` directory contains `NFTMarketTemplatev2` which is the template for an NFette ERC20 market. (There is also a `NFTMarketTemplate` contract from a previous attempt.)

## React-App

In the interests of brevity, this walkthrough will attempt to focus on the more relevant parts of the React directories. We'll cover them briefly here, and then dive in more later.

You can set a `.env` file in the same directory as the `.sample.env` with a `REACT_APP_PROVIDER` pointing at an Infura (or similar) endpoint, and the app will use it as a provider (see [here](https://github.com/austintgriffith/scaffold-eth/blob/master/packages/react-app/src/App.jsx#L51) for where this appears in the actual app).

Moving into `src`, you'll see the following:

* `BuyFlow`: where the components for the page for buying and selling the NFette ERC20 tokens live
* `components`: a general components folder, including many of the Scaffold-Eth components, and some for NFette
* `CreateFlow`: the components for the part of the app dedicated to creating a market around an NFT
* `hooks`: a number of hooks from Scaffold-Eth, see the Scaffold-Eth README for more details
* `Media` contains any relevant images, and also some from various implementation ideas that were not carried out into fruition
* `services`: web3 services (using the [ethers.js](https://docs.ethers.io) library) for connecting a wallet to NFette, minting a NFette NFT, and creating a market.
* `store`: NFette implements a Redux-like global state store, though it does this using Context as opposed to actually using Redux. Pretty much any useful piece of state is stored here in the `store.js` file, and is stored using actions from `actions.js`.

The app uses the standard React setup of an `App.jsx` being set up in `index.jsx`.
