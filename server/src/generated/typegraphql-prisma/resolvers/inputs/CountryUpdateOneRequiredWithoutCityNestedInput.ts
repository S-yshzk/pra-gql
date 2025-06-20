import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCityInput } from "../inputs/CountryCreateOrConnectWithoutCityInput";
import { CountryCreateWithoutCityInput } from "../inputs/CountryCreateWithoutCityInput";
import { CountryUpdateToOneWithWhereWithoutCityInput } from "../inputs/CountryUpdateToOneWithWhereWithoutCityInput";
import { CountryUpsertWithoutCityInput } from "../inputs/CountryUpsertWithoutCityInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutCityNestedInput", {})
export class CountryUpdateOneRequiredWithoutCityNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCityInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCityInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCityInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCityInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCityInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutCityInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutCityInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutCityInput | undefined;
}
