import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InventoryCreateManyFilmInputEnvelope } from "../inputs/InventoryCreateManyFilmInputEnvelope";
import { InventoryCreateOrConnectWithoutFilmInput } from "../inputs/InventoryCreateOrConnectWithoutFilmInput";
import { InventoryCreateWithoutFilmInput } from "../inputs/InventoryCreateWithoutFilmInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";

@TypeGraphQL.InputType("InventoryCreateNestedManyWithoutFilmInput", {})
export class InventoryCreateNestedManyWithoutFilmInput {
  @TypeGraphQL.Field(_type => [InventoryCreateWithoutFilmInput], {
    nullable: true
  })
  create?: InventoryCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [InventoryCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: InventoryCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => InventoryCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: InventoryCreateManyFilmInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [InventoryWhereUniqueInput], {
    nullable: true
  })
  connect?: InventoryWhereUniqueInput[] | undefined;
}
