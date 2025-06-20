import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateOrConnectWithoutAddressInput } from "../inputs/CityCreateOrConnectWithoutAddressInput";
import { CityCreateWithoutAddressInput } from "../inputs/CityCreateWithoutAddressInput";
import { CityUpdateToOneWithWhereWithoutAddressInput } from "../inputs/CityUpdateToOneWithWhereWithoutAddressInput";
import { CityUpsertWithoutAddressInput } from "../inputs/CityUpsertWithoutAddressInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateOneRequiredWithoutAddressNestedInput", {})
export class CityUpdateOneRequiredWithoutAddressNestedInput {
  @TypeGraphQL.Field(_type => CityCreateWithoutAddressInput, {
    nullable: true
  })
  create?: CityCreateWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CityCreateOrConnectWithoutAddressInput, {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CityUpsertWithoutAddressInput, {
    nullable: true
  })
  upsert?: CityUpsertWithoutAddressInput | undefined;

  @TypeGraphQL.Field(_type => CityWhereUniqueInput, {
    nullable: true
  })
  connect?: CityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CityUpdateToOneWithWhereWithoutAddressInput, {
    nullable: true
  })
  update?: CityUpdateToOneWithWhereWithoutAddressInput | undefined;
}
