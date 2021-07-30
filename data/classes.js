const { PrismaClient } = require('@prisma/client');
const { schoolClass } = new PrismaClient();

const ClassBL = {
    async getAll(){
        return await schoolClass.findMany();
    },
    async getClassById(classId){
        return await schoolClass.findUnique({where: {id: classId}});
    },

    async insert(name, section){
        const newClass = await schoolClass.create({
            data: {
                class: name,
                section: section,
            }
        });

        return newClass.id;
    }
}


module.exports = {ClassBL}