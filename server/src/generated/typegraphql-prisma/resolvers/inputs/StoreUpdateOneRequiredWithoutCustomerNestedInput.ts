import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateOrConnectWithoutCustomerInput } from "../inputs/StoreCreateOrConnectWithoutCustomerInput";
import { StoreCreateWithoutCustomerInput } from "../inputs/StoreCreateWithoutCustomerInput";
import { StoreUpdateToOneWithWhereWithoutCustomerInput } from "../inputs/StoreUpdateToOneWithWhereWithoutCustomerInput";
import { StoreUpsertWithoutCustomerInput } from "../inputs/StoreUpsertWithoutCustomerInput";
import { StoreWhereUniqueInput } from "../inputs/StoreWhereUniqueInput";

@TypeGraphQL.InputType("StoreUpdateOneRequiredWithoutCustomerNestedInput", {})
export class StoreUpdateOneRequiredWithoutCustomerNestedInput {
  @TypeGraphQL.Field(_type => StoreCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: StoreCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => StoreCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: StoreCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpsertWithoutCustomerInput, {
    nullable: true
  })
  upsert?: StoreUpsertWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => StoreWhereUniqueInput, {
    nullable: true
  })
  connect?: StoreWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateToOneWithWhereWithoutCustomerInput, {
    nullable: true
  })
  update?: StoreUpdateToOneWithWhereWithoutCustomerInput | undefined;
}
