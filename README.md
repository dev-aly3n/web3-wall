## WallNFT
![System Design](./diagram-a.png)
WallNFT is a public decentralized platform implemented as a smart contract, that allows users to post messages on a "Wall". Each message is minted as a non-fungible token (NFT) based on the ERC721 standard. This approach not only ensures the uniqueness and ownership of each message, but also empowers the users with a measurable reputation in the form of NFT balances.

The platform incorporates a feature of "Pinning" a message. Users with sufficient reputation (NFT balance) or those willing to pay a fee can pin a message, making it more prominent. The platform also integrates with an AI engine. Each time a user creates a post, the AI engine generates an image for the post, which is then used as the art for the associated NFT.

## Deployment

this is a foundry project, so you can deploy it using the foundry cli:

```bash
forge create `contract_path:contract_name` --template --rpc-url `rpc_url` --private-key `private_key`
```

## Usage
* Using website (WIP)
* Using CLI (`client/main.ts`)

## High level System Design
<!-- add diagram image -->
![System Design](./diagram-b.png)
