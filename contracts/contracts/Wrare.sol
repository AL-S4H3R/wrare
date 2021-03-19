// SPDX-License-Identifier: MIT
pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Wrare is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("Wrare", "WR") {}

    event TransferOwnership(
        address _from,
        address _to,
        uint256 _tokenId
    );

    function createCollectible(string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function buyCollectible(address payable _from, uint256 _tokenId, uint256 _amount) public {
        _payForCollectible(_from, _amount);
        getApproved(_tokenId);
        approve(msg.sender, _tokenId);
        safeTransferFrom(_from, msg.sender, _tokenId);
        emit TransferOwnership(_from, msg.sender, _tokenId);
    }

    function _payForCollectible(address payable _to, uint256 _amount) private payable {
        address(_to).transfer(_amount);
    }
}