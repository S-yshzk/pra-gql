import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyCountryInputEnvelope } from "../inputs/CityCreateManyCountryInputEnvelope";
import { CityCreateOrConnectWithoutCountryInput } from "../inputs/CityCreateOrConnectWithoutCountryInput";
import { CityCreateWithoutCountryInput } from "../inputs/CityCreateWithoutCountryInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityCreateNestedManyWithoutCountryInput", {})
export class CityCreateNestedManyWithoutCountryInput {
  @TypeGraphQL.Field(_type => [CityCreateWithoutCountryInput], {
    nullable: true
  })
  create?: CityCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => CityCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: CityCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  connect?: CityWhereUniqueInput[] | undefined;
}
