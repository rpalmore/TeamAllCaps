module.exports = function(sequelize, DataTypes) {
  var employee_option = sequelize.define("employee_option", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      classMethods:{
        associate:function(models){
          employee_option.belongsTo(models.employee_basic, {foreignKey:{
            allowNull:false
          }
        });
      }
    }
  })
  return employee_option;
};
