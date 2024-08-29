const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('User', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.TEXT,defaultValue:'User'},
    adres_delivery: {type: DataTypes.TEXT},
    phone: {type: DataTypes.TEXT},
    number_schet: {type: DataTypes.TEXT},
    password: {type: DataTypes.TEXT},
    email: {type: DataTypes.TEXT},
})


const Categoria = sequelize.define('Categoria', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    nach_price:{type: DataTypes.TEXT},
    photo:{type: DataTypes.TEXT},
})


const Item = sequelize.define('Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.TEXT},
    price: {type: DataTypes.FLOAT},
    skidka: {type: DataTypes.INTEGER},
    description0: {type: DataTypes.TEXT},
    description_title: {type: DataTypes.TEXT},
    description_value: {type: DataTypes.TEXT},
    dop_info: {type: DataTypes.TEXT},
    delivery: {type: DataTypes.TEXT},
})

const Item_photo = sequelize.define('Item_photo', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.TEXT},
})
const Basket_Item = sequelize.define('Basket_Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.TEXT},
    name: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},
    qauantity: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    skidka: {type: DataTypes.INTEGER},

})

const Order_Item = sequelize.define('Order_Item', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    photo: {type: DataTypes.TEXT},
    name: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},
    qauantity: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
})

const Order= sequelize.define('Order', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    Name: {type: DataTypes.TEXT},
    Familia: {type: DataTypes.TEXT},
    Phone: {type: DataTypes.TEXT},
    Mail: {type: DataTypes.TEXT},


    adres: {type: DataTypes.TEXT},
    price: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},

})

const ItemPhoto= sequelize.define('ItemPhoto', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    color: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},

})
const Love= sequelize.define('Love', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})


User.hasMany(Love, {as: 'Love'})
Love.belongsTo(User)

Item.hasMany(Love, {as: 'Love'});
Love.belongsTo(Item)

User.hasMany(Basket_Item, {as: 'Basket_Item'});
Basket_Item.belongsTo(User)

User.hasMany(Order, {as: 'Order'});
Order.belongsTo(User)

Order.hasMany(Order_Item, {as: 'Order_Item'});
Order_Item.belongsTo(Order)

Categoria.hasMany(Item, {as: 'Item'});
Item.belongsTo(Categoria)

Item.hasMany(Item_photo, {as: 'Item_photo'});
Item_photo.belongsTo(Item)



Item.hasMany(ItemPhoto, {as: 'ItemPhoto'});
ItemPhoto.belongsTo(Item)

// Item.hasMany(ItenSize, {as: 'ItenSize'});
// ItenSize.belongsTo(Item)




Item.hasMany(Basket_Item, {as: 'Basket_Item'});
Basket_Item.belongsTo(Item)


module.exports = {
    Love,
User,
ItemPhoto,
Order,
Order_Item,
Categoria,
Item,
Item_photo,
Basket_Item,
}
