pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';


contract TutorialToken is ERC20 {
    string public name = "TutorialToken";
    string public symbol = "TT";
    uint8 public decimals = 2;
    uint256 public INITIAL_SUPPLY = 120000;
    uint256 public TOTAL_SUPPLY;
    mapping(address => uint256) public balanceOf;
    
    constructor() public {
        TOTAL_SUPPLY = INITIAL_SUPPLY;
        balanceOf[msg.sender] = INITIAL_SUPPLY;
    }
}