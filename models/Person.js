import Sequelize from 'sequelize'
import db from '../connection'

export default db.define('persons', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(12),
        defaultValue: () => (Math.random() + Number.MAX_SAFE_INTEGER).toString(36).substr(0, 12)
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING(45),
        validate: {
            is: { // /^[a-z]+$/i
                args: /^[a-z]+$/i,
                msg: 'Should only contain letters'
            } 
        },
        set(value) {
            this.setDataValue('firstName', value.toLowerCase())
        }
    },
    lastName: {
        allowNull: false,
        type: Sequelize.STRING(45),
        validate: {
            is: { // /^[a-z]+$/i
                args: /^[a-z]+$/i,
                msg: 'Should only contain letters'
            } 
        }
    },
    email: { 
        unique: { // true | 'unique_email'
            name: 'unique_email',
            msg: 'person emails should be unique'
        },
        validate: {
            isEmail: { // true
                msg: 'Should be an email'
            }
        },
        allowNull: false,
        type: Sequelize.STRING(320)
    }
})