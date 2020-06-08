module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        event_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        start_time: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INT,
            allowNull: false
        }
    });

    Event.associate = function (models) {
        // We're saying that a Event should belong to a User
        // An Event can't be created without a User due to the foreign key constraint
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Event;
};
