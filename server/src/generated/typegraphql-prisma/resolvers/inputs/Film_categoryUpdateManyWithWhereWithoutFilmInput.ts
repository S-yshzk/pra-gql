import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryScalarWhereInput } from "../inputs/Film_categoryScalarWhereInput";
import { Film_categoryUpdateManyMutationInput } from "../inputs/Film_categoryUpdateManyMutationInput";

@TypeGraphQL.InputType("Film_categoryUpdateManyWithWhereWithoutFilmInput", {})
export class Film_categoryUpdateManyWithWhereWithoutFilmInput {
  @TypeGraphQL.Field(_type => Film_categoryScalarWhereInput, {
    nullable: false
  })
  where!: Film_categoryScalarWhereInput;

  @TypeGraphQL.Field(_type => Film_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Film_categoryUpdateManyMutationInput;
}
