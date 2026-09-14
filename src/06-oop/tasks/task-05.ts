/**
 ** An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */

class Product {
    private price: number;
    private stock: number;

    constructor(
        public productId: string,
        public productName: string,
        price: number,
        stock: number
    ) {
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity: number): void {
        if (quantity <= 0) {
            console.log("Quantity must be greater than 0.");
            return;
        }

        this.stock += quantity;
    }

    removeStock(quantity: number): void {
        if (quantity <= 0) {
            console.log("Quantity must be greater than 0.");
            return;
        }

        if (quantity > this.stock) {
            console.log("Not enough stock.");
            return;
        }

        this.stock -= quantity;
    }

    changePrice(newPrice: number): void {
        if (newPrice <= 0) {
            console.log("Price must be greater than 0.");
            return;
        }

        this.price = newPrice;
    }

    isAvailable(): boolean {
        return this.stock > 0;
    }

    getInventoryValue(): number {
        return this.price * this.stock;
    }

    showProductInfo(): void {
        console.log(`Product ID: ${this.productId}`);
        console.log(`Name: ${this.productName}`);
        console.log(`Price: Rp${this.price}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Available: ${this.isAvailable()}`);
        console.log(`Inventory Value: Rp${this.getInventoryValue()}`);
    }
}

const product = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

product.showProductInfo();

product.addStock(5);
product.removeStock(3);
product.changePrice(14500000);

console.log("--------------------");
product.showProductInfo();