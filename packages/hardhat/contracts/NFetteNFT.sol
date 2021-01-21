// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Burnable.sol";

contract NFetteNFT is ERC721Burnable, Ownable {

    constructor(string memory _name, string memory _symbol, string memory baseURI_) public ERC721(_name, _symbol) {
        _setBaseURI(baseURI_);
    }

    function mint(address _to, uint256 _tokenId) external onlyOwner {
        _safeMint(_to, _tokenId);
    }

}