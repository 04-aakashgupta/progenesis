var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.noOfProduct = function () {
        return 5;
    };
    return Product;
}());
var Shopping = /** @class */ (function (_super) {
    __extends(Shopping, _super);
    function Shopping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shopping.prototype.noOfProduct = function () {
        return 7;
    };
    Shopping.prototype.totalNoOfProduct = function () {
        return this.noOfProduct() + _super.prototype.noOfProduct.call(this);
    };
    return Shopping;
}(Product));
var s1 = new Shopping();
console.log("total no of producyt is ", s1.totalNoOfProduct());
