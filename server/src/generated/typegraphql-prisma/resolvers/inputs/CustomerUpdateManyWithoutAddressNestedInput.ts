import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyAddressInputEnvelope } from "../inputs/CustomerCreateManyAddressInputEnvelope";
import { CustomerCreateOrConnectWithoutAddressInput } from "../inputs/CustomerCreateOrConnectWithoutAddressInput";
import { CustomerCreateWithoutAddressInput } from "../inputs/CustomerCreateWithoutAddressInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutAddressInput } from "../inputs/CustomerUpdateManyWithWhereWithoutAddressInput";
import { CustomerUpdateWithWhereUniqueWithoutAddressInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutAddressInput";
import { CustomerUpsertWithWhereUniqueWithoutAddressInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutAddressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutAddressNestedInput", {})
export class CustomerUpdateManyWithoutAddressNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutAddressInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutAddressInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyAddressInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyAddressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutAddressInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutAddressInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
