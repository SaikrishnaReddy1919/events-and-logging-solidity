//SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

contract SimpleStorage {
    uint256 favNumber;
    event storedNumber(
        uint256 indexed oldnumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender
    );

    function store(uint256 newFavNumber) public {
        emit storedNumber(
            favNumber,
            newFavNumber,
            favNumber + newFavNumber,
            msg.sender
        );
        favNumber = newFavNumber;
    }
}