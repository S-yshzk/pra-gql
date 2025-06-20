import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorCreateManyInput } from "../../../inputs/Film_actorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFilm_actorArgs {
  @TypeGraphQL.Field(_type => [Film_actorCreateManyInput], {
    nullable: false
  })
  data!: Film_actorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
