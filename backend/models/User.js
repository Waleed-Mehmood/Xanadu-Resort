const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,   
        required: true,
    },
    userId :{
        type: mongoose.Types.ObjectId,
        unique: true,
        default: () => new mongoose.Types.ObjectId(),
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    isSuspended: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);

userSchema.pre('save', async function(next){
    if(this.password && this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

    }
    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User; 