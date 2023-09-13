import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token {
  var owner : Principal = Principal.fromText("wu73o-bwwrx-bgc2z-tbodl-ymw3k-3tftm-2wqvz-zrsn2-wg24j-me6s3-2qe");
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "DUJJU";

  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

  balances.put(owner, totalSupply);

  public query func balanceOf(who : Principal) : async Nat {

    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

};
