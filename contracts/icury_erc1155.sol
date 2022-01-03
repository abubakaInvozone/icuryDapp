// SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.7.0 <0.9.0;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IcuryErc1155 is ERC1155, Ownable {
    uint public totalNfts = 0;
    mapping(uint => string) private _uris;  // add condition here
    constructor() ERC1155("") {
    }
    // function receivedNfts( address from, address to,  uint256 id,  uint256 amount, bytes memory data) external payable {
    //         super.safeTransferFrom(from, to, id, amount, data);
    // }
    function batchMint( address to,  uint256[] memory ids,  uint256[] memory amounts,  bytes memory data) public onlyOwner {
        super._mintBatch(to, ids, amounts, data);
    }
    function _setURI(uint tokenId,string memory newuri) public onlyOwner{
        _uris[tokenId] = newuri;
    }
    function getUri(uint tokenId) public view returns (string memory){
        return _uris[tokenId];
    }
}