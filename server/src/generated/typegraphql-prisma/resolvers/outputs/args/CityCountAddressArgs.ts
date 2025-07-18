import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AddressWhereInput } from "../../inputs/AddressWhereInput";

@TypeGraphQL.ArgsType()
export class CityCountAddressArgs {
  @TypeGraphQL.Field(_type => AddressWhereInput, {
    nullable: true
  })
  where?: AddressWhereInput | undefined;
}
