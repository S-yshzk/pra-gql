import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyStoreInputEnvelope } from "../inputs/CustomerCreateManyStoreInputEnvelope";
import { CustomerCreateOrConnectWithoutStoreInput } from "../inputs/CustomerCreateOrConnectWithoutStoreInput";
import { CustomerCreateWithoutStoreInput } from "../inputs/CustomerCreateWithoutStoreInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutStoreInput", {})
export class CustomerCreateNestedManyWithoutStoreInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutStoreInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutStoreInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutStoreInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManyStoreInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManyStoreInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
