import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoreScalarWhereInput } from "../inputs/StoreScalarWhereInput";
import { StoreUpdateManyMutationInput } from "../inputs/StoreUpdateManyMutationInput";

@TypeGraphQL.InputType("StoreUpdateManyWithWhereWithoutAddressInput", {})
export class StoreUpdateManyWithWhereWithoutAddressInput {
  @TypeGraphQL.Field(_type => StoreScalarWhereInput, {
    nullable: false
  })
  where!: StoreScalarWhereInput;

  @TypeGraphQL.Field(_type => StoreUpdateManyMutationInput, {
    nullable: false
  })
  data!: StoreUpdateManyMutationInput;
}
