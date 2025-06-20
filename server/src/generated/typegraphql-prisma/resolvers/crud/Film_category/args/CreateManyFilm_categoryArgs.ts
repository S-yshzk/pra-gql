import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryCreateManyInput } from "../../../inputs/Film_categoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFilm_categoryArgs {
  @TypeGraphQL.Field(_type => [Film_categoryCreateManyInput], {
    nullable: false
  })
  data!: Film_categoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
