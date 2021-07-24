const { StudentBL } = require('../../data/student');
const resolvers = {
    Query: {
        Students() {
            return StudentBL.getAll();
        },
        StudentsBy(_, args){
            return [];
        }
    },
    Student: {
        class(parent) {
            return {};
        }
    },

    Mutation: {
        addStudent: (_, { student }) => {
            var id = StudentBL.insert(student);
            return id;
        },

        addStudentToClass: (_, args) => {
            return '123';
        },
    }
}

module.exports = { resolvers };