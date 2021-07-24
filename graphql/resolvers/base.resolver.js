const resolvers = {
    Query: {
        hello(){
            return "Hi Jalal";
        }
    },

    Mutation:{
        hello(_, {}){
            return "Hi Mutaion";
        }
    }
}


module.exports = { resolvers };