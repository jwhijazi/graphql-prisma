const { ClassBL } = require('../../data/classes');

const resolvers = {
    Query: {
        Classes() {
            return [];
        }
    },

    SchoolClass:{
        students(parent){
            return []
        }
    },

    Mutation: {
        addClass: (_, { schClass }) => {
            return ClassBL.insert(schClass.class, schClass.section);
        }
    }
}

module.exports = { resolvers };