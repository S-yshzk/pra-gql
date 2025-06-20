import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CountryOrderByWithRelationInput } from "../../../inputs/CountryOrderByWithRelationInput";
import { CountryWhereInput } from "../../../inputs/CountryWhereInput";
import { CountryWhereUniqueInput } from "../../../inputs/CountryWhereUniqueInput";
import { CountryScalarFieldEnum } from "../../../../enums/CountryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCountryArgs {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CountryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CountryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  cursor?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CountryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"country_id" | "country" | "last_update"> | undefined;
}
