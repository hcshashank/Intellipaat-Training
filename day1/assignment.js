var cart = {
    getCostPrice : function cost(){
        return 100;
    },
    getSellingPrice : function(){
        function calculateProfit(){
            return cart.getCostPrice() * 0.2;
        };

        return (cart.getCostPrice() + calculateProfit()) ;
    }
};
// console.log(getCostPrice)
// console.log(cart.getCostPrice());// ??? 

console.log(cart.getSellingPrice());