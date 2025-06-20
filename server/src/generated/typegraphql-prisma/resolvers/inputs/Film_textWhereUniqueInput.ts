import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_textWhereInput } from "../inputs/Film_textWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Film_textWhereUniqueInput", {})
export class Film_textWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  film_id?: number | undefined;

  @TypeGraphQL.Field(_type => [Film_textWhereInput], {
    nullable: true
  })
  AND?: Film_textWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_textWhereInput], {
    nullable: true
  })
  OR?: Film_textWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_textWhereInput], {
    nullable: true
  })
  NOT?: Film_textWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;
}
