

const {Schema, model} = require('mongoose');


const usersSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    phone: {
        type:String,
        required: [true, 'El numero de telefono es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'la contra es obligatoria']
    },
    img: {
        type: String,
        default: 'https://res.cloudinary.com/drkqwwoxd/image/upload/v1670199170/149071_xlo4ob.png',
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
        //enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default:true
    },
    firstName: {
        type: String,
        default: ''
    }
});

usersSchema.methods.toJSON = function() {
    const {__v, password, _id, code, ...user} = this.toObject();
    user.uid = _id;
    return user
}



module.exports =  model('Users', usersSchema);