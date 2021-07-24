const {  gql }  = require('apollo-server-express');
const { readFileSync } = require('fs');
const path = require("path");

const baseSchema = readFileSync(path.resolve(__dirname, 'schema/base.graphql')).toString('utf-8');
const studentsSchema = readFileSync(path.resolve(__dirname, 'schema/student.graphql')).toString('utf-8');
const classSchema = readFileSync(path.resolve(__dirname, 'schema/class.graphql')).toString('utf-8');

const schema = baseSchema + studentsSchema + classSchema;
const typeDefs = gql(schema);

module.exports = {typeDefs};