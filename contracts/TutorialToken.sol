pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract TutorialToken is StandardToken {
    string public name = "TutorialToken";
    string public symbol = "TT";
    uint8 public decimals = 2;
    uint public INITIAL_SUPPLY = 12000;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}