import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateOrConnectWithoutInventoryInput } from "../inputs/FilmCreateOrConnectWithoutInventoryInput";
import { FilmCreateWithoutInventoryInput } from "../inputs/FilmCreateWithoutInventoryInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmCreateNestedOneWithoutInventoryInput", {})
export class FilmCreateNestedOneWithoutInventoryInput {
  @TypeGraphQL.Field(_type => FilmCreateWithoutInventoryInput, {
    nullable: true
  })
  create?: FilmCreateWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmCreateOrConnectWithoutInventoryInput, {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: true
  })
  connect?: FilmWhereUniqueInput | undefined;
}
