const { User } = require('../db');

const createUserBb = (idUser, data) => {
    return User.create(data)
        .then(user => user.setNucleo(idUser));
}

const getUserBd = (idUser) => {
    return User.findAll({ where: { UserId: idUser } });
}

const updateUserDb = (id, dataUpdate) => {
    return User.update(dataUpdate, { where: { id } });
};

const deleteUserDb = (id) => {
    return User.destroy({ where: { id } });
};

const optionsUsersDb = () => {
    return ({
        sexo: User.rawAttributes.sexo.validate.isIn[0],
        estudio: User.rawAttributes.estudio.validate.isIn[0],
        etnia: User.rawAttributes.etnia.validate.isIn[0],
        actividad: User.rawAttributes.actividad.validate.isIn[0],
        salud: User.rawAttributes.salud.validate.isIn[0],
    });
};

const allUserForDb = (idNucleo) => {
    return User.findAll({ where: { nucleoId: idNucleo } });
}

module.exports = { createUserBb, getUserBd, updateUserDb, deleteUserDb, optionsUsersDb, allUserForDb }