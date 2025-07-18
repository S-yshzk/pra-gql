import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityWhereInput } from "../../inputs/CityWhereInput";

@TypeGraphQL.ArgsType()
export class CountryCountCityArgs {
  @TypeGraphQL.Field(_type => CityWhereInput, {
    nullable: true
  })
  where?: CityWhereInput | undefined;
}
