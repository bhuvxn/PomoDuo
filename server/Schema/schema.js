const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require("graphql");
const { default: User } = require("../models/User");
  


const TaskType = new GraphQLObjectType({
    name : 'Task',
    fields : () => ({
        //add fields from models Task
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        //relationship between Task and user
        User:{
            type:UserType,
            resolve(parent, args){
                User.findById(parent.UserId)
            }
        }
    })
  })


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    })
})
//queryes
const RootQuery = new GraphQLObjectType({
    //FIND A USER
    name : "RootQueryType",
    fields : {
        users:{},
    },

})

//mutations

module.exports = new GraphQLSchema({
    query: RootQuery,
  });
  