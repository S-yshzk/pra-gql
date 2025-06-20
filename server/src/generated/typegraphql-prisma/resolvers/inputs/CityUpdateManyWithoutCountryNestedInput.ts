import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyCountryInputEnvelope } from "../inputs/CityCreateManyCountryInputEnvelope";
import { CityCreateOrConnectWithoutCountryInput } from "../inputs/CityCreateOrConnectWithoutCountryInput";
import { CityCreateWithoutCountryInput } from "../inputs/CityCreateWithoutCountryInput";
import { CityScalarWhereInput } from "../inputs/CityScalarWhereInput";
import { CityUpdateManyWithWhereWithoutCountryInput } from "../inputs/CityUpdateManyWithWhereWithoutCountryInput";
import { CityUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/CityUpdateWithWhereUniqueWithoutCountryInput";
import { CityUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/CityUpsertWithWhereUniqueWithoutCountryInput";
import { CityWhereUniqueInput } from "../inputs/CityWhereUniqueInput";

@TypeGraphQL.InputType("CityUpdateManyWithoutCountryNestedInput", {})
export class CityUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [CityCreateWithoutCountryInput], {
    nullable: true
  })
  create?: CityCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: CityCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: CityUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => CityCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: CityCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  set?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  delete?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityWhereUniqueInput], {
    nullable: true
  })
  connect?: CityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: CityUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: CityUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CityScalarWhereInput[] | undefined;
}
