import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateWithoutFilmInput } from "../inputs/Film_categoryCreateWithoutFilmInput";
import { Film_categoryUpdateWithoutFilmInput } from "../inputs/Film_categoryUpdateWithoutFilmInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryUpsertWithWhereUniqueWithoutFilmInput", {})
export class Film_categoryUpsertWithWhereUniqueWithoutFilmInput {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_categoryUpdateWithoutFilmInput, {
    nullable: false
  })
  update!: Film_categoryUpdateWithoutFilmInput;

  @TypeGraphQL.Field(_type => Film_categoryCreateWithoutFilmInput, {
    nullable: false
  })
  create!: Film_categoryCreateWithoutFilmInput;
}
