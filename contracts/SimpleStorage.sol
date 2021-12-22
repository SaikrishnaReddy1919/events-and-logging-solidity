pragma solidity ^0.8.7;

contract SimpleStorage {
    uint256 favNumber;
    event storedNumber(
        uint256 indexed oldnumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender
    )

    function store(uint256 newFavNumber) public {
        emit storedNumber(
            favNumber,
            newFavNumber,
            favNumber + newFavnumber,
            msg.sender
        );
        favNumber = newFavNumber;
    }
}