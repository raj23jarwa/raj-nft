// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Minting is ERC721Enumerable, Ownable {
    string public baseURI;
    uint256 public cost = 0.001 ether;
    string public baseExtension = ".json";
    uint256 public maxSupply = 99;
    bool public paused = false;
    string public baseImage = ".webp";
    mapping(uint256 => bool) private _tokenExists;


    event Sale(
        uint256 id,
        address indexed buyer,
        uint256 cost,
        string indexed tokenURI,
        uint256 timestamp
    );

    struct SaleStruct {
        uint256 id;
        address buyer;
        uint256 cost;
        string imageURL;
        uint256 timestamp;
    }

    SaleStruct[] minted;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) 
    ERC721(_name, _symbol)
            Ownable(msg.sender) // Pass msg.sender to the Ownable constructor
 {
        setBaseURI(_initBaseURI);
    }

    // function setBaseURI(string memory _baseURI) external onlyOwner {
    //     baseURI = _baseURI;
    // }
    function payToMint() public payable {
    uint256 supply = totalSupply();
    require(!paused, "NFTs under maintenance!");
    require(supply <= maxSupply, "Sorry, all NFTs have been minted!");
    require(msg.value > 0 ether, "Ether too low for minting!");

    if (msg.sender != owner()) {
        require(msg.value >= cost);
    }

    _safeMint(msg.sender, supply + 1);
    _tokenExists[supply + 1] = true;

    minted.push(
        SaleStruct(
            supply + 1,
            msg.sender,
            msg.value,
            tokenURI(supply + 1),
            block.timestamp
        )
    );
      
    emit Sale(supply, msg.sender, msg.value, tokenURI(supply + 1), block.timestamp);
}

function exists(uint256 tokenId) internal view returns (bool) {
    return _tokenExists[tokenId];
}

function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
{
    require(
        exists(tokenId),
        "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, Strings.toString(tokenId), baseExtension))
        : "";
}

function toImage(uint256 tokenId, string memory extension) public view returns (string memory) {
    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, Strings.toString(tokenId), extension))
        : "";
}

// Display function
function getAllNFTs() public view returns (SaleStruct[] memory) {
    return minted;
}
  
function getAnNFTs(uint256 tokenId) public view returns (SaleStruct memory) {
    return minted[tokenId - 1];
}

// Adminstrative function

function payTo(address to, uint256 amount) public onlyOwner {
    (bool success1, ) = payable(to).call{value: amount}("");
    require(success1);
}

function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
}

function setPause(bool _state) public onlyOwner {
    paused = _state;
}

function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
}



}
