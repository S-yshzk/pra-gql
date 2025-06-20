import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryCreateManyInput } from "../../../inputs/CountryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCountryArgs {
  @TypeGraphQL.Field(_type => [CountryCreateManyInput], {
    nullable: false
  })
  data!: CountryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
