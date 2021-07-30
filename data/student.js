const { PrismaClient } = require('@prisma/client');
const { student } = new PrismaClient();

const StudentBL = {
    async getAll() {
        return await student.findMany();
    },
    async getBy(filters) {
        var orFilter = [];
        filters.forEach(filter => {
            var andFilter = {};
            if (filter.name) {
                andFilter.name = { contains: filter.name, mode: 'insensitive' };
            }
            if (filter.gender) {
                //andFilter.push({gender: filter.gender.toString()})
                andFilter.gender = filter.gender.toString();
            }
            if (filter.hasDisabilities != null) {
                andFilter.hasDisabilities = filter.hasDisabilities;
            }

            orFilter.push(andFilter);
        });
        return await student.findMany({
            where: {
                OR: orFilter
            }
        });
    },
    async getStudentsInClass(classId) {
        if (classId) {
            return await student.findMany({ where: { classId: classId } });
        }
        return [];
    },


    async insert(model) {
        const newStudent = await student.create({
            data: {
                name: model.name,
                gender: model.gender,
                address: model.address,
                hasDisabilities: model.hasDisabilities
            }
        });

        return newStudent.id;
    },
    async addStudentToClass(stuId, classId) {
        const _student = await student.findUnique({ where: { id: stuId } });
        if (_student != null) {
            const newStudent = await student.update({
                where: {
                    id: stuId
                },
                data: {
                    classId: classId
                }
            });
            return newStudent.classId == classId;
        }
        return false;
    }
};

module.exports = { StudentBL }
