const { PrismaClient } = require('@prisma/client');
const { student } = new PrismaClient();

const StudentBL = {
    async getAll(){
        return await student.findMany();
    },
    async insert(model){
        const newStudent = await student.create({
            data:{
                name: model.name,
                gender: model.gender,
                address: model.address,
                hasDisabilities: model.hasDisabilities
            }
        });

        return newStudent.id;
    }
};

module.exports = {StudentBL}
