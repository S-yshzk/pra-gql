import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateOrConnectWithoutInventoryInput } from "../inputs/FilmCreateOrConnectWithoutInventoryInput";
import { FilmCreateWithoutInventoryInput } from "../inputs/FilmCreateWithoutInventoryInput";
import { FilmUpdateToOneWithWhereWithoutInventoryInput } from "../inputs/FilmUpdateToOneWithWhereWithoutInventoryInput";
import { FilmUpsertWithoutInventoryInput } from "../inputs/FilmUpsertWithoutInventoryInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmUpdateOneRequiredWithoutInventoryNestedInput", {})
export class FilmUpdateOneRequiredWithoutInventoryNestedInput {
  @TypeGraphQL.Field(_type => FilmCreateWithoutInventoryInput, {
    nullable: true
  })
  create?: FilmCreateWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmCreateOrConnectWithoutInventoryInput, {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpsertWithoutInventoryInput, {
    nullable: true
  })
  upsert?: FilmUpsertWithoutInventoryInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: true
  })
  connect?: FilmWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateToOneWithWhereWithoutInventoryInput, {
    nullable: true
  })
  update?: FilmUpdateToOneWithWhereWithoutInventoryInput | undefined;
}
