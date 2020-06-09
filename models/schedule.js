module.exports = function (sequelize, DataTypes) {
    const Schedule = sequelize.define("Schedule", {
        nine_am: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        ten_am: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        eleven_am: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        twelve_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        one_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        two_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        three_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        four_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        five_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        six_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        seven_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        eight_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        nine_pm: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    Schedule.associate = function (models) {
        // We're saying that a Schedule should belong to a User
        // An Schedule can't be created without a User due to the foreign key constraint
        Schedule.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Schedule;
};
