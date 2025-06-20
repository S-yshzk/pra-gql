import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryUpdateWithoutFilmInput } from "../inputs/Film_categoryUpdateWithoutFilmInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryUpdateWithWhereUniqueWithoutFilmInput", {})
export class Film_categoryUpdateWithWhereUniqueWithoutFilmInput {
  @TypeGraphQL.Field(_type => Film_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Film_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Film_categoryUpdateWithoutFilmInput, {
    nullable: false
  })
  data!: Film_categoryUpdateWithoutFilmInput;
}
