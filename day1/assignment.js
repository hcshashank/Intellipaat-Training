// var cart = {
//     getCostPrice : function cost(){
//         return 100;
//     },
//     getSellingPrice : function(){
//         function calculateProfit(){
//             return cart.getCostPrice() * 0.2;
//         };

//         return (cart.getCostPrice() + calculateProfit()) ;
//     }
// };
// console.log(cart.getSellingPrice());


// var cart = {
//     getCostPrice : function cost(){
//         return 100;
//     },
//     getSellingPrice : function(){
//         var clone = this;
//         function calculateProfit(){
//             return clone.getCostPrice() * 0.2;
//         };

//         return (cart.getCostPrice() + calculateProfit()) ;
//     }
// };
// console.log(cart.getSellingPrice());

// var cart = {

//     getCostPrice : function cost(){
//         return 100;
//     },
//     getSellingPrice : function(){
//         function calculateProfit(clone){
//             return this.getCostPrice() * 0.2;
//         };

//         return (cart.getCostPrice() + calculateProfit.call(this)) ;
//     }
// };
// console.log(cart.getSellingPrice());

// var cart = {
//     getCostPrice : function cost(){
//         return 100;
//     },
//     getSellingPrice : function(){
//         function calculateProfit(clone){
//             return this.getCostPrice() * 0.2;
//         };

//         return (cart.getCostPrice() + calculateProfit.apply(this)) ;
//     }
// };
// console.log(cart.getSellingPrice());

var cart = {
    getCostPrice : function cost(){
        return 100;
    },
    getSellingPrice : function(){
        function calculateProfit(clone){
            return this.getCostPrice() * 0.2;
        };

        return (cart.getCostPrice() + calculateProfit.bind(this)()) ;
    }
};
console.log(cart.getSellingPrice());