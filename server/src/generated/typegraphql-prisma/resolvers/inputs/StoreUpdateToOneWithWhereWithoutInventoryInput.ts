import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreUpdateWithoutInventoryInput } from "../inputs/StoreUpdateWithoutInventoryInput";
import { StoreWhereInput } from "../inputs/StoreWhereInput";

@TypeGraphQL.InputType("StoreUpdateToOneWithWhereWithoutInventoryInput", {})
export class StoreUpdateToOneWithWhereWithoutInventoryInput {
  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => StoreUpdateWithoutInventoryInput, {
    nullable: false
  })
  data!: StoreUpdateWithoutInventoryInput;
}
