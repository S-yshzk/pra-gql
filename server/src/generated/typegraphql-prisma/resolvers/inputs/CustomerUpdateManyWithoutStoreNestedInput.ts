import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyStoreInputEnvelope } from "../inputs/CustomerCreateManyStoreInputEnvelope";
import { CustomerCreateOrConnectWithoutStoreInput } from "../inputs/CustomerCreateOrConnectWithoutStoreInput";
import { CustomerCreateWithoutStoreInput } from "../inputs/CustomerCreateWithoutStoreInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutStoreInput } from "../inputs/CustomerUpdateManyWithWhereWithoutStoreInput";
import { CustomerUpdateWithWhereUniqueWithoutStoreInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutStoreInput";
import { CustomerUpsertWithWhereUniqueWithoutStoreInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutStoreInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutStoreNestedInput", {})
export class CustomerUpdateManyWithoutStoreNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutStoreInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutStoreInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutStoreInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyStoreInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyStoreInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutStoreInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutStoreInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
