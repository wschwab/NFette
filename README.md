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

The app uses the standard React setup of an `App.jsx` being set up in `index.jsx`. In that vein, the routes for the app and Context wrappers are all implemented in `App.jsx`.

# NFette in Depth

This section focuses on diving into the various parts of NFette and how they make it tick. We'll start with the frontend, and then move on to the contracts.

## Frontend

### State Storage (`/src/store/`)

NFette implements a Redux-like global store for state variables. Most important values are stored in the global store, so understanding how it is structured, how to access it, and how to modify it are all very important.

Global variables are stored in `/src/store/store.js`. You can see the structure of the state in the `initialState` object, which represents the values for these variables when the state is initialized.

The state object has four main sub-objects: `nftDetails`, `tokenDetails`, `curve`, and `collateral`. In addition, there is a `provider` object for the [ethers web3 provider](https://docs.ethers.io/v5/api/providers/), and another for errors.

Following a Redux-like pattern, state variables are not changed by directly altering `store.js` in the frontend code. Instead, `dispatch`s are implemented in `/src/store/actions.js`. As such, you will see many components that have a line such as:
```
const { actions, provider, state } = store
```
This unbundles access to the actions (to change global state variables), a web3 provider for connecting to the blockchain, and the state variables themselves. For example, the current value for the initial price the ERC20 token will be sold at is accessible via using `state.tokenDetails.initialPrice` and to change/update it, `actions.setInitialPrice(newPrice)` would be used (this assumes `state` and `actions` have been imported using the line above). `reducer.js` and `types.js` handle the processing of the `dispatch`s implemented in `actions`. `middleware.js` implements a middleware layer in the process that allows for the app to be monitor status of longer processes such as connecting a wallet or making contract calls, which allows for the frontend to be aware when a process is pending and when it has completed, and catches errors gracefully.

**note:** the contract address of the MTX token should be hardcoded into the `initialState` in the collateral section once deployed

### A general note on styles and CSS

NFette opts for individually styling components, and as such, components are generally given their own directory with a dedicated `.js` file implementing css using [Material-UI Styles](https://material-ui.com/styles/basics/).

### Buy Flow (`/src/BuyFlow/`)

The `BuyFlow` contains the logic for a frontend screen allowing a user to buy NFette ERC20 shares of an NFT (that has had such a market set up using the NFette contracts). This part of the app, while very relevant to integration, is still under construction. The component structure (as of this writing) is a general component for the page `buyPage.jsx` along with a dedicated styles `.js`, and a separate component `priceChart.jsx` to graph a visualisation of the bonding curve, along with highlighting the current point on the curve determined by total supply.

### Create Flow (`/src/CreateFlow/`)

The `CreateFlow` contains the frontend logic for minting a NFT and creating a NFette market around it. The codebase (as of this writing) assumes the user is minting a new NFT, but this is scheduled to be changed in order to reflect that artists will be importing NFTs from Mintbase. The Create Flow, while containing six separate screens, is still all contained in the `/create` route set in `App.jsx`, leveraging `useStep` from the `react-hooks-hepler` library to make a multi-step page.

The logic for the steps along with transitions (using the `react-transition-group` library) is contained in the `MultiStepCreateFlow.jsx` file in the root of `CreateFlow`.

`0-Overview/` contains the overview screen at the begninng of the Create Flow, along with its styles. `1-CreateNFT/` contains the component for the next screen, which contains the input fields necessary to mint a new NFT contract. As stated before, there are plans to modify this to instead read this data (name, symbol, baseURI or URI index) from an existing NFT contract. At current writing, clicking the "Next" button triggers the `createNFT` service which deploys an NFT contract. (In this setup, the artist's wallet would be making a transaction in order to do so.)

`2-SelectPrice` contains the component with the inputs for most of the logic needed for the creation of the NFette ERC20 market. Since the event is using a dedicated token, instead of offering ETH, DAI, and USDC as collateral, only the MTX token will be available. `3-ChooseCurve` wraps this up by letting the artist pick which function will determine token pricing. As of this writing it displays three options, one may be dropped due to a problem with the specific way that the bonding curves are implemented in the contracts. All input is saved to the global state store.

`4-Review` gives a review screen displaying all the relevant data, and asks for the artist to confirm market creation. Clicking the "Next" button activates the `createMarket` service, which passes the NFT information to the NFette factory. (This is another wallet transaction.)

`5-Final` is still under construction, but also displays details, along with the address of the deployed market.
