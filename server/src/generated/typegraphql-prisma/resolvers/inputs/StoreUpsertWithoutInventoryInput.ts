import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreCreateWithoutInventoryInput } from "../inputs/StoreCreateWithoutInventoryInput";
import { StoreUpdateWithoutInventoryInput } from "../inputs/StoreUpdateWithoutInventoryInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpsertWithoutInventoryInput", {})
export class StoreUpsertWithoutInventoryInput {
  @TypeGraphQL.Field(_type => StoreUpdateWithoutInventoryInput, {
    nullable: false
  })
  update!: StoreUpdateWithoutInventoryInput;

  @TypeGraphQL.Field(_type => StoreCreateWithoutInventoryInput, {
    nullable: false
  })
  create!: StoreCreateWithoutInventoryInput;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
