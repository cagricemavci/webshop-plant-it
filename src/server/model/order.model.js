
import {EntitySchema} from 'typeorm'

export default new EntitySchema({
    name: "Order", // Will use table name `post` as default behaviour.
    tableName: "orders", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        orderState: {
            type: "int",
            nullable: true
        },
        completedAt:{
            type: "int",
            nullable: true
        },
        createdAt:{
            type: "int",
            nullable: false
        },
        user_id: {
            type: 'int',
            nullable: true,
            
        }
    },
    relations: {
        "order_products": {
            target: "order_products",
            type: "one-to-many"
        },
        "payments": {
            target: "payments",
            type: "one-to-many"
        }
    }
});
