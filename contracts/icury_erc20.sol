// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IcuryErc20 is ERC20 {
   address public admin;
   constructor() ERC20("ICURY", "ICY")  {
       _mint(msg.sender, 5000000000);
       admin = msg.sender;
   }
   function mint(address to, uint amount) external {
        require(msg.sender == admin, "Only admin can mint");
        _mint(to, amount);
    }
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}