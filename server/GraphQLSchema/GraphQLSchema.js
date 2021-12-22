const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql
const User = require('../MongoDBModels/UserDBModel')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id)
      },
    },
    users: {
      type: new GraphQLList(UserType),
      args: { filter: { type: GraphQLString }, limit: { type: GraphQLID } },
      resolve(parent, args) {
        if (args.filter) {
          return User.find({ name: { $regex: args.filter, $options: 'i' } }).limit(parseInt(args.limit))
        } else {
          return User.find({}).limit(parseInt(args.limit))
        }
      },
    }
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          address: args.address,
          description: args.description,
        })
        return user.save()
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(args.id, {
          name: args.name,
          address: args.address,
          description: args.description,
        }, { new: true })
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
