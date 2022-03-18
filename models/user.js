const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' });
      User.hasMany(models.Comment, { as: 'comments', foreignKey: 'user_id' });
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    photo: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    // when told to delete a record, it will not truly delete it.
    // Instead, a special column called deletedAt will have its value
    // set to the timestamp of that deletion request.
    paranoid: true,

  });
  return User;
};
