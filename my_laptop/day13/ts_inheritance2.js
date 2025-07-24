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
var Parent = /** @class */ (function () {
    function Parent() {
        this.original_name = "gopal";
        this.name = this.original_name;
    }
    Parent.prototype.getName = function () {
        return this.original_name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "aakash";
        return _this;
    }
    Child.prototype.showName = function () {
        console.log("parent class name " + _super.prototype.getName.call(this));
        console.log("child class name " + this.name);
    };
    return Child;
}(Parent));
var n1 = new Child();
n1.showName();
