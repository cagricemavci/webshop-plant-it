import typeorm from 'typeorm';
import UserSchema from '../model/User.model.js';
import ProfileSchema from '../model/Profile.model.js';
import CategorySchema from '../model/Category.model.js';
import ProductSchema from '../model/Product.model.js';
import ReviewSchema from '../model/Review.model.js';
import OrderSchema from '../model/Order.model.js';
import PaymentSchema from '../model/Payment.model.js';
import PromotionSchema from '../model/Promotion.model.js';
import order_products from '../model/order_products.model.js';
import products_has_categories from '../model/products_has_categories.model.js';

export default await typeorm.createConnection({
    type: "better-sqlite3",
    // host: "localhost",
    // port: 3306,
    // username: "test",
    // password: "test",
    database: "../../data/webshop.db3",
    synchronize: true,
    logging: true,
    entities: [
        UserSchema,
        ProfileSchema,
        CategorySchema,
        ReviewSchema,
        OrderSchema,
        PaymentSchema,
        PromotionSchema,
        ProductSchema,
        order_products,
        products_has_categories
    ]
})


