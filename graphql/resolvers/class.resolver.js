const { ClassBL } = require('../../data/classes');
const { StudentBL } = require('../../data/student');

const resolvers = {
    Query: {
        Classes() {
            return ClassBL.getAll();
        }
    },

    SchoolClass:{
        students(parent){
            return StudentBL.getStudentsInClass(parent.id);
        }
    },

    Mutation: {
        addClass: (_, { schClass }) => {
            return ClassBL.insert(schClass.class, schClass.section);
        }
    }
}

module.exports = { resolvers };