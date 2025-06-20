import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textUpdateManyMutationInput } from "../../../inputs/Film_textUpdateManyMutationInput";
import { Film_textWhereInput } from "../../../inputs/Film_textWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textUpdateManyMutationInput, {
    nullable: false
  })
  data!: Film_textUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Film_textWhereInput, {
    nullable: true
  })
  where?: Film_textWhereInput | undefined;
}
