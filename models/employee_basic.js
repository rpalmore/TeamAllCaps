module.exports = function(sequelize, DataTypes) {
  var employee_basic = sequelize.define("employee_basic", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkedin_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    manager_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "employee_basics",
        key: "id"
      }
    },
    photo_path: {
      type: DataTypes.STRING,
      allowNull: false
      }
    },
    {
      classMethods: {
        associate:function(models){
          employee_basic.hasOne(models.employee_option, {
            onDelete:"cascade"
          })
        }
      }
  });
  return employee_basic;
};

