const { StudentBL } = require('../../data/student');
const { ClassBL } = require('../../data/classes');
const resolvers = {
    Query: {
        Students() {
            return StudentBL.getAll();
        },
        StudentsBy(_, args){
            //console.log(args.filter);
            return StudentBL.getBy(args.filter);
        }
    },
    Student: {
        class(parent) {
            if(parent.classId)
                return ClassBL.getClassById(parent.classId);
            return null;
        }
    },

    Mutation: {
        addStudent: (_, { student }) => {
            var id = StudentBL.insert(student);
            return id;
        },

        addStudentToClass: (_, args) => {
            var stuId = args.stuId;
            var classId = args.classId;
            var result = StudentBL.addStudentToClass(stuId, classId);
            return result;
        },
    }
}

module.exports = { resolvers };