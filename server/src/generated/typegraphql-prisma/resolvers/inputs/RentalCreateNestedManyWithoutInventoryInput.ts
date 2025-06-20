import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RentalCreateManyInventoryInputEnvelope } from "../inputs/RentalCreateManyInventoryInputEnvelope";
import { RentalCreateOrConnectWithoutInventoryInput } from "../inputs/RentalCreateOrConnectWithoutInventoryInput";
import { RentalCreateWithoutInventoryInput } from "../inputs/RentalCreateWithoutInventoryInput";
import { RentalWhereUniqueInput } from "../inputs/RentalWhereUniqueInput";

@TypeGraphQL.InputType("RentalCreateNestedManyWithoutInventoryInput", {})
export class RentalCreateNestedManyWithoutInventoryInput {
  @TypeGraphQL.Field(_type => [RentalCreateWithoutInventoryInput], {
    nullable: true
  })
  create?: RentalCreateWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalCreateOrConnectWithoutInventoryInput], {
    nullable: true
  })
  connectOrCreate?: RentalCreateOrConnectWithoutInventoryInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalCreateManyInventoryInputEnvelope, {
    nullable: true
  })
  createMany?: RentalCreateManyInventoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RentalWhereUniqueInput], {
    nullable: true
  })
  connect?: RentalWhereUniqueInput[] | undefined;
}
