import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateOrConnectWithoutRentalInput } from "../inputs/InventoryCreateOrConnectWithoutRentalInput";
import { InventoryCreateWithoutRentalInput } from "../inputs/InventoryCreateWithoutRentalInput";
import { InventoryUpdateToOneWithWhereWithoutRentalInput } from "../inputs/InventoryUpdateToOneWithWhereWithoutRentalInput";
import { InventoryUpsertWithoutRentalInput } from "../inputs/InventoryUpsertWithoutRentalInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryUpdateOneRequiredWithoutRentalNestedInput", {})
export class InventoryUpdateOneRequiredWithoutRentalNestedInput {
  @TypeGraphQL.Field(_type => InventoryCreateWithoutRentalInput, {
    nullable: true
  })
  create?: InventoryCreateWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateOrConnectWithoutRentalInput, {
    nullable: true
  })
  connectOrCreate?: InventoryCreateOrConnectWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpsertWithoutRentalInput, {
    nullable: true
  })
  upsert?: InventoryUpsertWithoutRentalInput | undefined;

  @TypeGraphQL.Field(_type => InventoryWhereUniqueInput, {
    nullable: true
  })
  connect?: InventoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => InventoryUpdateToOneWithWhereWithoutRentalInput, {
    nullable: true
  })
  update?: InventoryUpdateToOneWithWhereWithoutRentalInput | undefined;
}
