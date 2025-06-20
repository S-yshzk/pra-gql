import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Film_categoryScalarWhereInput", {})
export class Film_categoryScalarWhereInput {
  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereInput], {
    nullable: true
  })
  AND?: Film_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereInput], {
    nullable: true
  })
  OR?: Film_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryScalarWhereInput], {
    nullable: true
  })
  NOT?: Film_categoryScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  film_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  category_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_update?: DateTimeFilter | undefined;
}
